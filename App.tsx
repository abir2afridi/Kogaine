import React, { useState, useEffect } from 'react';
import { generatePosterContent } from './services/geminiService';
import { GeneratedPosterData } from './types';
import { 
  Car, 
  Settings, 
  Tent, 
  Coffee, 
  Gem, 
  Feather, 
  Anchor, 
  Wrench, 
  Wheat, 
  ArrowRight,
  ArrowDown,
  Sparkles,
  Loader2,
  Circle,
  X,
  Star,
  Hexagon
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-[100] mix-blend-difference text-cream-200 px-6 py-6 flex justify-between items-start pointer-events-none">
    <div className="font-archivo tracking-tighter text-2xl uppercase pointer-events-auto cursor-pointer">
      Kogaine™ <span className="block font-mono text-[10px] tracking-widest font-normal opacity-70">Type Foundry</span>
    </div>
    <div className="hidden md:flex flex-col items-end space-y-1 font-mono text-[10px] tracking-[0.2em] pointer-events-auto">
      <a href="#hero" className="hover:text-cream-100 transition-colors uppercase">Index 01</a>
      <a href="#heinrich" className="hover:text-cream-100 transition-colors uppercase">Works 02</a>
      <a href="#generator" className="hover:text-cream-100 transition-colors uppercase flex items-center gap-1">
        Studio 03 <Sparkles size={8} />
      </a>
    </div>
  </nav>
);

const SectionLabel = ({ text, number, dark = false }: { text: string; number: string; dark?: boolean }) => (
  <div className={`absolute top-6 left-6 z-20 flex flex-col font-mono text-[9px] uppercase tracking-[0.3em] ${dark ? 'text-olive-900' : 'text-cream-200'} opacity-70`}>
    <span className="mb-1 border-b border-current w-4 pb-1">{number}</span>
    <span>{text}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-olive-900 text-cream-200 flex flex-col items-center justify-center overflow-hidden texture-noise">
      
      {/* Layer 1: Tight Grid scrolling diagonally */}
      <div className="absolute inset-0 grid-bg animate-grid-scroll opacity-20 pointer-events-none"></div>
      
      {/* Layer 2: Wide Grid scrolling differently (Parallax/Moiré effect) */}
      <div className="absolute inset-0 grid-bg-large animate-grid-reverse opacity-20 pointer-events-none"></div>
      
      {/* Dynamic Ambient Light Source */}
      <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-olive-800 rounded-full blur-[100px] animate-ambient-float pointer-events-none mix-blend-screen"></div>

      <div className="absolute top-0 left-0 w-full h-full border-[20px] border-olive-900 z-10 pointer-events-none"></div>
      
      <div className="relative z-0 text-center flex flex-col items-center w-full px-4">
        <div className="font-mono mb-2 text-[10px] tracking-[1em] text-cream-200/40 uppercase">Display Typeface</div>
        <h1 className="font-condensed text-[40vw] leading-[0.75] tracking-tighter uppercase text-cream-200 mix-blend-lighten select-none relative z-20">
          ABIR
        </h1>
        
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-start mt-8 px-4 md:px-12 border-t border-cream-200/10 pt-6 relative z-20">
           <div className="hidden md:block w-32 font-mono text-[9px] leading-relaxed opacity-60 text-justify">
             A typeface designed for the industrial age. Strong vertical lines met with humanistic curves.
           </div>
           
           <div className="flex flex-col items-center">
             <div className="w-[1px] h-12 bg-cream-200/30 mb-4"></div>
             <ArrowDown className="text-cream-200/50 animate-bounce" size={16} />
           </div>

           <div className="hidden md:block w-32 text-right font-mono text-[9px] leading-relaxed opacity-60">
             ESTD. 2023<br />
             BERLIN, DE
           </div>
        </div>
      </div>
      
      {/* Abstract floating elements */}
      <div className="absolute top-1/4 left-10 opacity-20 hidden md:block animate-[spin_60s_linear_infinite]">
         <div className="w-32 h-32 border border-cream-200 rounded-full flex items-center justify-center">
            <div className="w-1 h-full bg-cream-200"></div>
         </div>
      </div>
    </section>
  );
};

