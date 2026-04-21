const fs = require('fs');

try {
  let content = fs.readFileSync('src/App.tsx', 'utf8');

  // Extract ONS AANBOD block
  const sOnsAanbodStart = '{/* ONS AANBOD */}';
  const sOnsAanbodEnd = '</section>'; // The first </section> after ONS AANBOD
  
  const aanbodIndex = content.indexOf(sOnsAanbodStart);
  if (aanbodIndex === -1) throw new Error("ONS AANBOD not found");
  
  const aanbodEndIndex = content.indexOf(sOnsAanbodEnd, aanbodIndex) + sOnsAanbodEnd.length;
  
  let aanbodBlock = content.substring(aanbodIndex, aanbodEndIndex);
  
  // Remove it from current location
  content = content.substring(0, aanbodIndex) + content.substring(aanbodEndIndex);
  
  // Find injection point: DEEL 3: UITGELICHT - OPRICHTER REX BUREMA
  const injectionPoint = '{/* DEEL 3: UITGELICHT - OPRICHTER REX BUREMA */}';
  const injectionIndex = content.indexOf(injectionPoint);
  if (injectionIndex === -1) throw new Error("Injection point DEEL 3 not found");

  // Remove the <section id="ons-aanbod"> wrapper from aanbodBlock since we are injecting it inside the max-w-7xl of the OVER section.
  // Actually, wait. The OVER section has `<div className="max-w-7xl mx-auto px-6 md:px-12">`. We can just inject the INSIDE of Ons Aanbod right before DEEL 3.
  // Let's strip the section and max-w-7xl from aanbodBlock, OR we can close `max-w-7xl`, open a full-width `max-w-none` part, and then re-open `max-w-7xl`.
  // Alternatively, just strip the outer `<section ...><div ...>` and only keep the content of Ons Aanbod. 
  
  let innerAanbodBlock = aanbodBlock.replace(/\{\/\* ONS AANBOD \*\/\}[\s\S]*?<div className="max-w-7xl[^>]*>/, '');
  innerAanbodBlock = innerAanbodBlock.replace(/<\/div>\s*<\/section>\s*$/, '');
  
  // Create a wrapper comment marker so we know where it starts now
  const finalAanbodBlock = `\n          {/* DEEL 2B: ONS AANBOD (Verplaatst) */}\n          <div className="mb-32">\n${innerAanbodBlock}\n          </div>\n\n          `;
  
  // Insert
  content = content.substring(0, injectionIndex) + finalAanbodBlock + content.substring(injectionIndex);

  fs.writeFileSync('src/App.tsx', content);
  console.log("Success");
} catch (e) {
  console.error(e);
}
