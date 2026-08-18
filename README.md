# Portfolio

Malama Masheke's portfolio. Next.js App Router, TypeScript, Tailwind CSS v4, statically exported for GitHub Pages.

All copy is sourced from [`CV.md`](./CV.md) and mirrored into [`lib/content.ts`](./lib/content.ts), which is the only file the page components read from.

## Develop

```bash
npm install
npm run dev
```

## Build the static export

```bash
npm run build
```

Output goes to `out/`. Preview it locally with:

```bash
npm run serve
```

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the static export and publishes it to GitHub Pages. Enable Pages in the repo settings with source set to "GitHub Actions".

## Still needed

- `public/profile.jpg` (or `.jpeg` / `.png` / `.webp`): hero profile photo. Falls back to a monogram placeholder until supplied.
- `public/resume.pdf`: resume file linked from the Contact section. Shows as a disabled "TODO" card until supplied.
