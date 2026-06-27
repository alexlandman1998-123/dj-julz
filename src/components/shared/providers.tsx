"use client";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <TooltipProvider delayDuration={150}>
      {children}
      <Toaster richColors position="top-center" />
    </TooltipProvider>
  );
}
