"use client";

import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useAnimate, type AnimationSequence } from "motion/react";

const OTP_LENGTH = 4;

export function OTPVerification() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [scope, animate] = useAnimate();
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const isComplete = otp.every((digit) => digit !== "");

  useEffect(() => {
    if (!isComplete || !scope.current) {
      return;
    }

    const sequence: AnimationSequence = [
      [
        ".otp-content",
        { opacity: 0, y: 12, filter: "blur(6px)" },
        { duration: 0.2 },
      ],
      [
        scope.current,
        {
          width: "6rem",
          height: "6rem",
          backgroundColor: "#d0fae5",
          borderRadius: "9999px",
          padding: "0rem",
        },
        { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      ],
      [
        ".check-icon",
        { opacity: 1, scale: 1 },
        { duration: 0.2 },
      ],
    ];

    void animate(sequence);
  }, [animate, isComplete, scope]);

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const digit = event.target.value.replace(/\D/g, "").slice(-1);

    setOtp((currentOtp) => {
      const nextOtp = [...currentOtp];
      nextOtp[index] = digit;
      return nextOtp;
    });

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      ref={scope}
      className="relative flex h-56 w-96 items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-900 p-7"
    >
      <div className="otp-content w-full">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-medium">Verify your account</h2>
            <p className="text-sm font-medium text-neutral-500">
              Enter the verification code sent to your email.
            </p>
          </div>

          <div className="flex gap-2">
            {otp.map((digit, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center rounded-2xl bg-neutral-800 p-2"
              >
                <input
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(index, event)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  className="h-20 w-full min-w-0 rounded-xl bg-neutral-700/50 text-center text-3xl font-bold text-neutral-300 placeholder:text-neutral-500 focus:outline-none"
                  placeholder="0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Check
        size={56}
        strokeWidth={3.5}
        className="check-icon pointer-events-none absolute scale-75 text-emerald-500 opacity-0"
      />
    </div>
  );
}
