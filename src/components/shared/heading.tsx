import { cn } from "@/lib/utils";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function Heading({ eyebrow, title, description, align = "left" }: HeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-heading text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-balance text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
