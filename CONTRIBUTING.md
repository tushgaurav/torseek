# Contributing to torseek

Thanks for taking the time to contribute! This repo is a small monorepo with:

- **Web app**: `apps/webapp` (Next.js + TypeScript + pnpm, Drizzle, Better Auth)
- **Backend**: `apps/backend` (FastAPI, managed with `uv`)

## Quick links / project layout

- **Root README**: `README.md`
- **Web app README**: `apps/webapp/README.md`
- **Backend README**: `apps/backend/README.md`

## Ground rules

- **Be respectful**: Assume good intent and keep feedback constructive.
- **No secrets**: Never commit real API keys, tokens, database URLs, or `.env` files.
- **Legal note**: torseek is intended for educational/legitimate use. Avoid contributions that facilitate piracy or embed copyrighted content.

## Development setup

### Prerequisites

- **Git**
- **Node.js** (recommended: current LTS)
- **pnpm** (recommended via Corepack)
- **Python**: `>= 3.13` (see `apps/backend/pyproject.toml`)
- (Optional) **uv** (recommended for backend dependency management)

### Clone

```bash
git clone <your-fork-or-this-repo-url>
cd torseek
```

## Web app (`apps/webapp`)

### Install dependencies

```bash
cd apps/webapp
corepack enable
pnpm install
```

### Environment variables

The web app expects env vars **in `apps/webapp`**. Drizzle Kit is configured to read `.env` (see `apps/webapp/drizzle.config.ts`), and Next.js will also load `.env`-style files.

```bash
cd apps/webapp
```

Create your env file (pick the command for your shell):

```bash
# macOS/Linux (bash/zsh)
cp env.example.txt .env
```

```powershell
# Windows PowerShell
Copy-Item env.example.txt .env
```

Common variables:

- **`DATABASE_URL`**: Postgres connection string (required for auth + Drizzle)
- **`BETTER_AUTH_SECRET`**, **`BETTER_AUTH_URL`**: Better Auth configuration
- **`NEXT_PUBLIC_BACKEND_URL`**: backend base URL for API calls

### Run locally

```bash
cd apps/webapp
pnpm dev
```

### Lint / build

```bash
cd apps/webapp
pnpm lint
pnpm build
```

### Database / migrations (Drizzle)

Schema lives under `apps/webapp/db/schema/` and migrations are output to `apps/webapp/migrations/`.

If your change updates the schema, include the migration files in your PR.

> This repo doesn’t currently define Drizzle scripts in `package.json`. You can run Drizzle Kit via pnpm, e.g. `pnpm exec drizzle-kit ...`, if needed.

## Backend (`apps/backend`)

### Install dependencies

This backend is set up for `uv` (and includes `uv.lock`). If you have `uv` installed:

```bash
cd apps/backend
uv sync
```

If you don’t use `uv`, you can install from the exported `requirements.txt`:

```bash
cd apps/backend
python -m pip install -r requirements.txt
```

### Environment variables

The backend reads env vars (via `python-dotenv` in `main.py`). Create an `.env` in `apps/backend` with at least:

- **`JACKETT_URL`**: base URL of your Jackett instance (e.g. `http://localhost:9117`)
- **`JACKETT_API_KEY`**: Jackett API key

### Run locally

Using FastAPI CLI via `uv`:

```bash
cd apps/backend
uv run fastapi dev main.py
```

Or via Uvicorn:

```bash
cd apps/backend
uv run uvicorn main:app --reload --port 8000
```

## Making changes

### Branch naming

Create a topic branch from `main`:

- `feat/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

### Commit messages

Keep commits focused and descriptive. Conventional Commits are welcome but not required:

- `feat: add ...`
- `fix: handle ...`
- `docs: update ...`

### Code style expectations

- **TypeScript/React**: keep `strict` TypeScript happy (see `apps/webapp/tsconfig.json`)
- **Linting**: run `pnpm lint` in `apps/webapp` before opening a PR
- **APIs**: prefer small, composable changes; add comments for non-obvious logic

## Pull requests

### Before opening a PR

- **Web app**
  - `pnpm lint`
  - `pnpm build` (recommended)
- **Backend**
  - Start the server and do a quick smoke test (at least hit `/` and one real endpoint)
- **Docs**
  - Update README/docs when behavior or env vars change
- **No secrets**
  - Ensure `.env` and credentials are not committed

### PR description checklist

Include:

- What changed and why
- Screenshots (for UI changes)
- Any manual test steps
- Migration notes (if schema changed)

## Reporting bugs / requesting features

Open a GitHub issue with:

- Steps to reproduce
- Expected vs actual behavior
- Logs / screenshots
- OS + Node/Python versions

## Security issues

Please avoid filing public issues for security vulnerabilities. If GitHub Security Advisories are enabled for this repo, use **“Report a vulnerability”** on GitHub instead.


