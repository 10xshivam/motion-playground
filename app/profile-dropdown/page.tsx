"use client";

import { ProfileDropdown } from "@/components/ProfileDropdown";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen items-start justify-center bg-neutral-100 pt-36">
      <div className="flex flex-col items-end gap-3 w-[260px]">
        <button
          type="button"
          aria-expanded={open}
          aria-label="Account menu"
          onClick={() => setOpen((value) => !value)}
          className="flex items-center justify-center rounded-full border-[1.5px] border-neutral-500/60 p-px cursor-pointer"
        >
          <Image
            src="/pfp1.png"
            alt="pfp"
            width={37}
            height={37}
            className="rounded-full object-cover"
          />
        </button>
        <ProfileDropdown open={open} />
      </div>
    </div>
  );
}
