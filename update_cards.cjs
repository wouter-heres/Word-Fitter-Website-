const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/Kleine groepen \(max 8\)/g, 'Kleine groepen');

content = content.replace(
  /className="grid md:grid-cols-3 gap-8 items-stretch pt-2 pb-6"/g,
  'className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch pt-2 pb-8 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"'
);

content = content.replace(
  /className="grid md:grid-cols-3 gap-8 items-stretch"/g,
  'className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 items-stretch overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"'
);

content = content.replace(
  /flex flex-col h-full hover:border-primary-container/g,
  'flex flex-col h-full min-w-[85vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary-container'
);

content = content.replace(
  /flex flex-col h-full hover:border-primary /g,
  'flex flex-col h-full min-w-[85vw] sm:min-w-[60vw] md:min-w-0 shrink-0 snap-center hover:border-primary '
);

fs.writeFileSync('src/App.tsx', content);
