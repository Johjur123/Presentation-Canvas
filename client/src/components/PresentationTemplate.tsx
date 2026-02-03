import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Check, MessageCircle, Users, ArrowRight, Database, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import collaborationImg from "../assets/images/collaboration-unity.png";

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
      pdf.save("hr-data-presentation.pdf");
    } catch (err) {
      console.error("Export error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8 font-sans">
      {/* Action Bar - Hidden as per request */}
      {/* <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={handleExport}
          className="shadow-xl bg-indigo-600 hover:bg-indigo-700 text-white gap-2 rounded-full px-6 transition-all hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div> */}

      {/* Main Slide Container - 16:9 */}
      <div 
        ref={printRef}
        className="relative bg-white overflow-hidden flex shadow-2xl"
        style={{
          width: "1280px",
          height: "720px",
          flexShrink: 0
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-50/50 skew-x-[-12deg] origin-top translate-x-32 z-0" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 z-0" />

        {/* Absolute Footer for "Samen met" to guarantee visibility */}
        <div className="absolute bottom-8 left-12 z-20">
            <p className="text-slate-500 font-medium text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full border border-slate-100 shadow-sm">
            <Users className="w-4 h-4 text-indigo-500" />
            <span className="text-slate-400 font-bold uppercase text-xs tracking-wider">Samen met:</span> 
            <span className="text-slate-700">HR Advies, HR Ops, D&A en Informatiemanagement</span>
            </p>
        </div>

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
             {/* Abstract circle behind image */}
             <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-2xl opacity-70"></div>
             <img 
               src={collaborationImg} 
               alt="Team Collaboration" 
               className="relative w-full max-h-[320px] object-contain drop-shadow-xl z-10"
             />
          </div>
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
             {/* Texture overlay */}
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

        </div>
      </div>
      
    </div>
  );
};
