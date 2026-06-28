import type { ReactNode } from "react";

type QuestionCardProps = {
  title: string;
  helper: string;
  error?: string;
  children: ReactNode;
};

export function QuestionCard({ title, helper, error, children }: QuestionCardProps) {
  return (
    <div className="p-5 lg:p-7">
      <h2 className="font-heading text-[2.55rem] leading-[0.94] text-foreground lg:text-[3.8rem]">
        {title}
      </h2>
      <p className="body-copy mt-4 max-w-2xl">{helper}</p>
      <div className="mt-6">{children}</div>
      {error ? (
        <p className="mt-5 rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
