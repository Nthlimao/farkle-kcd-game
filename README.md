# Farkle KCD Game

React (JavaScript) app scaffolded with [Vite](https://vite.dev/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Build

```bash
npm run build
npm run preview
```

To test the GitHub Pages path locally (open `/farkle-kcd-game/` on the preview server):

```bash
# Git Bash / macOS / Linux
VITE_BASE_PATH=/farkle-kcd-game/ npm run preview:pages
```

## Deploy (GitHub Pages)

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`. The [Build and Deploy](.github/workflows/deploy.yml) workflow builds and publishes the site.

The live URL will be:

[https://nthlimao.github.io/farkle-kcd-game/](https://nthlimao.github.io/farkle-kcd-game/)

This is a **project site** under your user Pages root ([nthlimao.github.io](https://nthlimao.github.io)); it does not replace the site served from your `nthlimao.github.io` repository.

Production builds read `process.env.VITE_BASE_PATH` in `vite.config.js`. CI sets it to `/<repo-name>/` from the repository name; locally, use `.env.production` or pass the path when building (e.g. `/farkle-kcd-game/`).

## GitHub Actions

| Workflow | Trigger | Purpose |
| -------- | ------- | ------- |
| [CI](.github/workflows/ci.yml) | Push / PR to `main` or `master` | Lint and build |
| [Build and Deploy](.github/workflows/deploy.yml) | Push to `main` | Build and publish to GitHub Pages |
