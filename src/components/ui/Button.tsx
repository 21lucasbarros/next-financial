import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "login" | "register" | "hero";
  href?: string;
}

export default function Button({ children, variant, href }: ButtonProps) {
  let buttonClass = "btn";

  if (variant === "login") {
    buttonClass =
      "bg-neutral-200 text-black hover:bg-neutral-300 transition-colors px-9 py-2 rounded-3xl";
  } else if (variant === "register") {
    buttonClass =
      "bg-zinc-300/30 border border-neutral-200 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors px-9 py-2 rounded-3xl";
  } else if (variant === "hero") {
    buttonClass =
      "bg-zinc-500/20 border border-zinc-300/50 text-zinc-200 px-10 py-3 rounded-full text-lg font-light hover:bg-zinc-700/50 hover:border-zinc-200 transition-colors duration-300 ease-out inline-flex items-center gap-3 group backdrop-blur-sm";
  } else {
    buttonClass =
      "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition-colors px-9 py-2 rounded-3xl";
  }
  return (
    <Link className={buttonClass} href={href || "#"}>
      {children}
    </Link>
  );
}
