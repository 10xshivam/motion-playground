import { ActionMenu } from "@/components/ActionMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action Menu",
  description: "Animated action menu interaction built with Motion",
};

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ActionMenu />
    </div>
  );
}
