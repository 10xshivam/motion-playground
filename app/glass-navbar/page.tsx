import { GlassNavbar } from "@/components/GlassNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Navbar",
  description: "A light glass pill navbar with a shared hover highlight",
};

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100">
      <GlassNavbar />
    </div>
  );
}