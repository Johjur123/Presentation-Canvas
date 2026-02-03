import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Rocket, MessageSquare, Zap, Target, ArrowRight, LayoutGrid, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import startupHero from "../assets/images/startup-data-hero.png";

export const PresentationTemplate = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!printRef.current) return;
    
    try {
      const canvas = await html2canvas(printRef.current, {
        scale: 2,
        useCORS: true, 
        logging: false,
        backgroundColor: "#ffffff"
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height] 
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("hr-data-startup-style.pdf");
    } catch (err) {
      console.error("Export error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 font-sans">
      {/* Action Bar */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={handleExport}
          className="shadow-xl bg-indigo-600 hover:bg-indigo-700 text-white gap-2 rounded-full px-6 transition-all hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Download Slide
        </Button>
      </div>

      {/* Main Slide Container - 16:9 */}
      <div 
        ref={printRef}
        className="relative bg-white overflow-hidden flex flex-col shadow-2xl"
        style={{
          width: "1280px",
          height: "720px",
          flexShrink: 0
        }}
      >
        {/* Decorative Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        {/* HEADER SECTION */}
        <div className="px-16 pt-12 pb-8 flex items-center justify-between z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold tracking-wide mb-6">
              <Rocket className="w-4 h-4 fill-current" />
              PROJECT DATA UNITY
            </div>
            <h1 className="text-5xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Eenduidige HR-data
            </h1>
            <p className="text-xl text-slate-500 mt-4 leading-relaxed font-medium">
              Geen discussie meer over cijfers. Eén bron, één waarheid voor iedereen.
            </p>
          </div>
          
          {/* Hero Illustration */}
          <div className="w-[320px] h-[220px] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-2xl transform rotate-6"></div>
            <img 
              src={startupHero} 
              alt="Data Dashboard" 
              className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="flex-1 px-16 pb-8 grid grid-cols-12 gap-8 z-10">
          
          {/* Left Card: The Plan (What we do) */}
          <div className="col-span-4 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 flex flex-col relative overflow-hidden group hover:border-indigo-100 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -mr-8 -mt-8 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                 <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Wat gaan we doen?</h3>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                    <span className="text-slate-600 font-medium">Gezamenlijke definities afspreken (verzuim, instroom).</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                    <span className="text-slate-600 font-medium">Eigenaarschap van data vastleggen.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                    <span className="text-slate-600 font-medium">Eén centrale plek voor alle afspraken.</span>
                 </li>
              </ul>
            </div>
          </div>

          {/* Middle Card: The Impact (WIIFM) */}
          <div className="col-span-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2rem] shadow-xl shadow-indigo-200 p-8 flex flex-col text-white relative overflow-hidden group">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                 <Zap className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wat merk jij?</h3>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                    <span className="text-indigo-50 font-medium text-lg">Minder discussie in overleggen.</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                    <span className="text-indigo-50 font-medium text-lg">Overal dezelfde cijfers.</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                    <span className="text-indigo-50 font-medium text-lg">Sneller antwoord op vragen.</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                    <span className="text-indigo-50 font-medium text-lg">Duidelijk aanspreekpunt.</span>
                 </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Roadmap */}
          <div className="col-span-4 flex flex-col justify-between py-2">
             <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-200/60 h-full">
                <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                   <LayoutGrid className="w-4 h-4" /> Roadmap
                </h3>
                
                <div className="space-y-6 relative">
                   <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-200"></div>

                   <div className="relative flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-indigo-500 z-10 shadow-sm shrink-0"></div>
                      <div>
                         <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded uppercase">Q1</span>
                         <p className="text-slate-700 font-bold mt-1">Afspraken verzamelen</p>
                      </div>
                   </div>

                   <div className="relative flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-slate-300 z-10 shadow-sm shrink-0"></div>
                      <div>
                         <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">Q2</span>
                         <p className="text-slate-700 font-bold mt-1">Definities publiceren</p>
                      </div>
                   </div>

                   <div className="relative flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-slate-300 z-10 shadow-sm shrink-0"></div>
                      <div>
                         <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">Q3-Q4</span>
                         <p className="text-slate-700 font-bold mt-1">Feedback & Iteratie</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Team Footer */}
             <div className="mt-4 flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                   <Users className="w-4 h-4" />
                </div>
                <div>
                   <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Powered by</div>
                   <div className="text-xs font-bold text-slate-700">HR Advies • HR Ops • D&A • IM</div>
                </div>
             </div>
          </div>
        
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-sm font-medium opacity-50">
        Startup/SaaS Theme • 16:9 Format
      </p>
    </div>
  );
};
