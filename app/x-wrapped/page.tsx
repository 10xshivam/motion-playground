import { XWrappedCard } from "@/components/XWrappedCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "X Wrapped",
  description: "Your 2025 X wrapped statistics",
};

export default function XWrapped() {
  return (
    <div className="flex min-h-screen items-center bg-zinc-50 dark:bg-black flex-col gap-7 pt-40 font-heading">
      <XWrappedCard />
    </div>
  );
}
