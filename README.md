# For Bizness Woman 🌷

A dreamy, responsive birthday microsite built with React, TypeScript, Vite and Framer Motion. It is a static site and can be hosted free on GitHub Pages.

## Requirements

- Node.js 20.19+ (Node 26.13.0 is suitable)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Personalise the site

### 1. Add your photos

Copy 15–20 photos into `public/images/memories/` and name them:

- `memory-01.jpg`
- `memory-02.jpg`
- ...
- `memory-18.jpg`

The gallery has 18 editable entries in `src/data/memories.ts`. Update each `caption` and `note` to match the photo and your friendship. You can use `.png`, `.webp` etc.; if you change an extension, update the matching `image` value in that file. Photos are local assets, so they are included in the GitHub Pages deployment.

Tip: resize photos to around 1200px on the long edge and compress them to keep the site fast. Avoid uploading very large original camera files.

### 2. Add music

Place a song you have permission to use at `public/music/birthday-song.mp3`. The music button starts playback only after the visitor taps it (browser autoplay rules). If you don't add a file, the site displays a small reminder when the button is clicked.

### 3. Edit the letter

The letter is in `src/App.tsx`, inside the `letter-section`. Replace “Your friend” with your preferred sign-off. Keep it honest and in your own voice.

### 4. Change the name or date

Search `src/App.tsx` for `Bizness Woman` and `NOVEMBER 11` to edit the greeting.

## GitHub Pages deployment

1. Create a GitHub repository named `bizness-birthday` (or use another name).
2. In `vite.config.ts`, set `base` to `'/YOUR-REPOSITORY-NAME/'` including both slashes.
3. Push this project to the repository's `main` branch.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Add the workflow below at `.github/workflows/deploy.yml` and push it.
7. Wait for the Actions workflow to finish. Your site will be at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`.

The workflow automatically builds and publishes every push to `main`.

## Build locally

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Notes

- No backend, database, API key or paid service is required.
- Google Fonts are loaded from Google Fonts; the site falls back to system fonts if unavailable.
- Test the deployed URL on a phone before sharing it.
