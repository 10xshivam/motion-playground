import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navbar",
  description: "An animated navbar with a shared hover highlight",
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <Navbar />
    </div>
  );
}
