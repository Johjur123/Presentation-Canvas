import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Users, CheckCircle2, Calendar, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dataBg from "../assets/images/data-flow-bg.png";

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
      pdf.save("hr-data-slide.pdf");
    } catch (err) {
      console.error("Export error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8 font-sans">
      {/* Action Bar */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={handleExport}
          className="shadow-xl bg-primary hover:bg-primary/90 text-white gap-2 rounded-full px-6 transition-all hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      {/* Main Print Container - 16:9 Slide */}
      <div 
        ref={printRef}
        className="relative bg-white shadow-2xl overflow-hidden flex"
        style={{
          width: "1280px",
          height: "720px",
          flexShrink: 0
        }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply" 
             style={{ 
               backgroundImage: `url(${dataBg})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }} 
        />
        
        {/* Left Column: Title & Key Info - 40% */}
        <div className="w-[40%] bg-slate-900 text-white relative flex flex-col justify-between p-16 z-10 overflow-hidden">
           {/* Abstract shapes for flair */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

           <div className="relative">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold tracking-wider mb-8">
               <Database className="w-4 h-4" />
               HR EXCELLENCE
             </div>
             <h1 className="text-5xl font-display font-bold leading-[1.1] mb-6">
               Duidelijke HR-data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">dezelfde cijfers</span> voor iedereen
             </h1>
             <p className="text-slate-300 text-lg leading-relaxed max-w-sm">
               Naar één waarheid voor verzuim, instroom en uitstroom.
             </p>
           </div>

           {/* Footer Part in Left Column */}
           <div className="relative pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                 <Users className="w-4 h-4" />
                 Samen met
              </div>
              <p className="text-white font-medium text-base">
                 HR Advies, HR Ops, D&A en Informatiemanagement
              </p>
           </div>
        </div>

        {/* Right Column: Content & Timeline - 60% */}
        <div className="w-[60%] p-16 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-slate-100 relative">
          
          {/* Main Cards Area */}
          <div className="grid grid-cols-2 gap-8 relative z-10">
            {/* Card 1: Wat gaan we doen? */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
               <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Wat gaan we doen?</h3>
               <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    We spreken samen af welke definities we gebruiken.
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    We leggen vast wie eigenaar is van welke HR-data.
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Centrale plek voor definities en afspraken.
                  </li>
               </ul>
            </div>

            {/* Card 2: Wat merk jij hiervan? */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
               <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Wat merk jij hiervan?</h3>
               <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    Minder discussie over cijfers.
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    Overal dezelfde cijfers terugzien.
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    Sneller antwoord op vragen.
                  </li>
               </ul>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-8 pt-8 border-t border-slate-200">
             <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-slate-400" />
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Wanneer?</h3>
             </div>
             
             <div className="flex justify-between items-start relative">
                {/* Timeline Line */}
                <div className="absolute top-3 left-0 right-0 h-0.5 bg-slate-200 z-0"></div>

                {/* Q1 */}
                <div className="relative z-10 w-1/3 pr-4 group">
                   <div className="w-6 h-6 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors mb-3"></div>
                   <h4 className="text-lg font-bold text-slate-800 mb-1">Q1</h4>
                   <p className="text-sm text-slate-500 font-medium">Afspraken en definities verzamelen</p>
                </div>

                {/* Q2 */}
                <div className="relative z-10 w-1/3 px-2 text-center group">
                   <div className="w-6 h-6 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors mb-3 mx-auto"></div>
                   <h4 className="text-lg font-bold text-slate-800 mb-1">Q2</h4>
                   <p className="text-sm text-slate-500 font-medium">Eerste set definities publiceren</p>
                </div>

                {/* Q3-Q4 */}
                <div className="relative z-10 w-1/3 pl-4 text-right flex flex-col items-end group">
                   <div className="w-6 h-6 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors mb-3"></div>
                   <h4 className="text-lg font-bold text-slate-800 mb-1">Q3 – Q4</h4>
                   <p className="text-sm text-slate-500 font-medium">Uitbreiden en verbeteren</p>
                </div>
             </div>
          </div>

        </div>

      </div>
      
      <p className="mt-8 text-slate-400 text-sm font-medium opacity-50">
        Presentation Builder v2.0
      </p>
    </div>
  );
};
