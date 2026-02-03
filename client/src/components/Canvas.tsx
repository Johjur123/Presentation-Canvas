import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Toolbar } from "./Toolbar";
import { TemplateNode } from "./TemplateNode";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";
import creativeBg from "../assets/images/creative-flow-bg.png";

type NodeType = "circle" | "rect" | "text" | "image";

interface NodeData {
  id: string;
  type: NodeType;
  x: number;
  y: number;
  content?: string;
}

export const Canvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<NodeData[]>([
    { id: "1", type: "text", x: 400, y: 100, content: "Main Presentation" },
    { id: "2", type: "circle", x: 250, y: 300, content: "Strategy" },
    { id: "3", type: "circle", x: 550, y: 300, content: "Growth" },
    { id: "4", type: "rect", x: 400, y: 500, content: "Details" },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleAddNode = (type: NodeType) => {
    const newNode: NodeData = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      x: 400 + (Math.random() * 50 - 25),
      y: 300 + (Math.random() * 50 - 25),
      content: type === "text" ? "New Text" : type === "circle" ? "New Point" : "Section",
    };
    setNodes([...nodes, newNode]);
  };

  const handleExport = async () => {
    if (!canvasRef.current) return;

    // Temporarily reset zoom for capture
    const originalTransform = canvasRef.current.style.transform;
    canvasRef.current.style.transform = "scale(1)";
    
    // Add export class to hide grid/ui if needed
    canvasRef.current.classList.add("printing");

    try {
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2, // High res
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("presentation-template.pdf");
    } catch (err) {
      console.error("Export failed", err);
    } finally {
      // Restore state
      canvasRef.current.style.transform = originalTransform;
      canvasRef.current.classList.remove("printing");
    }
  };

  return (
    <div className="relative w-full h-screen bg-slate-50 overflow-hidden flex flex-col">
      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-border z-40 flex items-center justify-between px-6">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent"></div>
            <h1 className="font-display font-bold text-xl text-foreground">CanvasFlow</h1>
         </div>
         <div className="flex items-center gap-4">
             <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Draft Mode</div>
             <div className="w-px h-6 bg-border"></div>
             <div className="flex items-center gap-1 bg-secondary rounded-full px-2 py-1">
                 <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => setZoom(z => Math.max(0.5, z - 0.1))}><ZoomOut className="h-3 w-3" /></Button>
                 <span className="text-xs font-mono w-8 text-center">{Math.round(zoom * 100)}%</span>
                 <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => setZoom(z => Math.min(2, z + 0.1))}><ZoomIn className="h-3 w-3" /></Button>
             </div>
         </div>
      </div>

      <Toolbar onAddNode={handleAddNode} onExport={handleExport} />

      {/* Main Workspace */}
      <div className="flex-1 overflow-auto relative cursor-grab active:cursor-grabbing bg-slate-100/50">
        <div 
            ref={canvasRef}
            className="absolute origin-center transition-transform duration-200 ease-out shadow-2xl bg-white"
            style={{
                width: "1200px",
                height: "800px",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${zoom})`,
                backgroundImage: `url(${creativeBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            onClick={() => setSelectedId(null)}
        >
          {/* Grid overlay for alignment */}
          <div className="absolute inset-0 canvas-dot-pattern pointer-events-none opacity-50" />

          {nodes.map((node) => (
            <TemplateNode
              key={node.id}
              {...node}
              selected={selectedId === node.id}
              onSelect={setSelectedId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
