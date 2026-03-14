import type { Metadata } from "next";
import { DeleteConfirmationButton } from "@/components/DeleteConfirmationButton";

export const metadata: Metadata = {
  title: "Delete Confirmation",
  description: "An animated delete confirmation button with a smooth expand-and-confirm interaction",
};

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <DeleteConfirmationButton />
    </div>
  );
}
