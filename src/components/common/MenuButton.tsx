import { cn } from "@/utils/classname.util";
import { ReactNode } from "react";

type P = {
  prefix?: ReactNode;
  children: ReactNode;
  className?: string;
  prefixClassName?: string;
  childrenClassName?: string;
};

export default function MenuButton({
  children,
  className,
  prefix,
  prefixClassName,
  childrenClassName,
}: P) {
  return (
    <button
      type="button"
      className={cn("flex items-center justify-between menu-btn", className)}
    >
      <div className={prefixClassName}>{prefix}</div>
      <div className={childrenClassName}>{children}</div>
    </button>
  );
}
