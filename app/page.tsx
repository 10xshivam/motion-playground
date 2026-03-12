import { ChevronRight } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/x-wrapped", label: "X's Wrapped" },
  { href: "/clerk-card", label: "Clerk Card" },
  { href: "/action-menu", label: "Action Menu" },
];

export const metadata = {
  title: "Motion Playground",
  description: "Motion Playground - Interactive animations and transitions",
};

export default function Home() {
  return (
    <div className="font-heading flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-5xl">Motion Playground</h1>
      <div className="h-[60vh] w-96 border border-dashed border-neutral-500 p-5">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100"
          >
            <ChevronRight size={15} />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
