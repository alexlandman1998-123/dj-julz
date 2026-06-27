import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "black" | "white";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "black", className, priority = false }: LogoProps) {
  return (
    <Image
      src={variant === "white" ? "/images/logo-white.png" : "/images/logo-black.png"}
      alt="DJ Julz"
      width={240}
      height={96}
      priority={priority}
      className={cn("h-auto w-28 object-contain", className)}
    />
  );
}
