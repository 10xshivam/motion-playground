import { NatureGallery } from "@/components/NatureGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature Gallery",
  description: "A scroll-driven nature gallery with layered parallax motion",
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-neutral-900">
      <NatureGallery />
    </div>
  );
}
