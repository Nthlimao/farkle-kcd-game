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

## Deploy (GitHub Pages)

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or `master`). The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds and publishes the site.

The live URL will be:

`https://<your-github-username>.github.io/farkle-kcd-game/`

If you rename the repository, update the `VITE_BASE_PATH` in the deploy workflow so asset paths stay correct.

## GitHub Actions

| Workflow | Trigger | Purpose |
| -------- | ------- | ------- |
| [CI](.github/workflows/ci.yml) | Push / PR to `main` or `master` | Lint and build |
| [Deploy](.github/workflows/deploy.yml) | Push to `main` or `master` | Build and publish to GitHub Pages |
