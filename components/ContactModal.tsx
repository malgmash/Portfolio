"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { MailIcon, PhoneIcon, MapPinIcon, CloseIcon } from "./icons";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        <MailIcon className="h-4 w-4" />
        Contact
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h2 id="contact-modal-title" className="font-display text-xl font-semibold text-text">
                Get in touch
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-md p-1 text-text-muted transition-colors hover:text-text"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3">
                <MapPinIcon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-text">{profile.location}</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-accent" />
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="text-sm font-medium text-text hover:text-accent">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3">
                <MailIcon className="h-5 w-5 shrink-0 text-accent" />
                <a href={`mailto:${profile.email}`} className="text-sm font-medium text-text hover:text-accent">
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
