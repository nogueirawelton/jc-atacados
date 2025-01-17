import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface RootProps extends ComponentProps<"input"> {
  error?: string;
}

function Root({ error, className, children, ...props }: RootProps) {
  return (
    <div>
      <div
        className={twMerge(
          "border group transition-all duration-500 ring-1 focus-within:ring-zinc-900 ring-transparent focus-within:dark:ring-zinc-300 relative px-4 flex items-center gap-2 border-zinc-300 dark:border-zinc-600 rounded-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
      {error && (
        <small className="mt-2 block text-yellow-500 font-medium">
          {error}
        </small>
      )}
    </div>
  );
}

function LeftIcon({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <span className="w-px h-6 bg-zinc-300 dark:bg-zinc-600" />
    </>
  );
}

function RightIcon({ children }: { children: ReactNode }) {
  return children;
}

function Label(props: ComponentProps<"label">) {
  return <label {...props} />;
}

function Box({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={twMerge(
        "h-14 flex-1 bg-transparent text-zinc-900 dark:text-zinc-50 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Box, Label, LeftIcon, RightIcon, Root };
