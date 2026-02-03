import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Check, Users, Database, ShieldCheck, Zap, ChevronRight, ChevronLeft, BarChart3, Layout, PieChart, LineChart, FileSearch, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import collaborationImg from "../assets/images/collaboration-unity.png";
import dashboardImg from "../assets/images/hr-dashboard-hero.png";
import { cn } from "@/lib/utils";

// --- Types ---
type SlideProps = {
  printRef: React.RefObject<HTMLDivElement | null>;
};

// --- Slide 1: Data Unity ---
const SlideOne = ({ printRef }: SlideProps) => {
  return (
    <div 
      ref={printRef}
      className="relative bg-white overflow-hidden flex shadow-2xl transition-all duration-500"
      style={{ width: "1280px", height: "720px", flexShrink: 0 }}
    >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-50/50 skew-x-[-12deg] origin-top translate-x-32 z-0" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 z-0" />

        {/* --- LEFT COLUMN: Title & Visual (40%) --- */}
        <div className="w-[42%] relative z-10 p-12 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8">
              <Database className="w-3 h-3" />
              Data Project
            </div>
            
            <h1 className="text-[3.25rem] font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
              Duidelijke HR-data & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                dezelfde cijfers
              </span> <br/>
              voor iedereen
            </h1>
          </div>

          {/* Main Illustration Area */}
          <div className="flex-1 flex items-center justify-center relative my-4">
             <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-2xl opacity-70"></div>
             <img 
               src={collaborationImg} 
               alt="Team Collaboration" 
               className="relative w-full max-h-[320px] object-contain drop-shadow-xl z-10"
             />
          </div>

          {/* Hidden Footer Placeholder (kept for layout consistency if needed) */}
          <div className="mt-4 hidden"></div>
        </div>

        {/* --- RIGHT COLUMN: Content Sections (60%) --- */}
        <div className="w-[58%] relative z-10 p-12 pl-4 flex flex-col justify-center gap-8">
          
          {/* Section 1: Wat gaan we doen? */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-blue-100 transition-colors group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
             
             <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Wat gaan we doen?
             </h3>
             
             <ul className="grid grid-cols-1 gap-4 relative z-10">
                <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                   <span className="text-slate-600 text-[0.95rem] leading-relaxed">
                     We spreken samen af <strong className="text-slate-800">welke definities</strong> we gebruiken (bijv. verzuim, instroom en uitstroom).
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                   <span className="text-slate-600 text-[0.95rem] leading-relaxed">
                     We leggen vast <strong className="text-slate-800">wie eigenaar is</strong> van welke HR-data.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                   <span className="text-slate-600 text-[0.95rem] leading-relaxed">
                     We maken een <strong className="text-slate-800">centrale plek</strong> waar definities en afspraken terug te vinden zijn.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                   <span className="text-slate-600 text-[0.95rem] leading-relaxed">
                     Nieuwe dashboards en rapportages sluiten altijd aan op deze afspraken.
                   </span>
                </li>
             </ul>
          </div>

          {/* Section 2: Wat merk jij hiervan? */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
             
             <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/20">
                  <Zap className="w-5 h-5 text-yellow-300" />
                </div>
                Wat merk jij hiervan?
             </h3>
             
             <ul className="grid grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 shadow-[0_0_8px_white]" />
                   <span className="text-indigo-50 text-[0.95rem] leading-relaxed">
                     Minder discussie over cijfers in overleggen.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 shadow-[0_0_8px_white]" />
                   <span className="text-indigo-50 text-[0.95rem] leading-relaxed">
                     Je ziet overal dezelfde cijfers terug.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 shadow-[0_0_8px_white]" />
                   <span className="text-indigo-50 text-[0.95rem] leading-relaxed">
                     Sneller antwoord op vragen over HR-data.
                   </span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 shadow-[0_0_8px_white]" />
                   <span className="text-indigo-50 text-[0.95rem] leading-relaxed">
                     Duidelijk wie je kunt benaderen bij wijzigingen.
                   </span>
                </li>
             </ul>
          </div>

          <div className="mt-2">
              <p className="text-slate-500 font-medium text-xs flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 w-fit">
              <Users className="w-4 h-4 text-indigo-500" />
              <span className="font-bold uppercase tracking-wider text-slate-400">Samen met:</span> 
              <span className="text-slate-600">HR Advies, HR Ops, D&A en Informatiemanagement</span>
              </p>
          </div>

        </div>
    </div>
  );
}

// --- Slide 2: Dashboards ---
const SlideTwo = ({ printRef }: SlideProps) => {
  return (
    <div 
      ref={printRef}
      className="relative bg-white overflow-hidden flex shadow-2xl transition-all duration-500"
      style={{ width: "1280px", height: "720px", flexShrink: 0 }}
    >
        {/* Decorative Background - Mirrored/Shifted for variety */}
        <div className="absolute top-0 left-0 w-[55%] h-full bg-slate-50/50 skew-x-[12deg] origin-top -translate-x-32 z-0" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-60 z-0" />

        {/* --- LEFT COLUMN: Content (Swapped for variety) - 55% --- */}
        <div className="w-[58%] relative z-10 p-12 pr-4 flex flex-col justify-center gap-6">
           {/* Section 1: Wat gaan we doen */}
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center">
                  <Layout className="w-4 h-4" />
                </div>
                Wat gaan we doen?
              </h3>
              <ul className="space-y-2">
                 <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Dashboards <strong>overzichtelijker</strong> en makkelijker te gebruiken maken.</span>
                 </li>
                 <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Zorgen voor <strong>dezelfde cijfers en definities</strong> overal.</span>
                 </li>
                 <li className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Nieuwe dashboards bouwen waar nog <strong>inzicht mist</strong>.</span>
                 </li>
              </ul>
           </div>

           {/* Section 2: Wat merk jij? */}
           <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mt-10 -mr-10"></div>
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center border border-white/20">
                  <Zap className="w-4 h-4 text-yellow-300" />
                </div>
                Wat merk jij hiervan?
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                 <li className="flex items-center gap-2 text-sm text-cyan-50"><div className="w-1 h-1 bg-white rounded-full" /> Sneller inzicht zonder Excel.</li>
                 <li className="flex items-center gap-2 text-sm text-cyan-50"><div className="w-1 h-1 bg-white rounded-full" /> Minder discussie over cijfers.</li>
                 <li className="flex items-center gap-2 text-sm text-cyan-50"><div className="w-1 h-1 bg-white rounded-full" /> Informatie makkelijker terugvinden.</li>
                 <li className="flex items-center gap-2 text-sm text-cyan-50"><div className="w-1 h-1 bg-white rounded-full" /> Aansluiting op je werk.</li>
              </ul>
           </div>

           {/* Section 3: Voorbeelden */}
           <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100">
              <h3 className="text-xl font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <BarChart3 className="w-5 h-5 text-slate-500" />
                 Voorbeelden dashboards <span className="text-xs font-normal text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200 ml-2">In ontwikkeling</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3 items-start shadow-sm">
                    <Users className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                       <div className="text-sm font-bold text-slate-800">Vacatures & recruitment</div>
                       <div className="text-xs text-slate-500 mt-1">Inzicht in openstaande vacatures en doorlooptijden.</div>
                    </div>
                 </div>
                 <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3 items-start shadow-sm">
                    <PieChart className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                       <div className="text-sm font-bold text-slate-800">Verlof & bezetting</div>
                       <div className="text-xs text-slate-500 mt-1">Overzicht van verlof en capaciteit binnen teams.</div>
                    </div>
                 </div>
                 <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3 items-start shadow-sm">
                    <MessageCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                       <div className="text-sm font-bold text-slate-800">HR-support</div>
                       <div className="text-xs text-slate-500 mt-1">Inzicht in vragen en afhandeltijden.</div>
                    </div>
                 </div>
                 <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3 items-start shadow-sm">
                    <FileSearch className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                       <div className="text-sm font-bold text-slate-800">Datakwaliteit</div>
                       <div className="text-xs text-slate-500 mt-1">Signaleren van afwijkingen in HR-data.</div>
                    </div>
                 </div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-4 italic">En er volgen nog meer dashboards op basis van behoefte en feedback.</p>
           </div>
        </div>

        {/* --- RIGHT COLUMN: Title & Hero (45%) --- */}
        <div className="w-[42%] relative z-10 p-12 flex flex-col justify-center items-end text-right">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-6">
              <LineChart className="w-3 h-3" />
              Inzicht & Sturing
            </div>

            <h1 className="text-[3rem] font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
              Betere <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-blue-600">
                 HR-dashboards
              </span> <br/>
              voor iedereen
            </h1>

             {/* Main Illustration Area */}
             <div className="flex-1 w-full flex items-center justify-center relative my-4">
                <div className="absolute w-[280px] h-[280px] bg-gradient-to-bl from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>
                <img 
                  src={dashboardImg} 
                  alt="HR Dashboards" 
                  className="relative w-full max-h-[340px] object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
                />
             </div>
        </div>

    </div>
  );
}


export const PresentationTemplate = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
     <SlideOne printRef={printRef} key="slide1" />,
     <SlideTwo printRef={printRef} key="slide2" />
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8 font-sans">
      
      {/* Slide Container */}
      <div className="relative">
         {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center gap-4 bg-white p-2 rounded-full shadow-lg border border-slate-100">
         <Button
           variant="ghost"
           size="icon"
           onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
           disabled={currentSlide === 0}
           className="rounded-full hover:bg-slate-100"
         >
           <ChevronLeft className="w-5 h-5 text-slate-600" />
         </Button>

         <div className="flex gap-2 px-2">
            {slides.map((_, idx) => (
                <div 
                   key={idx}
                   onClick={() => setCurrentSlide(idx)}
                   className={cn(
                       "w-2.5 h-2.5 rounded-full cursor-pointer transition-colors",
                       currentSlide === idx ? "bg-indigo-600" : "bg-slate-300 hover:bg-slate-400"
                   )}
                />
            ))}
         </div>

         <Button
           variant="ghost"
           size="icon"
           onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
           disabled={currentSlide === slides.length - 1}
           className="rounded-full hover:bg-slate-100"
         >
           <ChevronRight className="w-5 h-5 text-slate-600" />
         </Button>
      </div>

      <p className="mt-4 text-slate-400 text-xs font-medium opacity-50">
        Slide {currentSlide + 1} of {slides.length}
      </p>
    </div>
  );
};
