import React, { useState, useRef } from "react";
import { 
  Shield, Dumbbell, HeartPulse, Flame, Activity, Clock, UserCheck, 
  ArrowRight, MapPin, Mail, Phone, Menu, X, Instagram, Facebook, Linkedin, Map,
  ChevronLeft, ChevronRight, Star, Plus, Check, Lock, MoveRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Ons Aanbod", href: "#ons-aanbod" },
  { label: "Over Word Fitter", href: "#het-team" },
  { label: "Onze prijzen", href: "#prijzen" },
  { label: "Lesrooster", href: "#lesrooster" },
  { label: "Contact", href: "#contact" }
];

const OFFERINGS = [
  { title: "Functional Training", image: "/functionaltraining.jpg" },
  { title: "Krachttraining", image: "/krachttraining.jpg" },
  { title: "Personal Training", image: "/personaltraining.jpg" },
  { title: "Kickboksen", image: "/kickboksen.jpg" },
  { title: "Kickboksen Beginners", image: "/kickboksenbeginner.jpg" },
  { title: "Kickboksen & Silat", image: "/kickboksensilat.jpg" },
  { title: "Vrij trainen", image: "/freegym.jpg" },
  { title: "Jeugd", image: "/jeugd.png" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"6" | "12">("6");
  const [scrollProgressMain, setScrollProgressMain] = useState(0);
  const [scrollProgressTemp, setScrollProgressTemp] = useState(0);
  const [scrollProgressTeam, setScrollProgressTeam] = useState(0);
  const [scrollProgressOfferings, setScrollProgressOfferings] = useState(0);
  const [scrollProgressReviews, setScrollProgressReviews] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const reviewsSliderRef = useRef<HTMLDivElement>(null);

  const handleScrollProgress = (e: React.UIEvent<HTMLDivElement>, setProgress: React.Dispatch<React.SetStateAction<number>>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setProgress(el.scrollLeft / maxScroll);
    } else {
      setProgress(0);
    }
  };

  const slideOfferings = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const slideReviews = (direction: "left" | "right") => {
    if (reviewsSliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      reviewsSliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface selection:bg-primary-container selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-primary-container/95 backdrop-blur-[20px] border-b border-black/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Word Fitter Logo" 
              className="h-10 md:h-12 object-contain"
              style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9)) drop-shadow(0 0 2px rgba(255,255,255,0.6))" }}
            />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 lg:gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-xs lg:text-sm font-bold uppercase tracking-widest text-white hover:text-white/80 hover:underline decoration-2 underline-offset-4 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="ml-2 lg:ml-4 bg-white text-primary-container px-4 py-2 lg:px-6 lg:py-3 font-bold uppercase tracking-widest text-xs lg:text-sm hover:opacity-90 shadow-md transition-opacity"
            >
              Boek Proefles
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white drop-shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary-container border-t border-white/20 flex flex-col px-6 py-4 shadow-[0_40px_40px_rgba(0,0,0,0.6)]">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-4 text-sm font-bold uppercase tracking-widest text-white border-b border-white/20"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 mb-2 bg-white text-primary-container text-center py-4 font-bold uppercase tracking-widest text-sm shadow-md"
            >
              Boek Proefles
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-12 flex flex-col justify-center min-h-[90vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/intro-video-wordfitter.mp4" type="video/mp4" />
          </video>
          {/* Gecentreerde overlay die de tekst in het midden perfect leesbaar houdt, terwijl zijkanten lichter blijven */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="max-w-5xl flex flex-col items-center">
            
            <h1 className="font-display uppercase text-5xl sm:text-7xl lg:text-[7rem] font-extrabold leading-tight sm:leading-[1.0] tracking-tight mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] break-words">
              <span className="text-[1.15em] block">
                <span className="text-black" style={{ WebkitTextStroke: "2px white", textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>W</span><span className="text-primary-container" style={{ WebkitTextStroke: "2px white", textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>ORD</span>{' '}
                <span className="text-black" style={{ WebkitTextStroke: "2px white", textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>F</span><span className="text-primary-container" style={{ WebkitTextStroke: "2px white", textShadow: "0 0 8px rgba(255,255,255,0.6)" }}>ITTER</span>
              </span>
              <span className="text-white text-[0.6em] block mt-2 sm:mt-4">GRONINGEN</span>
            </h1>
            <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-sans tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
              Personal Training & Kleinschalige Groepslessen
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#contact"
                className="inline-flex justify-center items-center gap-3 bg-primary-container text-white px-10 py-5 font-sans font-bold text-lg uppercase tracking-wider shadow-[0_10px_30px_rgba(192,27,27,0.3)] hover:opacity-90 hover:scale-[1.02] transition-all"
              >
                Boek een gratis proefles <ArrowRight size={22} className="-mt-1" />
              </a>
              <a 
                href="#ons-aanbod"
                className="inline-flex justify-center items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 font-sans font-bold text-lg uppercase tracking-wider hover:bg-white/20 transition-colors shadow-lg"
              >
                Bekijk ons aanbod
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVER WORD FITTER (REBUILT COMPREHENSIVE SECTION) */}
      <section id="over" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-surface text-on-surface border-t border-b border-surface-highest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* DEEL 1: INTRO & MISSIE */}
          <div className="mb-24 max-w-4xl">
            <div className="font-sans font-bold text-machine-grey uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary-container"></span>
              The Blueprint
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-[1.0] text-on-surface">
              Jouw potentie. <br /> <span className="text-primary-container">Onze prioriteit.</span>
            </h2>
            <div className="text-machine-grey text-lg font-sans space-y-6 border-l-4 border-surface-highest pl-6 lg:pl-10">
              <p>
                Word Fitter is een kleinschalige sportstudio in Groningen waar <strong className="text-on-surface">persoonlijke aandacht</strong> en <strong className="text-on-surface">professionele begeleiding</strong> centraal staan. Of je nu kiest voor Personal Training of onze Small Group lessen: wij bieden hoogwaardige, gevarieerde workouts in een laagdrempelige en gezellige sfeer.
                
              </p>
              <p>
                Wij geloven dat iedereen fitter kan worden, op eigen tempo en niveau. Of je nu focust op afvallen, fit wilt blijven tijdens 
                de zwangerschap, extra performance zoekt als (top)sporter, of simpelweg structureel sterker wilt worden: wij bouwen het protocol.
              </p>
            </div>
          </div>

          {/* DEEL 2: KERNWAARDEN (DE 3 P's) */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
            {[
              { icon: <UserCheck size={24}/>, title: "Persoonlijk", desc: "Aanpak afgestemd op jouw doelen, leefstijl, voeding en plezier." },
              { icon: <Flame size={24}/>, title: "Plezier", desc: "Elke sessie is anders. Variatie in elke les met jouw vaste trainer." },
              { icon: <Shield size={24}/>, title: "Professioneel", desc: "Uitsluitend toegewijde, gediplomeerde professionals op de werkvloer." }
            ].map((p, i) => (
              <div key={i} className="bg-surface-low border border-surface-highest p-5 md:p-6 hover:border-primary-container transition-colors group">
                <div className="text-primary-container mb-4 bg-surface-high w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight mb-2 text-on-surface">{p.title}</h3>
                <p className="text-machine-grey text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          
          {/* DEEL 2B: ONS AANBOD (Verplaatst) */}
          <div id="ons-aanbod" className="scroll-mt-24 pt-12 md:pt-16 border-t border-surface-highest">

          <div className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Ons Aanbod
              </h2>
              <p className="text-machine-grey max-w-2xl leading-relaxed">Voor ieder doel de perfecte workout. Of je nu sterker wilt worden, je conditie wilt opbouwen of je techniek wilt aanscherpen: train op jouw eigen niveau, met deskundige begeleiding en een flinke dosis plezier.</p>
            </div>
            <div className="font-display text-primary-container text-lg md:text-xl font-bold uppercase tracking-widest md:text-right max-w-xs">
              8 manieren om fitter te worden!
            </div>
          </div>

          {/* Slider Layout Component */}
          <div className="relative group/slider">

            {/* Interactive Scroll Progress Indicator (All screens) */}
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-1.5 bg-surface-highest rounded-full overflow-hidden relative border border-outline-variant/30">
                <div 
                  className="absolute top-0 bottom-0 left-0 bg-primary-container rounded-full w-1/2 transition-transform duration-100 ease-out"
                  style={{ transform: `translateX(${scrollProgressOfferings * 100}%)` }}
                />
              </div>
            </div>

            {/* Custom Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 xl:-left-12 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hidden md:block">
              <button 
                onClick={() => slideOfferings("left")}
                className="bg-surface-highest text-on-surface hover:bg-primary-container hover:text-white p-4 border border-outline-variant transition-colors"
                aria-label="Scroll Links"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 xl:-right-12 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hidden md:block">
              <button 
                onClick={() => slideOfferings("right")}
                className="bg-surface-highest text-on-surface hover:bg-primary-container hover:text-white p-4 border border-outline-variant transition-colors"
                aria-label="Scroll Rechts"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Track */}
            <div 
              ref={sliderRef}
              onScroll={(e) => handleScrollProgress(e, setScrollProgressOfferings)}
              className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-8 snap-x snap-mandatory scroll-smooth pb-8 pt-4 px-2 -mx-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {OFFERINGS.map((item, idx) => (
                <a href="#lesrooster" key={idx} className="group block relative overflow-hidden bg-surface border border-outline-variant aspect-[4/3] sm:aspect-square md:aspect-[4/3] flex flex-col justify-end flex-none w-[85vw] sm:w-[45vw] md:w-[40vw] lg:w-[280px] xl:w-[305px] snap-center shrink-0">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    {/* Brutalist Gradient Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent mix-blend-multiply opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 border-l-4 border-primary-container m-4 bg-surface/90 backdrop-blur-[10px] p-4 group-hover:bg-surface group-hover:border-white transition-colors duration-300">
                    <h3 className="font-display text-lg lg:text-xl font-bold uppercase tracking-tight text-on-surface leading-none">{item.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-primary-container font-bold text-[10px] uppercase tracking-widest">
                      <span>Bekijk Module</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:text-white transition-all" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        
          </div>

        </div>
      </section>

      {/* HET TEAM (REX & TRAINERS) */}
      <section id="het-team" className="pt-16 md:pt-20 pb-12 md:pb-16 bg-surface text-on-surface border-t border-surface-highest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-on-surface">
              De gezichten achter Word Fitter
            </h2>
          </div>

          {/* DEEL 3: UITGELICHT - OPRICHTER REX BUREMA */}
          <div className="bg-surface-high border border-outline-variant p-8 md:p-12 lg:p-16 mb-24 md:mb-32 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch relative z-10">
              {/* LINKER KANT: FOTO */}
              <div className="shrink-0 flex justify-center w-full md:w-[280px] lg:w-[340px]">
                <div className="w-[240px] h-[240px] md:w-full md:h-auto md:flex-1 rounded-[12px] overflow-hidden bg-surface-highest border border-surface-highest relative shadow-2xl mb-4 md:mb-0">
                  <div className="absolute inset-0 bg-[url('/foto-rex.jpg')] bg-cover bg-[center_top] grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"></div>
                </div>
              </div>

              {/* RECHTER KANT: INFORMATIE */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left text-on-surface w-full py-2">
                <div className="mb-6 border-b border-surface-highest pb-4">
                  <h3 className="font-display font-black uppercase text-3xl md:text-4xl text-on-surface">Rex Burema</h3>
                  <div className="text-primary-container text-sm md:text-base font-bold uppercase tracking-widest mt-1">— Oprichter</div>
                </div>

                <h4 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 text-on-surface leading-tight">
                  Levenslange Passie voor Kracht & Vechtsport.
                </h4>
                <p className="text-machine-grey leading-relaxed mb-8 text-base lg:text-lg">
                  Rex combineert jarenlange praktijkervaring op de sportvloer met een flinke dosis vakkennis en een nuchtere, persoonlijke aanpak.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-4 text-left">
                  <div>
                    <h4 className="font-bold text-on-surface text-xs uppercase tracking-widest mb-4 border-b border-surface-highest pb-3">Certificeringen</h4>
                    <ul className="text-sm text-machine-grey space-y-3">
                      <li className="flex gap-2"><ArrowRight size={14} className="text-primary-container shrink-0 mt-1" /> Fitness A/B & MBO Sport</li>
                      <li className="flex gap-2"><ArrowRight size={14} className="text-primary-container shrink-0 mt-1" /> Gewichtheftrainer B/C</li>
                      <li className="flex gap-2"><ArrowRight size={14} className="text-primary-container shrink-0 mt-1" /> LAPT Red Label</li>
                      <li className="flex gap-2"><ArrowRight size={14} className="text-primary-container shrink-0 mt-1" /> Voedingsleer & Sportmassage</li>
                    </ul>
                  </div>
                  <div className="bg-surface p-6 border-l-2 border-primary-container shadow-[5px_5px_0px_rgba(27,27,27,0.5)]">
                    <h4 className="font-bold text-on-surface text-xs uppercase tracking-widest mb-3 text-primary-container">Fun Fact / Track Record</h4>
                    <p className="text-sm text-machine-grey italic">
                      Beoefent al 20+ jaar Pencak Silat. Heeft een eigen wedstrijdteam en veroverde medailles op nationaal én internationaal niveau (o.a. <strong className="text-on-surface not-italic">WK in Bali, 2016</strong>).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DEEL 4: TEAM GRID (SMOELENBOEK) */}
          <div className="mb-0">
            <div className="flex flex-wrap justify-between items-end mb-12 border-b border-outline-variant pb-6 gap-4">
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter text-on-surface">
                Het Team
              </h3>
              <div className="text-machine-grey font-bold uppercase tracking-widest text-xs py-2 px-4 bg-surface-low border border-surface-highest">
                09 Trainers Available
              </div>
            </div>

            {/* Interactive Scroll Progress Indicator (Mobile) */}
            <div className="md:hidden mb-6 flex justify-center">
              <div className="w-16 h-1.5 bg-surface-highest rounded-full overflow-hidden relative border border-outline-variant/30">
                <div 
                  className="absolute top-0 bottom-0 left-0 bg-primary-container rounded-full w-1/2 transition-transform duration-100 ease-out"
                  style={{ transform: `translateX(${scrollProgressTeam * 100}%)` }}
                />
              </div>
            </div>

            <div 
              className="flex md:grid overflow-x-auto snap-x snap-mandatory pt-2 pb-8 -mx-6 px-6 md:mx-0 md:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onScroll={(e) => handleScrollProgress(e, setScrollProgressTeam)}
            >
              {[
                { name: "Rex", role: "PT & Groepslessen", classes: "Kickboxing, Krachttraining, Pencak Silat", char: "Motiverend, Humor", quote: "Aan de bak!", image: "/foto-rex.jpg" },
                { name: "Marleen", role: "PT & Groepslessen", classes: "Strength & Conditioning", char: "Empathisch, Kan Frans praten, Humor", quote: "Oui, harder!", image: "/marleen.jpg" },
                { name: "Martijn", role: "PT & Groepslessen", classes: "Strength & Cond, Kickboksen, Sport Silat", char: "Aardige jongen, Beest, Krachtig", quote: "Gas erop.", image: "/martijn.jpg" },
                { name: "Johan", role: "PT & Groepslessen", classes: "Triatlon, Kracht, Hardloopscholing", char: "Blijft doorgaan, Motiverend, Sportief", quote: "Nog één rep.", image: "/johan.png" },
                { name: "Thessa", role: "Groepslessen", classes: "Strength & Cond, Kickboksen, Sport Silat", char: "Sociaal, Killer, Humor", quote: "Handen hoog.", image: "/thessa.png" },
                { name: "Dennis", role: "Groepslessen", classes: "Kickboksen", char: "Old school master, Hard, Vriendelijk", quote: "Focus en rust.", image: "/dennis.png" },
                { name: "Eliska", role: "Groepslessen", classes: "Strength & Conditioning, Hyrox", char: "Tsjechische charme, Vrolijk", quote: "Let's go!", image: "/eliska.png" },
                { name: "Kelly", role: "Groepslessen", classes: "Kickboxing, Strength & Performance", char: "Heavy Muscle, Recht door zee", quote: "Niet zeiken.", image: "/kelly.jpg" },
                { name: "Kasper", role: "Box Coach & Groepslessen", classes: "Boxing, Kickboxing", char: "Gevoel voor taal, Inspirator", quote: "Vloeiend bewegen.", image: "/kasper.png" },
              ].map((member, i) => (
                <div key={i} className="bg-surface-low border border-outline-variant p-6 lg:p-8 hover:border-primary-container hover:bg-surface transition-all duration-300 group flex flex-col h-full shadow-[0_10px_30px_rgba(27,27,27,0.2)] relative overflow-hidden min-w-[85vw] sm:min-w-[45vw] md:min-w-0 shrink-0 snap-center">
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <h4 className="font-display font-black uppercase text-2xl text-on-surface mb-1">{member.name}</h4>
                      <div className="inline-block bg-primary-container/10 text-primary-container px-2 py-1 font-bold text-[10px] uppercase tracking-widest">{member.role}</div>
                    </div>
                    <div className="w-16 h-16 shrink-0 rounded-full transition-colors overflow-hidden bg-surface-high">
                      <img 
                        src={member.image} 
                        alt={`Foto van ${member.name}`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=f4f4f5&color=1b1b1b&bold=true`;
                          (e.target as HTMLImageElement).classList.remove('grayscale', 'group-hover:grayscale-0');
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-machine-grey mb-6 flex-grow space-y-4 relative z-10">
                    <div>
                      <strong className="text-on-surface opacity-50 block uppercase tracking-widest text-[10px] mb-1">Expertise:</strong> 
                      <span className="font-semibold">{member.classes}</span>
                    </div>
                    <div>
                      <strong className="text-on-surface opacity-50 block uppercase tracking-widest text-[10px] mb-1">DNA:</strong> 
                      {member.char}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-surface-highest relative z-10">
                    <p className="font-sans font-bold text-machine-grey group-hover:text-on-surface transition-colors">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          </div>
      </section>

      {/* SOCIAL PROOF (GOOGLE REVIEWS) */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-on-surface">
              Ervaringen van onze sporters
            </h2>
          </div>

          <div className="relative group/reviews">
            {/* Custom Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 xl:-left-12 z-20 opacity-0 group-hover/reviews:opacity-100 transition-opacity duration-300 hidden md:block">
              <button 
                onClick={() => slideReviews("left")}
                className="bg-surface-highest text-on-surface hover:bg-primary-container hover:text-white p-4 border border-outline-variant transition-colors"
                aria-label="Scroll Links"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 xl:-right-12 z-20 opacity-0 group-hover/reviews:opacity-100 transition-opacity duration-300 hidden md:block">
              <button 
                onClick={() => slideReviews("right")}
                className="bg-surface-highest text-on-surface hover:bg-primary-container hover:text-white p-4 border border-outline-variant transition-colors"
                aria-label="Scroll Rechts"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div 
              ref={reviewsSliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory pt-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
              onScroll={(e) => handleScrollProgress(e, setScrollProgressReviews)}
            >
            {/* Kaart 1 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">M</div>
                  <div className="font-bold text-gray-900 font-sans">Mathijs</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Bijna een jaar klant. Sfeervolle sportschool, kundige trainer en goede sfeer. Dikke aanrader als je resultaten wilt boeken en fitter wilt worden.
              </p>
            </div>

            {/* Kaart 2 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">B</div>
                  <div className="font-bold text-gray-900 font-sans">Bowe</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Kleinschalige sportschool met heel veel variatie. Alles wordt professioneel en op een prettige manier gegeven. Sfeer is heel prettig en open.
              </p>
            </div>

            {/* Kaart 3 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">S</div>
                  <div className="font-bold text-gray-900 font-sans">Stefan</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Super fijne trainer! Kent je persoonlijk en kan je motiveren. Echt een plek waar je als beginner of ervaren sporter fijn kan trainen!
              </p>
            </div>

            {/* Kaart 4 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">S</div>
                  <div className="font-bold text-gray-900 font-sans">Sander</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Voor iedereen die sterker en fitter wil worden een aanrader. Goede begeleiding afgestemd op je doelen. In 1 jaar 18 kg afgevallen en veel sterker geworden!
              </p>
            </div>

            {/* Kaart 5 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">E</div>
                  <div className="font-bold text-gray-900 font-sans">Erica</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Dikke pluspunten: kleine groepen, persoonlijke sfeer en mega aardig personeel. Elke les mezelf uitdagen tot het uiterste. Dat is fijn!
              </p>
            </div>

            {/* Kaart 6 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg">R</div>
                  <div className="font-bold text-gray-900 font-sans">Ruben</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Komt de belofte na! Je wordt fitter en de sfeer is professioneel met een hoop ruimte voor plezier en humor.
              </p>
            </div>

            {/* Kaart 7 */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-center border border-gray-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg">J</div>
                  <div className="font-bold text-gray-900 font-sans">Joke</div>
                </div>
                <div className="text-blue-600 font-bold font-sans text-sm bg-gray-50 w-7 h-7 rounded-full flex items-center justify-center select-none" title="Google Review">G</div>
              </div>
              <div className="text-[#fbbc04] text-lg tracking-widest mb-3 select-none">★★★★★</div>
              <p className="text-gray-700 text-[14px] leading-relaxed font-sans">
                Ze weten sport goed te combineren met gedragsverandering. Persoonlijk en professioneel. Ik verwijs regelmatig mensen vanuit mijn psychologenpraktijk door. Aanrader!
              </p>
            </div>
          </div>
          </div>

          {/* Interactive Scroll Progress Indicator (Desktop & Mobile) */}
          <div className="mt-8 flex justify-center w-full">
            <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden relative border border-gray-300">
              <div 
                className="absolute top-0 bottom-0 left-0 bg-primary-container rounded-full w-1/3 transition-transform duration-100 ease-out"
                style={{ transform: `translateX(${scrollProgressReviews * 200}%)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ONZE PRIJZEN */}
      <section id="prijzen" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Tarieven & Lidmaatschappen
            </h2>
            <p className="text-machine-grey max-w-xl mx-auto">
              Kies de vorm die bij jouw doelen past. Transparante prijzen, zodat jij je volledig kunt focussen op de training.
            </p>
          </div>

          {/* Vaste Abonnementen (Deel 1 nu) */}
          <div id="abonnementen" className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="font-sans font-bold text-on-surface uppercase tracking-widest flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary-container"></span>
                Vaste Lidmaatschappen
              </div>
              
              {/* Toggle 6/12 maanden */}
              <div className="bg-surface border border-outline-variant p-1 inline-flex w-full md:w-auto relative">
                <button 
                  onClick={() => setBillingCycle("6")}
                  className={`relative z-10 flex-1 md:flex-none uppercase tracking-widest font-bold text-xs px-8 py-3 transition-colors ${billingCycle === "6" ? "text-white" : "text-machine-grey hover:text-on-surface"}`}
                >
                  6 Maanden
                </button>
                <button 
                  onClick={() => setBillingCycle("12")}
                  className={`relative z-10 flex-1 md:flex-none uppercase tracking-widest font-bold text-xs px-8 py-3 transition-colors ${billingCycle === "12" ? "text-white" : "text-machine-grey hover:text-on-surface"}`}
                >
                  12 Maanden
                </button>
                {/* Sliding indicator */}
                <motion.div 
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary-container z-0"
                  animate={{ left: billingCycle === "6" ? "4px" : "calc(50%)" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </div>
            </div>

            <div className="relative">
              {/* Interactive Scroll Progress Indicator */}
              <div className="md:hidden mt-2 mb-6 flex justify-center">
                <div className="w-16 h-1.5 bg-surface-highest rounded-full overflow-hidden relative border border-outline-variant/30">
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-primary-container rounded-full w-1/2 transition-transform duration-100 ease-out"
                    style={{ transform: `translateX(${scrollProgressMain * 100}%)` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* 6 Maanden Grid */}
                {billingCycle === "6" && (
                  <motion.div 
                    key="6-months"
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch pt-10 pb-12 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    onScroll={(e) => handleScrollProgress(e, setScrollProgressMain)}
                  >
                    {/* 1x per week */}
                    <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Groepsles 1 x per week</h3>
                        <div className="font-display text-5xl font-black text-on-surface">€44<span className="text-2xl">,-</span><span className="text-sm text-machine-grey font-sans font-normal ml-2">/ mnd</span></div>
                      </div>
                      <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                        Na 6 maanden maandelijks opzegbaar.
                      </p>
                      <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
                      </ul>
                      <div className="mt-auto">
                        <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                          Kies mijn plan!
                        </button>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
                      </div>
                    </div>

                    {/* 2x per week */}
                    <div className="bg-surface-high p-8 border border-primary-container flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary transition-all duration-300 group shadow-md hover:shadow-2xl relative transform md:-translate-y-4 hover:-translate-y-[5px] md:hover:-translate-y-[21px]">
                      <div className="absolute top-0 right-0 bg-primary-container text-white text-xs font-bold uppercase tracking-widest px-3 py-1 -translate-y-1/2 translate-x-[-24px]">
                        Meest gekozen!
                      </div>
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Groepsles 2 x per week</h3>
                        <div className="font-display text-5xl font-black text-on-surface">€64<span className="text-2xl">,-</span><span className="text-sm text-machine-grey font-sans font-normal ml-2">/ mnd</span></div>
                      </div>
                      <p className="text-machine-grey text-sm mb-6 border-l-2 border-primary-container pl-4 leading-relaxed">
                        Na 6 maanden maandelijks opzegbaar.
                      </p>
                      <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
                      </ul>
                      <div className="mt-auto">
                        <button className="w-full py-5 px-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold uppercase tracking-widest transition-opacity hover:opacity-90 text-sm leading-[1.6]">
                          Kies mijn plan!
                        </button>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
                      </div>
                    </div>

                    {/* Onbeperkt */}
                    <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Groepsles onbeperkt</h3>
                        <div className="font-display text-5xl font-black text-on-surface">€74<span className="text-2xl">,-</span><span className="text-sm text-machine-grey font-sans font-normal ml-2">/ mnd</span></div>
                      </div>
                      <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                        Na 6 maanden maandelijks opzegbaar.
                      </p>
                      <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
                      </ul>
                      <div className="mt-auto">
                        <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                          Kies mijn plan!
                        </button>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 12 Maanden Grid */}
                {billingCycle === "12" && (
                  <motion.div 
                    key="12-months"
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    transition={{ duration: 0.3 }}
                    className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch pt-10 pb-12 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    onScroll={(e) => handleScrollProgress(e, setScrollProgressMain)}
                  >
                    {/* 1x per week */}
                    <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Groepsles 1 x per week</h3>
                        <div className="font-display text-5xl font-black text-on-surface">€41,50<span className="text-sm text-machine-grey font-sans font-normal ml-2">/ mnd</span></div>
                      </div>
                      <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                        Na 12 maanden maandelijks opzegbaar.
                      </p>
                      <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
                      </ul>
                      <div className="mt-auto">
                        <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                          Kies mijn plan!
                        </button>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
                      </div>
                    </div>

                    {/* 2x per week */}
                    <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Groepsles 2 x per week</h3>
                        <div className="font-display text-5xl font-black text-on-surface">€61,50<span className="text-sm text-machine-grey font-sans font-normal ml-2">/ mnd</span></div>
                      </div>
                      <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                        Na 12 maanden maandelijks opzegbaar.
                      </p>
                      <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
                      </ul>
                      <div className="mt-auto">
                        <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                          Kies mijn plan!
                        </button>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
                      </div>
                    </div>

                    {/* Onbeperkt (Highlighted bij 12 maanden) */}
                    <div className="bg-surface-high p-8 border border-primary-container flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary transition-all duration-300 group shadow-md hover:shadow-2xl relative transform md:-translate-y-4 hover:-translate-y-[5px] md:hover:-translate-y-[21px]">
                      <div className="absolute top-0 right-0 bg-primary-container text-white text-xs font-bold uppercase tracking-widest px-3 py-1 -translate-y-1/2 translate-x-[-24px]">
                        Meeste voordeel!
                      </div>
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Groepsles onbeperkt</h3>
                        <div className="font-display text-5xl font-black text-on-surface">€71,50<span className="text-sm text-machine-grey font-sans font-normal ml-2">/ mnd</span></div>
                      </div>
                      <p className="text-machine-grey text-sm mb-6 border-l-2 border-primary-container pl-4 leading-relaxed">
                        Na 12 maanden maandelijks opzegbaar.
                      </p>
                      <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
                      </ul>
                      <div className="mt-auto">
                        <button className="w-full py-5 px-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold uppercase tracking-widest transition-opacity hover:opacity-90 text-sm leading-[1.6]">
                          Kies mijn plan!
                        </button>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Subheader: Tijdelijke opties (Nu Deel 2) */}
          <div className="mb-4 md:mb-8 font-sans font-bold text-machine-grey uppercase tracking-widest flex items-center gap-4">
            <span className="w-8 h-[2px] bg-primary-container"></span>
            Tijdelijke Opties & Losse Lessen
          </div>
          
          {/* Interactive Scroll Progress Indicator */}
          <div className="md:hidden mb-6 flex items-center">
            <div className="w-16 h-1.5 bg-surface-highest rounded-full overflow-hidden relative border border-outline-variant/30">
              <div 
                className="absolute top-0 bottom-0 left-0 bg-primary-container rounded-full w-1/2 transition-transform duration-100 ease-out"
                style={{ transform: `translateX(${scrollProgressTemp * 100}%)` }}
              />
            </div>
          </div>

          <div 
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch pt-2 md:pt-10 pb-12 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onScroll={(e) => handleScrollProgress(e, setScrollProgressTemp)}
          >
            {/* Kaart 1: Weekkaart */}
            <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Weekkaart 7 x pwk sporten</h3>
                <div className="font-display text-5xl font-black text-on-surface">€37,50</div>
              </div>
              <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                7 dagen geldig.<br />Een weekpas om 7 dagen te sporten.
              </p>
              <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
              </ul>
              <div className="mt-auto">
                <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                  Kies mijn plan!
                </button>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
              </div>
            </div>

            {/* Kaart 2: Losse les */}
            <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Losse les 1 x sporten</h3>
                <div className="font-display text-5xl font-black text-on-surface">€16,50</div>
              </div>
              <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                3 weken geldig.<br />Gewoon eens een losse les meedoen? Koop dan deze kaart.
              </p>
              <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
              </ul>
              <div className="mt-auto">
                <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                  Kies mijn plan!
                </button>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
              </div>
            </div>

            {/* Kaart 3: Knipkaart */}
            <div className="bg-surface p-8 border border-outline-variant flex flex-col h-full min-w-[75vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container transition-all duration-300 group shadow-md hover:-translate-y-[5px] hover:shadow-2xl">
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 text-on-surface min-h-[4rem]">Knipkaart 5 x sporten</h3>
                <div className="font-display text-5xl font-black text-on-surface">€77,50<span className="text-2xl">,-</span></div>
              </div>
              <p className="text-machine-grey text-sm mb-6 border-l-2 border-surface-highest pl-4 leading-relaxed">
                6 maanden geldig.<br />Een knipkaart voor 5 groepslessen naar keuze.
              </p>
              <ul className="flex flex-col gap-2 mb-10 text-sm text-machine-grey flex-grow">
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Kleine groepen</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Deskundige begeleiding</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-primary-container shrink-0" /> Inclusief schema's</li>
              </ul>
              <div className="mt-auto">
                <button className="w-full py-5 px-4 bg-surface-highest text-on-surface font-bold uppercase tracking-widest border border-transparent group-hover:bg-primary-container group-hover:text-white transition-all text-sm leading-[1.6]">
                  Kies mijn plan!
                </button>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] text-machine-grey"><Lock size={12} /> Veilig online inschrijven</div>
              </div>
            </div>
          </div>

          {/* REFERRAL BLOCK: Bring a Friend */}
          <div className="mt-16 bg-surface p-6 md:px-8 md:py-6 rounded-2xl border border-primary/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 text-on-surface">
                Deel de motivatie, pak de beloning!
              </h3>
              <p className="text-machine-grey leading-snug max-w-2xl text-sm md:text-base">
                Ken jij iemand die wel een boost kan gebruiken? Nodig een vriend of collega uit voor een gratis proefles. Besluit diegene om lid te worden? Dan sporten jullie <strong className="text-on-surface">allebei een week lang helemaal gratis</strong>!
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0 max-w-full">
              <a 
                href="https://api.whatsapp.com/send?text=Hey!%20Ik%20sport%20bij%20Word%20Fitter%20en%20dacht%20dat%20dit%20echt%20iets%20voor%20jou%20zou%20zijn.%20Als%20je%20via%20mij%20een%20proefles%20boekt%20en%20lid%20wordt,%20sporten%20we%20allebei%20een%20week%20gratis!%20Check%20de%20site:%20wordfitter.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-full box-border md:w-auto text-center py-3 px-4 sm:py-3.5 sm:px-6 bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#1DA851] transition-colors rounded-xl shadow-md whitespace-normal text-[13px] sm:text-sm leading-tight"
              >
                <span>Stuur een uitnodiging via WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LESROOSTER OVERZICHT */}
      <section id="lesrooster" className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 flex justify-between items-end">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Lesrooster
            </h2>
            <div className="hidden md:block font-display text-primary-container text-xl font-bold uppercase">
              [ Huidig Lesrooster ]
            </div>
          </div>
          
          <div className="bg-surface-low border border-outline-variant overflow-x-auto">
            <table className="w-full text-left font-sans text-sm md:text-base border-collapse whitespace-nowrap min-w-[600px]">
              <thead>
                <tr className="bg-surface-high font-bold uppercase tracking-widest text-machine-grey text-xs border-b-2 border-primary-container">
                  <th className="p-4 md:p-6 w-32 focus:outline-none">Dag</th>
                  <th className="p-4 md:p-6 w-40">Tijd</th>
                  <th className="p-4 md:p-6">Discipline</th>
                  <th className="p-4 md:p-6">Trainer</th>
                  <th className="p-4 md:p-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-highest">
                <tr className="hover:bg-surface transition-colors group">
                  <td className="p-4 md:p-6 font-bold text-on-surface">Maandag</td>
                  <td className="p-4 md:p-6 font-mono text-machine-grey">18:00 - 19:00</td>
                  <td className="p-4 md:p-6 font-display font-bold uppercase tracking-widest group-hover:text-primary-container transition-colors">Kickboksen</td>
                  <td className="p-4 md:p-6">Rex</td>
                  <td className="p-4 md:p-6 text-right"><span className="inline-block px-3 py-1 bg-surface-highest text-[10px] font-bold uppercase tracking-widest text-on-surface">Open</span></td>
                </tr>
                <tr className="hover:bg-surface transition-colors group">
                  <td className="p-4 md:p-6 font-bold text-on-surface text-opacity-50">Maandag</td>
                  <td className="p-4 md:p-6 font-mono text-machine-grey">19:30 - 20:30</td>
                  <td className="p-4 md:p-6 font-display font-bold uppercase tracking-widest group-hover:text-primary-container transition-colors">Strength & Cond.</td>
                  <td className="p-4 md:p-6">Rex</td>
                  <td className="p-4 md:p-6 text-right"><span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest border border-primary">Vol</span></td>
                </tr>
                <tr className="hover:bg-surface transition-colors group">
                  <td className="p-4 md:p-6 font-bold text-on-surface">Dinsdag</td>
                  <td className="p-4 md:p-6 font-mono text-machine-grey">18:30 - 19:30</td>
                  <td className="p-4 md:p-6 font-display font-bold uppercase tracking-widest group-hover:text-primary-container transition-colors">Functional Training</td>
                  <td className="p-4 md:p-6">Marleen</td>
                  <td className="p-4 md:p-6 text-right"><span className="inline-block px-3 py-1 bg-surface-highest text-[10px] font-bold uppercase tracking-widest text-on-surface">Open</span></td>
                </tr>
                <tr className="hover:bg-surface transition-colors group">
                  <td className="p-4 md:p-6 font-bold text-on-surface">Woensdag</td>
                  <td className="p-4 md:p-6 font-mono text-machine-grey">17:00 - 18:00</td>
                  <td className="p-4 md:p-6 font-display font-bold uppercase tracking-widest group-hover:text-primary-container transition-colors">Jeugd</td>
                  <td className="p-4 md:p-6">Rex</td>
                  <td className="p-4 md:p-6 text-right"><span className="inline-block px-3 py-1 bg-surface-highest text-[10px] font-bold uppercase tracking-widest text-on-surface">Open</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-end">
            <a href="#contact" className="inline-block border-b-2 border-primary-container pb-1 font-bold uppercase tracking-widest text-sm text-machine-grey hover:text-on-surface transition-colors">
              Zie volledig rooster in portaal <ArrowRight size={16} className="inline mb-1 ml-2" />
            </a>
          </div>
        </div>
      </section>

      

      {/* TEASER NIEUW PAND */}
      <section id="nieuw-pand-teaser" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-surface border-b border-t border-surface-highest relative overflow-hidden">
        {/* Sfeervol achtergrond raster voor het lab effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--color-on-surface)_1px,transparent_1px),linear-gradient(90deg,var(--color-on-surface)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Tekst & Psychologie (Zeigarnik Effect) */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-primary-container text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">
              Project // Word Fitter 2.0
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Een nieuw tijdperk in de steigers.
            </h2>
            <div className="text-machine-grey text-lg mb-8 font-sans space-y-4 border-l-2 border-surface-highest pl-6">
              <p>
                Achter de schermen bouwen we hard aan een prachtige nieuwe thuisbasis voor Word Fitter. Wat je kunt verwachten? Meer ruimte voor jouw favoriete workouts, mooie nieuwe faciliteiten en een heerlijke plek voor een kop koffie na het sporten.
                
              </p>
              <p className="text-on-surface font-semibold">
                De fundamenten liggen er. De blauwdruk is goedgekeurd. Maar we onthullen nog lang niet alles...
                <span className="inline-block w-8 h-[2px] bg-primary-container ml-3 mb-1 animate-pulse" title="Incomplete task marker"></span>
              </p>
            </div>
            
            <a 
              href="#verhuizing"
              className="inline-flex justify-center items-center gap-3 bg-surface text-on-surface border border-outline-variant px-8 py-5 font-display font-bold uppercase tracking-widest hover:border-primary-container hover:text-primary-container transition-all group"
            >
              Lees meer over de verhuizing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Afbeeldingen (Bewust incompleet/asymmetrisch gepositioneerd) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="relative w-full aspect-square md:aspect-[4/3] group cursor-crosshair">
              {/* Foto 1 - Achterste foto */}
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-surface-low border border-outline-variant overflow-hidden">
                <img 
                  src="/nieuw-pand-1.jpeg" 
                  alt="Blauwdruk nieuw pand Word Fitter" 
                  className="w-full h-full object-cover grayscale opacity-70 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Foto 2 - Voorste overlappende foto */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-surface border-t-8 border-r-8 border-surface overflow-hidden shadow-[20px_-20px_40px_rgba(27,27,27,0.6)]">
                <img 
                  src="/nieuw-pand-2.jpeg" 
                  alt="Constructies nieuw pand Word Fitter" 
                  className="w-full h-full object-cover grayscale opacity-70 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out"
                />
                {/* Visuele Zeigarnik trigger: Een laadbalk overlay in de hoek */}
                <div className="absolute bottom-4 right-4 bg-surface px-2 py-1 flex items-center gap-2 border border-outline-variant">
                  <span className="w-2 h-2 bg-primary-container animate-ping"></span>
                  <span className="text-[10px] font-mono text-machine-grey uppercase tracking-widest">
                    COMING SOON!
                  </span>
                </div>
              </div>
            </div>
            
            {/* Locatie Adres */}
            <div className="mt-8 flex items-center gap-3 text-machine-grey font-mono text-sm tracking-widest uppercase border-l-2 border-primary-container pl-4">
              <MapPin size={18} className="text-primary-container" />
              <span>Stavangerweg 4B, 9723 JC Groningen</span>
            </div>
          </div>

        </div>
      </section>

      {/* VEELGESTELDE VRAGEN */}
      <section id="faq" className="bg-surface pt-12 md:pt-16 pb-12 md:pb-16 border-t border-surface-highest">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-on-surface">
              Veelgestelde Vragen
            </h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
          </div>
          
          <div className="space-y-2">
            {/* Vraag 1 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Ik ben geen topsporter, is Word Fitter wel iets voor mij?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Absoluut! Hoewel we soms een wat fanatiek imago hebben, staan wij juist voor 'professionele gezelligheid'. We vinden het belangrijk dat iedereen op zijn eigen niveau kan trainen. Of je nu net begint of al jaren sport: onze trainers passen de oefeningen en het niveau aan jouw mogelijkheden aan. Je bent van harte welkom!
              </div>
            </details>

            {/* Vraag 2 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Ik heb een drukke baan, hoe combineer ik dit met trainen?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Veel van onze leden zijn werkende professionals tussen de 30 en 50 jaar, dus we begrijpen dat tijd schaars is. Omdat we in kleine groepen trainen, heb je bij ons geen wachttijden en train je uiterst efficiënt. Daarnaast werken we met een reserveringsapp met een 8-uur annuleringsregel. Klinkt streng, maar onze leden ervaren dit als de perfecte 'stok achter de deur' om echt tijd voor zichzelf vrij te maken in een drukke agenda!
              </div>
            </details>

            {/* Vraag 3 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Welke sporten en trainingen kan ik bij jullie doen?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Wij zijn geen standaard sportschool, maar een persoonlijke studio met specifieke focus. Je kunt bij ons terecht voor Personal Training (1-op-1) en functionele fitness (zoals Hyrox en conditioning). Daarnaast zijn we gespecialiseerd in vechtsporten. Alles gebeurt onder professionele begeleiding.
              </div>
            </details>

            {/* Vraag 4 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Waarom zou ik voor Word Fitter kiezen en niet voor een grote (budget) keten?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Bij grote ketens ben je vaak een nummertje en is het lastig om goede begeleiding te krijgen. Wij kiezen bewust voor een kleinschalige aanpak waarbij de trainers hun leden écht kennen. Ons onderscheidend vermogen zit in de combinatie van een nette sportschool met extra goede begeleiding, techniekcorrectie en een fantastisch community gevoel. Bij ons draait het om kwaliteit, discipline en plezier.
              </div>
            </details>

            {/* Vraag 5 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Ik heb een (oude) blessure, kan ik toch meedoen?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Zeker weten. Omdat we in kleine groepen trainen en onze trainers veel kennis van het menselijk lichaam hebben, kunnen we oefeningen altijd aanpassen. Geef het voor de les even aan, dan zorgen wij voor een veilig en effectief alternatief zodat jij gewoon lekker aan de bak kunt.
              </div>
            </details>

            {/* Vraag 6 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Wat moet ik meenemen naar een proefles?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Eigenlijk heel simpel: makkelijk zittende binnen-sportkleding, een schone handdoek en een bidon met water. Wil je meedoen met een kickboksles? Geen zorgen, wij hebben leenhandschoenen en scheenbeschermers voor je klaarliggen!
              </div>
            </details>

            {/* Vraag 7 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Kan ik me na het sporten omkleden en douchen?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Ja, we hebben nette kleedkamers en douches beschikbaar. Veel van onze leden sporten voor hun werk of even tussendoor, dus we zorgen ervoor dat je daarna weer fris en fruitig op kantoor kunt verschijnen.
              </div>
            </details>

            {/* Vraag 8 */}
            <details className="group bg-surface-low border border-outline-variant transition-colors hover:border-primary-container open:bg-surface-high">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-3 min-h-[44px] list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase tracking-tight text-lg text-on-surface leading-tight pr-8">
                  Zit ik direct aan een lang jaarcontract vast?
                </span>
                <span className="text-primary-container shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-45">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="px-6 pb-4 text-machine-grey leading-snug">
                Nee hoor, we houden niet van kleine lettertjes of wurgcontracten. Naast onze voordelige langere abonnementen bieden we ook gewoon flexibele opties en rittenkaarten aan. Zo kies je altijd de vorm die het beste bij jouw ritme en doelen past.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* AFSLUITING */}
      <section id="afsluiting" className="bg-surface pb-12 pt-4 md:pt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
{/* DEEL 5: CALL-TO-ACTION (PROEFLES) */}
          <div className="bg-primary-container text-white p-10 md:p-16 lg:p-24 text-center transform hover:scale-[1.01] transition-transform duration-500 shadow-[0_20px_50px_rgba(161,29,29,0.3)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                Wil jij vrijblijvend een <br /> proefles meedoen?
              </h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-sm md:text-base max-w-2xl mx-auto mb-12">
                Stop met wachten op het perfecte moment. Regel vandaag nog je intake en ervaar the Word Fitter way.
              </p>
              <a href="#contact" className="inline-block bg-surface text-on-surface font-display font-black uppercase tracking-widest py-6 px-12 hover:bg-white hover:text-primary-container transition-colors text-xl md:text-2xl shadow-xl">
                Boek een Proefles <ArrowRight className="inline ml-2 -mt-1" size={28} />
              </a>
            </div>
          </div>

        
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              Meld je aan.
            </h2>
            <p className="text-machine-grey mb-8 max-w-md">
              Klaar om te starten met discipline? Vul het formulier in en we nemen z.s.m. contact op voor een intake.
            </p>

            {/* Social Proof Badge - Moved from Hero */}
            <div className="mb-12">
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 bg-surface-low border border-outline-variant px-6 py-4 transition-all hover:bg-surface-high group shadow-sm">
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} size={18} className="text-[#FBC02D] fill-[#FBC02D] drop-shadow-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <div className="w-[1px] h-5 bg-outline-variant hidden sm:block"></div>
                <div className="w-10 h-[1px] bg-outline-variant block sm:hidden mb-1"></div>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-machine-grey">
                  Gewaardeerd met een <strong className="text-on-surface font-bold font-sans text-sm">4,9/5</strong> op Google
                </span>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-surface-low text-primary-container">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-machine-grey">Locatie</div>
                  <div className="font-semibold">Stavangerweg 23-10<br/>9723 JC Groningen</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-surface-low text-primary-container">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-machine-grey">Email</div>
                  <div className="font-semibold">info@wordfitter.nl</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-surface-low text-primary-container">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-machine-grey">Telefoon</div>
                  <div className="font-semibold">06 126 399 93</div>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full aspect-[21/9] bg-surface-low border border-outline-variant relative overflow-hidden group">
              <iframe 
                src="https://maps.google.com/maps?q=Stavangerweg%2023-10%2C%209723%20JC%20Groningen&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Word Fitter Locatie"
              ></iframe>
            </div>
          </div>

          <div className="bg-surface-low p-8 md:p-12 relative border border-surface-highest">
            <div className="absolute top-0 right-0 w-8 h-8 bg-surface border-b border-l border-outline-variant pointer-events-none" />
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-machine-grey mb-3">Naam</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-high text-on-surface px-5 py-4 border border-outline-variant focus:border-primary-container outline-none transition-colors"
                  placeholder="Voer je naam in"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-machine-grey mb-3">Emailadres</label>
                <input 
                  type="email" 
                  className="w-full bg-surface-high text-on-surface px-5 py-4 border border-outline-variant focus:border-primary-container outline-none transition-colors"
                  placeholder="naam@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-machine-grey mb-3">Bericht</label>
                <textarea 
                  rows={4}
                  className="w-full bg-surface-high text-on-surface px-5 py-4 border border-outline-variant focus:border-primary-container outline-none transition-colors resize-none"
                  placeholder="Wat is je doel?"
                ></textarea>
              </div>
              <button className="w-full bg-primary-container hover:bg-primary text-white py-6 font-display font-bold uppercase tracking-widest mt-4 transition-colors text-lg">
                Verstuur Bericht
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-surface-high pt-20 pb-10 border-t border-surface-highest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Logo & Info */}
            <div className="md:col-span-1">
              <a href="#home" className="inline-block mb-6">
                <img src="/logo.png" alt="Word Fitter Logo" className="h-10 md:h-12 object-contain" />
              </a>
              <p className="text-machine-grey text-sm mb-6 max-w-sm leading-relaxed">
                Word Fitter Groningen. Serieus werken aan jouw fitheid, met oprechte aandacht en een flinke dosis werkplezier.
              </p>
              <div className="flex gap-4 text-on-surface">
                <a href="#" className="hover:text-primary-container transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-primary-container transition-colors"><Facebook size={24} /></a>
                <a href="#" className="hover:text-primary-container transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>

            {/* Snelkoppelingen */}
            <div className="md:col-span-2 flex flex-col md:items-center">
              <div>
                <h4 className="font-display font-bold uppercase tracking-widest text-on-surface mb-6">Navigatie</h4>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {NAV_ITEMS.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href}
                      className="text-sm font-semibold uppercase tracking-widest text-machine-grey hover:text-primary-container transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Informatie */}
            <div className="md:col-span-1">
              <h4 className="font-display font-bold uppercase tracking-widest text-on-surface mb-6">Informatie</h4>
              <ul className="space-y-4 text-sm text-machine-grey">
                <li className="flex flex-col border-b border-surface-highest pb-2">
                  <span className="text-[10px] uppercase tracking-widest mb-1 opacity-70">Locatie</span>
                  <span className="text-on-surface font-semibold">Stavangerweg 23-10<br/>9723 JC Groningen</span>
                </li>
                <li className="flex flex-col border-b border-surface-highest pb-2">
                  <span className="text-[10px] uppercase tracking-widest mb-1 opacity-70">KvK</span>
                  <span className="text-on-surface font-semibold">60785462</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center border-t border-surface-highest pt-8">
            <p className="text-machine-grey text-xs font-bold uppercase tracking-widest mb-2">
              &copy; {new Date().getFullYear()} Word Fitter Personal Training.
            </p>
            <p className="text-machine-grey/50 text-[10px] font-bold uppercase tracking-widest">
              Stavangerweg 23-10, 9723 JC Groningen | KvK: 60785462
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
