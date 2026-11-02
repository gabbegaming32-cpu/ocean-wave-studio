# Vanta Productions — Render-ready website

This folder contains the complete website and a minimal Node.js server that works on a Render **Web Service**. No build step or external Node packages are required.

## Upload to the *existing* GitHub repository

1. Extract this ZIP **on your computer**.
2. Upload the **contents of this folder** directly to the **root** of the GitHub repository connected to Render (not inside another subfolder, and not the ZIP itself).
3. Check that `index.html`, `server.js`, and `package.json` sit together in the repository root, alongside `styles.css`, `site.js`, the other HTML pages, and the `assets/` folder.
4. Commit the files to the `main` branch.
5. In Render, choose **Manual Deploy → Deploy latest commit** on the existing service. Do not delete the Render service or change the custom domain.

**Render settings for a Node Web Service**: Runtime Node, Start Command `npm start` (or `node server.js`), Root Directory blank (repository root). An existing `npm install` build command is harmless; no build is needed.

If the repository still contains an older `vanta-productions-rebuild/` folder, the server prefers a Vanta homepage in the repository root. It falls back to the nested Vanta folder when the root homepage is still Ocean Wave Studio. You don't have to delete the old folder to get the new site working.

## Local testing

Run `npm start`, then open `http://localhost:3000`.

Pages: Home (`index.html`), Project (`project.html`), Studio (`studio.html`), Team (`team.html`). Footer: © 2026 Vanta Productions. All rights reserved.