const HeinrichSection = () => {
  return (
    <section id="heinrich" className="w-full bg-cream-200 text-olive-900 py-32 px-4 md:px-8 flex flex-col items-center relative texture-noise">
      <SectionLabel text="Visual Identity" number="02" dark />
      
      {/* The "Card" */}
      <div className="w-full max-w-5xl bg-cream-100 shadow-[20px_20px_0px_0px_#141c14] border-2 border-olive-900 p-8 md:p-16 relative overflow-hidden">
        
        {/* Background Grid inside card */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#141c14 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12">
           {/* Left Column: Typography */}
           <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-8 bg-olive-900 rounded-full text-cream-100 flex items-center justify-center">
                    <span className="font-mono text-xs font-bold">H</span>
                 </div>
                 <span className="font-mono text-[10px] uppercase tracking-widest border border-olive-900 px-2 py-1 rounded-full">Automotive Parts</span>
              </div>

              <h2 className="font-condensed text-[12rem] md:text-[14rem] leading-[0.75] tracking-tighter text-olive-900 uppercase -ml-2">
                Hein<br/>rich
              </h2>
              
              <div className="mt-8 flex gap-6">
                 <div className="font-archivo text-xl uppercase leading-none">
                    Ger.<br/>Mnfr.
                 </div>
                 <p className="font-sans text-xs max-w-[200px] leading-relaxed opacity-80 text-justify">
                    Specializing in heavy-duty transmission components for agricultural and industrial machinery. Established in 1927 in the heart of Bavaria.
                 </p>
              </div>
           </div>

           {/* Right Column: Visual */}
           <div className="flex-1 flex flex-col justify-between items-end">
              <div className="w-full h-[300px] border border-olive-900/20 bg-olive-900/5 relative flex items-center justify-center overflow-hidden mb-8">
                 <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                    {[...Array(36)].map((_, i) => (
                       <div key={i} className="border-r border-b border-olive-900/10"></div>
                    ))}
                 </div>
                 <Settings size={180} strokeWidth={0.5} className="text-olive-900 relative z-10 animate-spin-slow" />
                 <Car size={100} strokeWidth={1} className="text-olive-900 absolute z-20" />
              </div>

              <div className="w-full flex justify-between items-end border-t-2 border-olive-900 pt-4">
                 <div className="font-mono text-[9px] uppercase tracking-widest">
                    Fig. 2.1 — Assembly
                 </div>
                 <button className="bg-olive-900 text-cream-200 px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-olive-800 transition-colors">
                    View Catalogue
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const SplitSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen border-t border-olive-900 bg-olive-800">
      
      {/* Lapilo */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto relative bg-cream-300 p-6 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-olive-900 texture-noise overflow-hidden group">
         <SectionLabel text="Exhibition" number="03" dark />
         
         <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-olive-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

         <div className="mt-20 relative z-10">
            <div className="inline-block border border-olive-900 px-3 py-1 rounded-full font-mono text-[9px] uppercase tracking-widest mb-6 bg-transparent">
               Berlin Museum
            </div>
            {/* Fluid typography for responsiveness */}
            <h2 className="font-slab text-[14vw] sm:text-[10vw] lg:text-[6rem] leading-[0.9] text-olive-900 uppercase">
              Lapilo<br/>
              <span className="block pl-8 sm:pl-16 lg:pl-32 italic font-serif font-light text-[10vw] sm:text-[8vw] lg:text-[5rem] normal-case lowercase mt-2 lg:mt-0">
                -Art
              </span>
            </h2>
         </div>

         <div className="mt-12 flex items-center justify-between border-t border-olive-900 pt-6">
            <div className="flex flex-col">
               <span className="font-mono text-xs uppercase opacity-60">Date</span>
               <span className="font-sans font-bold text-lg md:text-xl text-olive-900">28 Sept</span>
            </div>
            <div className="w-8 md:w-16 h-[1px] bg-olive-900"></div>
            <div className="flex flex-col items-end">
               <span className="font-mono text-xs uppercase opacity-60">Entry</span>
               <span className="font-sans font-bold text-lg md:text-xl text-olive-900">Free</span>
            </div>
         </div>

         {/* Hover Effect - Hidden on mobile to prevent obstruction */}
         <div className="absolute bottom-16 right-16 opacity-0 lg:group-hover:opacity-20 transition-opacity duration-700 transform scale-150 pointer-events-none hidden lg:block">
            <Feather size={200} strokeWidth={0.5} />
         </div>
      </div>

      {/* Maguine */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto bg-olive-900 text-cream-200 p-6 md:p-16 flex flex-col relative texture-noise">
        <SectionLabel text="Ceramics" number="04" />

        <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10 py-12 lg:py-0">
           {/* Scaled Text using VW units for better fit */}
           <div className="font-condensed text-[28vw] lg:text-[15rem] leading-[0.7] text-cream-200 mix-blend-overlay opacity-30 select-none">
              CLAY
           </div>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="font-display text-[12vw] lg:text-8xl text-cream-100 z-20">Maguine</h2>
           </div>
           
           <div className="mt-8 lg:mt-12 max-w-[80%] lg:max-w-sm font-serif italic text-lg lg:text-2xl text-cream-200/80 leading-snug">
              "We shape the earth into vessels of silence."
           </div>
        </div>

        <div className="w-full flex justify-between items-center border-t border-cream-200/20 pt-8 mt-4 lg:mt-8">
           <div className="flex gap-4">
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-cream-400 rounded-full"></div>
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-olive-600 rounded-full"></div>
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-cream-100 rounded-full"></div>
           </div>
           <ArrowRight className="text-cream-200" size={20} />
        </div>
      </div>

    </section>
  );
};

const GridSection = () => {
  return (
    <section className="w-full bg-cream-200 border-t border-olive-900">
      <div className="grid grid-cols-1 md:grid-cols-3">
        
        {/* Meru Bitri */}
        <div className="col-span-1 md:col-span-2 bg-olive-800 text-cream-200 p-8 md:p-12 relative overflow-hidden texture-noise border-b md:border-b-0 border-r-0 md:border-r border-cream-200/10">
          <SectionLabel text="Park Identity" number="05" />
          
          <div className="h-full flex flex-col justify-end mt-24">
             <h3 className="font-condensed text-[8rem] md:text-[10rem] leading-[0.8] uppercase text-cream-100 mix-blend-hard-light">
                Meru<br/>Bitri
             </h3>
             <div className="flex items-start gap-8 mt-8 border-t border-cream-200/20 pt-6">
                <span className="font-mono text-[9px] uppercase tracking-widest w-24 shrink-0">Natl. Park</span>
                <p className="font-sans text-xs md:text-sm opacity-70 max-w-md leading-relaxed">
                   A protected area on the southern coast of East Java. The typographic identity reflects the dense canopy and rugged coastline.
                </p>
             </div>
          </div>
          
          <div className="absolute top-12 right-12 w-64 h-64 border border-cream-200/10 rounded-full flex items-center justify-center animate-spin-slow">
             <div className="w-full h-[1px] bg-cream-200/10 absolute"></div>
             <div className="h-full w-[1px] bg-cream-200/10 absolute"></div>
          </div>
        </div>

        {/* Smiley */}
        <div className="col-span-1 bg-cream-100 text-olive-900 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0">
           <SectionLabel text="Outdoor" number="06" dark />
           
           <div className="flex flex-col items-center justify-center flex-1 py-12">
              <Tent size={80} strokeWidth={1.5} className="mb-6 text-olive-800" />
              <h3 className="font-archivo text-4xl uppercase tracking-tight text-center">Smiley<br/>Supply</h3>
              <div className="mt-4 px-4 py-1 border border-olive-900 rounded-full font-mono text-[9px] uppercase">
                 Est. 1992
              </div>
           </div>
           
           <div className="font-mono text-[9px] text-center opacity-50 uppercase tracking-widest">
              Quality Goods For The Wild
           </div>
        </div>

      </div>
    </section>
  );
};

// --- Generator Component ---

const GeneratorSection = () => {
  const [brandName, setBrandName] = useState("");
  const [brandType, setBrandType] = useState("");
  const [selectedStyle, setSelectedStyle] = useState<string>("automotive");
  const [loading, setLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState<GeneratedPosterData | null>(null);

  // Initial demo data
  useEffect(() => {
    setGeneratedData({
      headline: "IRON CLAD",
      subhead: "HEAVY INDUSTRIES",
      establishedDate: "ESTD 1904",
      tagline: "Forged in Fire.",
      description: "Providing the nation with structural steel and unwavering strength. Quality you can trust.",
      layoutStyle: "automotive"
    });
  }, []);

  const handleGenerate = async () => {
    if (!brandName || !brandType) return;
    setLoading(true);
    const data = await generatePosterContent(brandName, brandType, selectedStyle);
    setGeneratedData(data);
    setLoading(false);
  };

  const styleOptions = [
    { id: 'automotive', label: 'Automotive' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'typography', label: 'Typography' },
    { id: 'retro', label: 'Retro' },
    { id: 'art-deco', label: 'Art Deco' },
  ];

  return (
    <section id="generator" className="w-full bg-olive-950 text-cream-200 py-24 relative border-t border-cream-200/10">
       <div className="container mx-auto px-4 md:px-12">
       
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-cream-200/10 pb-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-cream-200/60 mb-2">No. 07 — Interactive</div>
            <h2 className="font-condensed text-6xl md:text-8xl uppercase text-cream-100 leading-none">Poster<br/>Studio</h2>
          </div>
          <p className="font-sans text-xs md:text-sm max-w-xs opacity-60 mt-4 md:mt-0 leading-relaxed text-right">
             Utilize our generative engine to craft a vintage typographic identity. Enter your details below.
          </p>
       </div>

       <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="space-y-6 bg-olive-900/30 p-8 border border-cream-200/5">
              <div className="group">
                <label className="font-mono text-[9px] uppercase tracking-widest block mb-3 text-cream-200/70 group-focus-within:text-cream-200 transition-colors">Brand Name</label>
                <input 
                  type="text" 
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. RUSTY ANCHOR"
                  className="w-full bg-transparent border-b border-cream-200/20 py-2 font-condensed text-4xl text-cream-100 placeholder-cream-200/10 focus:outline-none focus:border-cream-200 transition-colors uppercase"
                />
              </div>
              <div className="group">
                <label className="font-mono text-[9px] uppercase tracking-widest block mb-3 text-cream-200/70 group-focus-within:text-cream-200 transition-colors">Industry / Type</label>
                <input 
                  type="text" 
                  value={brandType}
                  onChange={(e) => setBrandType(e.target.value)}
                  placeholder="e.g. SEAFOOD & ALE"
                  className="w-full bg-transparent border-b border-cream-200/20 py-2 font-condensed text-4xl text-cream-100 placeholder-cream-200/10 focus:outline-none focus:border-cream-200 transition-colors uppercase"
                />
              </div>

              <div className="group">
                <label className="font-mono text-[9px] uppercase tracking-widest block mb-3 text-cream-200/70 group-focus-within:text-cream-200 transition-colors">Layout Style</label>
                <div className="grid grid-cols-2 gap-2">
                  {styleOptions.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`text-left px-3 py-2 font-mono text-[10px] uppercase border transition-all ${
                        selectedStyle === style.id 
                          ? 'bg-cream-200 text-olive-950 border-cream-200' 
                          : 'bg-transparent text-cream-200/50 border-cream-200/20 hover:border-cream-200/50'
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={loading || !brandName || !brandType}
                className="w-full bg-cream-200 text-olive-950 font-bold font-mono text-xs uppercase tracking-widest py-5 mt-4 hover:bg-white hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex justify-center items-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" size={14} /> : <><Sparkles size={14} /> GENERATE IDENTITY</>}
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="w-full lg:w-2/3 min-h-[700px] bg-[#dcdcdc] p-8 md:p-12 flex items-center justify-center relative shadow-2xl overflow-hidden">
             {/* Authentic Paper Texture Overlay */}
             <div className="absolute inset-0 pointer-events-none z-20 mix-blend-multiply opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]"></div>
             
             {/* Poster Container */}
             {generatedData && (
                <div className={`w-full max-w-[500px] aspect-[3/4] transition-all duration-700 ${loading ? 'opacity-50 blur-md grayscale' : 'opacity-100 blur-0 grayscale-0'} shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-1`}>
                   
                   {/* Layout: Automotive (Heavy, Boxy) */}
                   {generatedData.layoutStyle === 'automotive' && (
                     <div className="w-full h-full bg-[#EADDCD] border-[12px] border-olive-900 p-4 flex flex-col relative text-olive-900">
                        <div className="absolute top-4 left-4 right-4 h-px bg-olive-900/20"></div>
                        <div className="absolute bottom-4 left-4 right-4 h-px bg-olive-900/20"></div>
                        
                        <div className="flex justify-between items-start mb-8 pt-4">
                           <div className="border border-olive-900 px-2 py-1 font-mono text-[8px] uppercase font-bold tracking-widest">{generatedData.establishedDate}</div>
                           <Wrench size={32} strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center items-center text-center z-10 border-y-2 border-olive-900 py-8 my-4">
                           <h1 className="font-condensed text-[7rem] leading-[0.8] uppercase break-words w-full scale-y-110">
                             {generatedData.headline}
                           </h1>
                           <div className="bg-olive-900 text-[#EADDCD] px-6 py-2 mt-6 font-archivo text-sm uppercase tracking-widest transform -skew-x-12">
                             {generatedData.subhead}
                           </div>
                        </div>
                        
                        <div className="mt-auto pb-4 pt-6">
                           <p className="font-display text-2xl uppercase leading-none mb-4 text-center">"{generatedData.tagline}"</p>
                           <div className="flex gap-4 items-start">
                             <div className="w-12 h-12 bg-olive-900 rounded-full shrink-0"></div>
                             <p className="font-mono text-[8px] leading-tight text-justify uppercase">{generatedData.description}</p>
                           </div>
                        </div>
                     </div>
                   )}

                   {/* Layout: Minimal (Swiss Style) */}
                   {generatedData.layoutStyle === 'minimal' && (
                      <div className="w-full h-full bg-olive-800 p-8 flex flex-col text-[#EADDCD] relative overflow-hidden">
                         {/* Circle Graphic */}
                         <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-[#EADDCD] rounded-full opacity-20 mix-blend-overlay"></div>
                         
                         <div className="flex items-center gap-4 mb-16">
                            <Anchor size={24} />
                            <div className="h-px w-full bg-[#EADDCD]/30"></div>
                            <div className="font-mono text-[8px] uppercase tracking-[0.2em] whitespace-nowrap">{generatedData.establishedDate}</div>
                         </div>

                         <div className="flex-1 relative">
                            <h1 className="font-slab text-[4rem] leading-[0.9] mb-4 text-[#EADDCD] relative z-10 mix-blend-hard-light">
                               {generatedData.headline}
                            </h1>
                            <div className="font-sans text-lg uppercase tracking-widest opacity-80 border-l-4 border-[#EADDCD] pl-4">
                               {generatedData.subhead}
                            </div>
                         </div>

                         <div className="mt-auto">
                            <p className="font-serif italic text-3xl mb-6 opacity-90">{generatedData.tagline}</p>
                            <div className="grid grid-cols-2 gap-4 border-t border-[#EADDCD]/30 pt-4">
                               <p className="font-mono text-[8px] leading-tight opacity-70">{generatedData.description}</p>
                               <div className="flex justify-end items-end">
                                  <div className="w-8 h-8 border border-[#EADDCD] rounded-full flex items-center justify-center">
                                    <ArrowRight size={12} />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   )}

                   {/* Layout: Typography (Condensed Stack) */}
                   {generatedData.layoutStyle === 'typography' && (
                      <div className="w-full h-full bg-[#f0f0f0] p-6 border border-black flex flex-col justify-between text-black">
                         <div className="flex justify-between border-b-4 border-black pb-2">
                            <div className="font-archivo text-xl uppercase">N.01</div>
                            <div className="font-mono text-xs uppercase tracking-widest pt-1">{generatedData.establishedDate}</div>
                         </div>
                         
                         <div className="my-auto relative">
                            <h1 className="font-condensed text-[9rem] leading-[0.75] uppercase text-black mix-blend-multiply tracking-tighter">
                               {generatedData.headline}
                            </h1>
                            <div className="font-display text-4xl uppercase text-black/20 absolute top-0 left-0 pointer-events-none select-none">
                               {generatedData.headline}
                            </div>
                         </div>

                         <div className="space-y-4">
                            <div className="bg-black text-white p-4">
                               <h3 className="font-bold font-sans text-lg uppercase mb-1">{generatedData.subhead}</h3>
                            </div>
                            <div className="flex gap-4">
                               <div className="flex-1 font-mono text-[9px] leading-tight border-l-2 border-black pl-2">
                                  {generatedData.description}
                               </div>
                               <div className="flex-1 font-bold font-sans text-sm uppercase text-right leading-tight">
                                  {generatedData.tagline}
                               </div>
                            </div>
                         </div>
                      </div>
                   )}

                    {/* Layout: Retro (50s Badge Style) */}
                    {generatedData.layoutStyle === 'retro' && (
                      <div className="w-full h-full bg-[#e8e0cc] p-6 flex flex-col items-center justify-center text-[#c94c4c] relative overflow-hidden" style={{backgroundImage: 'repeating-linear-gradient(45deg, #e8e0cc 0, #e8e0cc 10px, #e0d6c0 10px, #e0d6c0 20px)'}}>
                         <div className="w-full h-full border-[8px] border-[#c94c4c] rounded-[2rem] bg-[#f9f4e8] flex flex-col items-center p-6 relative shadow-[0_0_0_8px_#f9f4e8_inset]">
                            
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#c94c4c] text-[#f9f4e8] px-8 py-2 rounded-b-xl shadow-lg">
                               <span className="font-mono text-xs font-bold tracking-widest">{generatedData.establishedDate}</span>
                            </div>

                            <div className="mt-12 mb-8 text-center relative z-10">
                               <Star className="text-[#e3b04b] fill-[#e3b04b] absolute -top-8 left-1/2 -translate-x-1/2" size={40} />
                               <h1 className="font-display text-[5rem] leading-[0.9] uppercase text-[#2b2b2b] drop-shadow-[4px_4px_0px_rgba(201,76,76,0.3)] rotate-[-2deg]">
                                  {generatedData.headline}
                               </h1>
                               <div className="w-full h-2 bg-[#e3b04b] rounded-full my-4"></div>
                               <h3 className="font-archivo text-2xl uppercase tracking-wider text-[#c94c4c]">{generatedData.subhead}</h3>
                            </div>

                            <div className="bg-[#2b2b2b] text-[#f9f4e8] p-6 w-full rounded-xl text-center mt-auto transform rotate-1 shadow-lg border-2 border-[#f9f4e8] outline outline-2 outline-[#2b2b2b]">
                               <p className="font-serif italic text-xl mb-3">"{generatedData.tagline}"</p>
                               <p className="font-mono text-[8px] uppercase tracking-wide opacity-80">{generatedData.description}</p>
                            </div>
                         </div>
                      </div>
                   )}

                   {/* Layout: Art Deco (20s Luxury) */}
                   {generatedData.layoutStyle === 'art-deco' && (
                      <div className="w-full h-full bg-[#121212] p-6 flex flex-col items-center text-[#d4af37] border-[1px] border-[#d4af37] outline outline-[12px] outline-[#121212] ring-2 ring-[#d4af37]">
                         
                         {/* Deco Borders */}
                         <div className="w-full h-full border-[2px] border-[#d4af37] p-2 relative flex flex-col items-center">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#d4af37]"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#d4af37]"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#d4af37]"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#d4af37]"></div>

                            <div className="mt-8 mb-4">
                               <Hexagon size={48} strokeWidth={1} className="animate-spin-slow" />
                            </div>

                            <div className="border-y border-[#d4af37] w-full py-2 text-center mb-8">
                               <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-[#fdfdfd]">{generatedData.establishedDate}</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
                               <h1 className="font-condensed text-[6.5rem] leading-[0.8] uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#d4af37] via-[#fdfdfd] to-[#d4af37] drop-shadow-sm tracking-widest">
                                  {generatedData.headline}
                               </h1>
                               <div className="flex items-center gap-4 w-full my-4 opacity-50">
                                  <div className="h-px bg-[#d4af37] flex-1"></div>
                                  <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
                                  <div className="h-px bg-[#d4af37] flex-1"></div>
                               </div>
                               <h3 className="font-mono text-xl uppercase tracking-[0.2em] text-[#fdfdfd]">{generatedData.subhead}</h3>
                            </div>

                            <div className="mt-auto w-full text-center pb-8">
                               <p className="font-sans italic font-light text-lg mb-4 text-[#d4af37]/80">"{generatedData.tagline}"</p>
                               <p className="font-mono text-[8px] leading-relaxed uppercase border-t border-[#d4af37]/30 pt-4 px-4 text-[#fdfdfd]/70">
                                  {generatedData.description}
                               </p>
                            </div>
                         </div>
                      </div>
                   )}
                </div>
             )}
          </div>
       </div>
       </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-olive-950 text-cream-200/30 py-24 px-6 border-t border-cream-200/5 font-mono text-[10px] uppercase tracking-widest text-center">
    <div className="flex justify-center gap-8 mb-8">
      <a href="#" className="hover:text-cream-200 transition-colors">Instagram</a> 
      <a href="#" className="hover:text-cream-200 transition-colors">Behance</a> 
      <a href="#" className="hover:text-cream-200 transition-colors">Are.na</a>
    </div>
    <p>Kogaine Type Foundry © 2024</p>
  </footer>
);

const App = () => {
  return (
    <div className="bg-olive-900 min-h-screen text-cream-200 selection:bg-cream-200 selection:text-olive-950">
      <Navbar />
      <HeroSection />
      <HeinrichSection />
      <SplitSection />
      <GridSection />
      <GeneratorSection />
      <Footer />
    </div>
  );
};

export default App;