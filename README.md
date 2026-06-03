# Kimpton Hope Wedding

A wedding website originally exported from **Canva** as a single minified HTML page. This project aims to convert that auto-generated output into clean, readable, maintainable HTML while preserving the original visual design.

## Source

The site is a Canva design export — the `index.html` is a single minified file containing all markup, styles, and scripts inline. Assets are referenced by hash-based filenames.

## Project Structure

```
kimptonhope.com/
├── index.html          # Canva-exported HTML (minified, self-contained)
├── images/             # 23 JPG images + 1 SVG
├── fonts/              # 6 WOFF2 font files
├── videos/             # 11 MP4 video files
├── js/                 # 3 JavaScript files
└── *.png               # Favicon assets (16x16, 32x32, 180x180)
```

## Goal

Refactor the Canva-exported `index.html` into:

- **Semantic, readable HTML** with proper indentation and structure
- **Separated or clearly-organised CSS** (inline `<style>` blocks or external files)
- **Clean JavaScript** extracted from the minified blob
- **Identical visual appearance** — layout, typography, colours, animations, and responsive behaviour must match the original

## Plan

1. Analyse the original Canva HTML to understand structure (sections, elements, styles)
2. Rewrite the HTML semantically, extracting inline styles into organised CSS
3. Separate and clean up JavaScript
4. Optimise and organise assets (images, fonts, videos)
5. Verify the output matches the original design across viewports
