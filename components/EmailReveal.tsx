"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { MailIcon, CopyIcon, CheckIcon } from "./icons";

export default function EmailReveal() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable, no-op
    }
  }

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
      >
        <MailIcon className="h-4 w-4" />
        Reveal email
      </button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="rounded-md border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-text">
        {profile.email}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <span className="sr-only" role="status">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </div>
  );
}
