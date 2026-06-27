import { Check } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PackageCardProps = {
  title: string;
  price: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
};

export function PackageCard({
  title,
  price,
  description,
  features,
  featured,
}: PackageCardProps) {
  return (
    <Card
      className={cn(
        "h-full rounded-[1.5rem] border-border bg-card transition-transform duration-300 hover:-translate-y-1",
        featured && "bg-foreground text-background",
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-4 text-2xl">
          {title}
          <span
            className={cn(
              "text-sm font-normal text-muted-foreground",
              featured && "text-background/70",
            )}
          >
            {price}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            "text-sm leading-6 text-muted-foreground",
            featured && "text-background/72",
          )}
        >
          {description}
        </p>
        <ul className="mt-8 grid gap-3 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="size-4" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
