const fs = require('fs');

try {
  let content = fs.readFileSync('src/App.tsx', 'utf8');

  const sHero = '{/* HERO SECTION */}';
  const sNieuwPand = '{/* TEASER NIEUW PAND */}';
  const sOnsAanbod = '{/* ONS AANBOD */}';
  const sLesrooster = '{/* LESROOSTER OVERZICHT */}';
  const sOver = '{/* OVER WORD FITTER (REBUILT COMPREHENSIVE SECTION) */}';
  const sPrijzen = '{/* ONZE PRIJZEN */}';
  const sContact = '{/* CONTACT */}';
  const sFooter = '{/* FOOTER */}';
  const sCta = '{/* DEEL 5: CALL-TO-ACTION (PROEFLES) */}';

  const beforeHero = content.split(sHero)[0];
  const hero = sHero + content.split(sHero)[1].split(sNieuwPand)[0];
  const nieuwPand = sNieuwPand + content.split(sNieuwPand)[1].split(sOnsAanbod)[0];
  const onsAanbod = sOnsAanbod + content.split(sOnsAanbod)[1].split(sLesrooster)[0];
  const lesrooster = sLesrooster + content.split(sLesrooster)[1].split(sOver)[0];
  const overFull = sOver + content.split(sOver)[1].split(sPrijzen)[0];
  const prijzen = sPrijzen + content.split(sPrijzen)[1].split(sContact)[0];
  const contact = sContact + content.split(sContact)[1].split(sFooter)[0];
  const footer = sFooter + content.split(sFooter)[1];

  let overPart1 = overFull.split(sCta)[0];
  let ctaPart = sCta + overFull.split(sCta)[1];
  
  const ctaMatch = ctaPart.match(/(.*)(\s*<\/div>\s*<\/section>\s*)$/s);
  if (ctaMatch) {
    ctaPart = ctaMatch[1];
    overPart1 = overPart1 + ctaMatch[2];
  }

  let modifiedAanbod = onsAanbod.replace('py-24 md:py-32', 'py-12 md:py-16');
  // Decrease height by using a smaller aspect ratio or fixed height
  modifiedAanbod = modifiedAanbod.replaceAll('aspect-[4/5]', 'aspect-[4/3] sm:aspect-square md:aspect-[4/3]');
  modifiedAanbod = modifiedAanbod.replace('mb-16 md:mb-24', 'mb-8 md:mb-10');
  
  // Make the container padding smaller
  modifiedAanbod = modifiedAanbod.replace('py-24 md:py-32', 'py-10 md:py-16');

  let afsluiting = `{/* AFSLUITING */}
      <section id="afsluiting" className="bg-surface pb-12 pt-12 md:pt-24 border-t border-surface-highest">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
${ctaPart}
        </div>
      </section>`;

  const newContent = [
    beforeHero,
    hero,
    overPart1,
    prijzen,
    lesrooster,
    modifiedAanbod,
    nieuwPand,
    afsluiting,
    contact,
    footer
  ]
  .map(s => s.trim())
  .join('\n\n      ');

  fs.writeFileSync('src/App.tsx', newContent);
  console.log("Success");
} catch (e) {
  console.error(e);
}
