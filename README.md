# Vincent Kinney Portfolio

Public proof site for Vincent Kinney's AI-native product work, project catalog, and AI App Rescue Audit offer.

- Live site: https://vpkdevs.github.io/vincent-kinney-portfolio/
- Source: https://github.com/VpkDevs/vincent-kinney-portfolio
- Status: deployed, hardened, public; distribution and first paid audit are the next proof targets.

## What This Site Does

This is not just a visual portfolio. It is a public operating asset for turning a large private project surface into shipped work and revenue.

- Presents three flagship directions: Shipwright, Narrative Engine, and Shadowlight.
- Publishes a searchable Project Atlas generated from the local project registry.
- Offers a paid AI App Rescue Audit with concrete deliverables and pricing.
- States the shipping status honestly: deployed and hardened, not yet fully distributed.
- Gives future AI agents a repeatable workflow for updating the project catalog.

## Tech Stack

- Next.js 16
- React 19
- TypeScript 6
- Tailwind CSS 3
- Lucide React
- Static export for GitHub Pages

## Local Development

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Project Atlas Workflow

The portfolio imports `data/projectAtlas.ts`. That file is generated from the broader project registry at `C:\Users\MQ420_OL\DEV\PROJECTS.md`.

```powershell
npm run generate:atlas
```

The generator:

- Reads UTF-8 or UTF-16 project registry files.
- Parses the canonical markdown table.
- Adds category labels and focus descriptions.
- Marks projects as `Public repo` or `Private/local`.
- Preserves public repository links where available.

To use a different registry:

```powershell
$env:PROJECTS_REGISTRY="C:\path\to\PROJECTS.md"
npm run generate:atlas
Remove-Item Env:PROJECTS_REGISTRY
```

## Build

For a normal local build:

```powershell
npm run check
npm run build
```

For the GitHub Pages export:

```powershell
$env:GITHUB_PAGES="true"
npm run build
Remove-Item Env:GITHUB_PAGES
```

The GitHub Pages build writes static assets to `out/` with the `/vincent-kinney-portfolio` base path.

## Deployment

The production site is currently published from the `gh-pages` branch because GitHub Actions was blocked by an account billing issue and the available Vercel token was invalid.

The practical deployment flow is:

1. Build with `GITHUB_PAGES=true`.
2. Copy `out/` to a `gh-pages` worktree.
3. Commit and push the `gh-pages` branch.
4. Verify the live URL returns HTTP 200.

## Contact Behavior

The contact form is static-safe. It opens a prefilled email draft instead of pretending to submit to a backend that does not exist.

Audit CTA:

```text
mailto:vincekinney1991@gmail.com?subject=AI%20App%20Rescue%20Audit
```

## Current Quality Bar

- `npm audit` should report zero known vulnerabilities.
- `npm run check` should pass TypeScript validation.
- `GITHUB_PAGES=true npm run build` should complete successfully.
- The live site should visibly include Public Proof, Project Atlas, and AI App Rescue Audit sections.
- No copy should claim revenue, customers, or shipped products before those are true.

## Next Proof Targets

- Publish the portfolio in public channels.
- Convert the AI App Rescue Audit into the first paid buyer.
- Pick one Project Atlas item and ship it to a live URL.
- Add case-study pages once there is real product usage or revenue.
