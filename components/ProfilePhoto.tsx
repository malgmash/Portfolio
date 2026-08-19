import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/lib/content";

const CANDIDATES = ["profile.jpg", "profile.jpeg", "profile.png", "profile.webp"];
const SIZE = 320;

function findProfilePhoto(): string | null {
  for (const file of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", file))) {
      return `/${file}`;
    }
  }
  return null;
}

export default function ProfilePhoto() {
  const photoSrc = findProfilePhoto();

  if (photoSrc) {
    return (
      <div className="h-40 w-40 overflow-hidden rounded-2xl border border-border sm:h-56 sm:w-56">
        <Image
          src={photoSrc}
          alt={`Portrait of ${profile.name}`}
          width={SIZE}
          height={SIZE}
          priority
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 20%" }}
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-40 w-40 items-center justify-center rounded-2xl border border-dashed border-border bg-surface sm:h-56 sm:w-56"
      role="img"
      aria-label={`Placeholder for ${profile.name}'s profile photo`}
    >
      <div className="text-center">
        <span className="font-display text-3xl font-semibold text-text-muted">{profile.monogram}</span>
        <p className="mt-2 px-4 text-xs font-medium uppercase tracking-wide text-accent">TODO: photo</p>
      </div>
    </div>
  );
}
