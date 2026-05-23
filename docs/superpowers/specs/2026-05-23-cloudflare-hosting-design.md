# Design: Cloudflare Pages Deployment

**Date:** 2026-05-23  
**Status:** Approved  
**Topic:** Cloudflare Hosting

## Overview
This design outlines the process for hosting the `webdesign-porto` project on Cloudflare Pages using the direct CLI upload method.

## Requirements
- Cloudflare account (user authenticated).
- Node.js/NPM environment for building and running Wrangler.

## Architecture & Workflow

### 1. Build Process
- Command: `npm run build`
- Output: Production assets in the `dist/` directory.
- Tool: Vite (as configured in `package.json`).

### 2. Deployment Process
- Tool: `wrangler` (via `npx`).
- Method: Direct folder upload.
- Project Name: `webdesign-porto`.
- Command: `npx wrangler pages deploy dist --project-name=webdesign-porto`.

### 3. Authentication
- User will perform a manual login via `npx wrangler login` if not already authenticated in the environment.

## Success Criteria
- Successful build without errors.
- Successful upload to Cloudflare.
- Provision of a working `.pages.dev` URL.

## Risks & Mitigations
- **Auth Failure:** If `npx wrangler login` fails in the headless/CLI environment, we will check for existing tokens or manual configuration.
- **Build Errors:** Ensure all dependencies are installed before building.
