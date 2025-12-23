import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-8">
      <h1 className="text-5xl">Motion Playground</h1>
      <div className="w-96 h-[60vh] border border-neutral-500 border-dashed p-5">
        <Link href={'/x-wrapped'} className="text-sm flex items-center text-neutral-400 gap-2 hover:text-neutral-100"> <ChevronRight size={15}/>X&apos;s Wrapped</Link>
      </div>
    </div>
  );
}
