import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TemplateNodeProps {
  id: string;
  type: "circle" | "rect" | "text" | "image";
  x: number;
  y: number;
  scale?: number;
  content?: string;
  color?: string;
  selected?: boolean;
  onSelect?: (id: string) => void;
  className?: string;
}

export const TemplateNode: React.FC<TemplateNodeProps> = ({
  id,
  type,
  x,
  y,
  scale = 1,
  content,
  color = "bg-primary/10",
  selected,
  onSelect,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: scale }}
      whileHover={{ scale: scale * 1.05 }}
      drag
      dragMomentum={false}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(id);
      }}
      className={cn(
        "absolute flex items-center justify-center cursor-move transition-shadow",
        selected ? "ring-2 ring-primary ring-offset-2" : "",
        className
      )}
      style={{
        left: x,
        top: y,
      }}
    >
      {type === "circle" && (
        <div
          className={cn(
            "w-32 h-32 rounded-full border-2 border-primary/20 backdrop-blur-sm flex items-center justify-center p-4 text-center shadow-sm",
            color
          )}
        >
          <span className="font-display font-semibold text-sm text-foreground/80 pointer-events-none">
            {content || "Topic"}
          </span>
        </div>
      )}

      {type === "rect" && (
        <div
          className={cn(
            "w-48 h-32 rounded-lg border-2 border-primary/20 backdrop-blur-sm flex items-center justify-center p-4 text-center shadow-sm",
            color
          )}
        >
          <span className="font-display font-semibold text-sm text-foreground/80 pointer-events-none">
            {content || "Section"}
          </span>
        </div>
      )}

      {type === "text" && (
        <div className="min-w-[120px] text-center">
          <h3 className="text-xl font-display font-bold text-foreground">
            {content || "Heading"}
          </h3>
        </div>
      )}

      {type === "image" && (
        <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md border border-border bg-white">
           {/* Placeholder for image */}
           <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
             <span className="text-xs">Image</span>
           </div>
        </div>
      )}
    </motion.div>
  );
};
