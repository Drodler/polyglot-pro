"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface WidgetButtonProps {
  onClick: () => void;
}

export function WidgetButton({ onClick }: WidgetButtonProps) {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 p-0 shadow-lg transition-all duration-300 hover:scale-110", 
        animated && "animate-bounce"
      )}
    >
      <MessageSquare className="h-6 w-6" />
      <span className="sr-only">Open Widget</span>
    </Button>
  );
}