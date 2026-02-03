import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, ChevronRight, BarChart3, Target, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import creativeBg from "../assets/images/creative-flow-bg.png";
import showcaseImg from "../assets/images/architecture-showcase.jpg";

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
      pdf.save("mijn-presentatie-design.pdf");
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
          className="shadow-xl bg-primary hover:bg-primary/90 text-white gap-2 rounded-full px-6"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      {/* Main Print Container - Fixed Aspect Ratio (e.g. 16:9 Slide) */}
      <div 
        ref={printRef}
        className="relative bg-white shadow-2xl overflow-hidden"
        style={{
          width: "1280px",
          height: "720px", // Standard 720p 16:9 ratio for easy printing/viewing
          flexShrink: 0
        }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url(${creativeBg})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }} 
        />
        
        {/* Abstract Shapes/Connectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 1280 720">
          <path 
            d="M 100 150 Q 400 50 640 360 T 1180 570" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            className="text-primary"
            strokeDasharray="12 12"
          />
           <circle cx="100" cy="150" r="10" className="fill-primary" />
           <circle cx="640" cy="360" r="10" className="fill-accent" />
           <circle cx="1180" cy="570" r="10" className="fill-primary" />
        </svg>

        {/* --- CONTENT LAYOUT --- */}

        {/* 1. HEADER SECTION (Top Left) */}
        <div className="absolute top-16 left-16 max-w-md z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Jaarplan 2026</span>
          </div>
          <h1 className="text-6xl font-display font-extrabold text-slate-900 leading-tight mb-6">
            Innovatie &<br/>
            <span className="text-primary">Groei Strategie</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Een visueel overzicht van onze doelen, mijlpalen en strategische richting voor het komende jaar.
          </p>
        </div>

        {/* 2. CIRCULAR DATA BUBBLE (Center Top-Right) */}
        <div className="absolute top-20 right-32 z-10">
           <div className="relative w-64 h-64 bg-white rounded-full shadow-lg border-4 border-slate-50 flex flex-col items-center justify-center p-8 text-center group transition-transform hover:scale-105">
              <div className="absolute inset-0 rounded-full border border-slate-100 -m-4"></div>
              <BarChart3 className="w-8 h-8 text-accent mb-2" />
              <h3 className="text-3xl font-bold text-slate-800">240%</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Verwachte Groei</p>
              <div className="w-16 h-1 bg-slate-100 rounded-full mt-4">
                 <div className="w-10 h-full bg-accent rounded-full"></div>
              </div>
           </div>
        </div>

        {/* 3. CENTER IMAGE SHOWCASE (Middle/Left Offset) */}
        <div className="absolute top-[340px] left-[150px] z-10">
           <div className="relative w-[400px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={showcaseImg} 
                alt="Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Toekomstvisie: Duurzaamheid</p>
              </div>
           </div>
        </div>

        {/* 4. STRATEGIC PILLARS (Bottom Right List) */}
        <div className="absolute bottom-16 right-16 w-[480px] z-10">
           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                 <Target className="w-6 h-6 text-primary" />
                 <h3 className="text-xl font-display font-bold text-slate-900">Kern Prioriteiten</h3>
              </div>
              
              <div className="space-y-4">
                 <div className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">1</div>
                    <div>
                       <h4 className="font-bold text-slate-800">Digitale Transformatie</h4>
                       <p className="text-sm text-slate-500 mt-1">Optimalisatie van processen door AI-integratie.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">2</div>
                    <div>
                       <h4 className="font-bold text-slate-800">Marktuitbreiding</h4>
                       <p className="text-sm text-slate-500 mt-1">Focus op nieuwe segmenten in de Benelux.</p>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">3</div>
                    <div>
                       <h4 className="font-bold text-slate-800">Talentontwikkeling</h4>
                       <p className="text-sm text-slate-500 mt-1">Investeren in training en leiderschap.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Connecting Line Concept (Visual Decoration) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-45 pointer-events-none" />

      </div>
      
      <p className="mt-8 text-slate-400 text-sm">
        Preview Mode • Klik op Download voor PDF
      </p>
    </div>
  );
};
