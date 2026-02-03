import React from "react";
import { 
  Type, 
  Circle, 
  Square, 
  Image as ImageIcon, 
  Download, 
  LayoutTemplate,
  MousePointer2,
  Undo,
  Redo
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolbarProps {
  onAddNode: (type: "circle" | "rect" | "text" | "image") => void;
  onExport: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onAddNode, onExport }) => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-2 rounded-xl glass-panel shadow-xl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary">
            <MousePointer2 className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Select</TooltipContent>
      </Tooltip>

      <Separator className="bg-border/50" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => onAddNode("text")} className="h-10 w-10 text-muted-foreground hover:text-primary">
            <Type className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Add Text</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => onAddNode("circle")} className="h-10 w-10 text-muted-foreground hover:text-primary">
            <Circle className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Add Circle Node</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => onAddNode("rect")} className="h-10 w-10 text-muted-foreground hover:text-primary">
            <Square className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Add Section</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => onAddNode("image")} className="h-10 w-10 text-muted-foreground hover:text-primary">
            <ImageIcon className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Add Image Placehoder</TooltipContent>
      </Tooltip>

      <Separator className="bg-border/50" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary">
            <LayoutTemplate className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Templates</TooltipContent>
      </Tooltip>

      <div className="flex-1" /> {/* Spacer if needed */}

      <Separator className="bg-border/50" />
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary">
             <Undo className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Undo</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary">
             <Redo className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Redo</TooltipContent>
      </Tooltip>
      
      <Separator className="bg-border/50" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="default" 
            size="icon" 
            onClick={onExport}
            className="h-10 w-10 bg-primary hover:bg-primary/90 text-white shadow-md rounded-lg"
          >
            <Download className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Export PDF</TooltipContent>
      </Tooltip>
    </div>
  );
};
