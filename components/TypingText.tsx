"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  phrases: string[];
  className?: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
};

export default function TypingText({
  phrases,
  className,
  typingSpeedMs = 55,
  deletingSpeedMs = 30,
  pauseMs = 3000,
}: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeedMs : typingSpeedMs
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, pauseMs, typingSpeedMs, deletingSpeedMs]);

  return (
    <p className={className}>
      <span aria-live="polite">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] translate-y-[0.1em] animate-[blink_1s_step-end_infinite] bg-current align-middle"
        style={{ height: "0.9em" }}
      />
    </p>
  );
}
