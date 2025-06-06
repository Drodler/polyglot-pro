"use client";

import { useState } from "react";
import { WidgetButton } from "./widget-button";
import { WidgetModal } from "./widget-modal";

export function Widget() {
  const [isOpen, setIsOpen] = useState(false);

  const openWidget = () => setIsOpen(true);
  const closeWidget = () => setIsOpen(false);

  return (
    <>
      <WidgetButton onClick={openWidget} />
      <WidgetModal isOpen={isOpen} onClose={closeWidget} />
    </>
  );
}