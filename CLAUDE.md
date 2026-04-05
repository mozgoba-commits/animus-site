# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page and brand assets for **Animus** (animus.by) — an IT development company based in Minsk, Belarus. Static site, no build system or framework — plain HTML/CSS/JS served directly.

## Structure

- `index.html` — Main landing page (Russian). Sections: Hero, Services, Why Us, Process, Contact form, Footer
- `style.css` — All styles. CSS custom properties in `:root`, BEM-like naming, responsive at 768px/480px
- `script.js` — Scroll reveal (IntersectionObserver), sticky header, mobile burger nav, placeholder form handler
- `favicon.svg` — SVG favicon
- `DESIGN.md` — Design system spec (Russian): palette, typography, component rules, design principles
- `public/brand-preview.html` — Brand kit preview page (logo variants, color palette, typography samples)
- `public/logo/` — SVG logo assets: color, white, black, mono-orange, full-color, full-white

## Design System

Anthropic-inspired warm minimalism. See `DESIGN.md` for full spec.

- **Fonts**: Inter (body, headings), JetBrains Mono (tags, numbers)
- **Palette**: Terracotta accent `#D4744A`, cream bg `#FAF8F5`, alt bg `#F0EDE8`, dark text `#1A1A1A`, dim text `#6B6560`
- **Principles**: warm not cold, lots of whitespace, thin borders, subtle scroll animations, no AI-slop (no gradient blobs, 3D renders, stock art)

## Development

No build step. Serve from project root:

```bash
python -m http.server 8000
```
