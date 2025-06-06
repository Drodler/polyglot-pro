import React from "react";
import { Badge } from "@/components/ui/badge";
import { Bolt } from "lucide-react";

export function BoltBadge() {
  return (
    <Badge variant="secondary" className="gap-1">
      <Bolt className="h-3 w-3" />
      <span>Built with Bolt</span>
    </Badge>
  );
}