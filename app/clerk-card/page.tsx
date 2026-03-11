import { Metadata } from "next";
import { ClerkCard } from "@/components/ClerkCard";

export const metadata: Metadata = {
  title: "Clerk Card",
  description: "Organization UI Components by Clerk",
};

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ClerkCard />
    </div>
  );
}
