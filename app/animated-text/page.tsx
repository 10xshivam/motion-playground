import { AnimatedText } from "@/components/AnimatedText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Text",
  description: "A animated text effect with staggered word reveals.",
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AnimatedText />
    </div>
  );
}
