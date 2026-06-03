# Kimpton Hope Wedding

A wedding website originally exported from **Canva** as a single minified HTML page. This project aims to convert that auto-generated output into clean, readable, maintainable HTML while preserving the original visual design.

## Source

The site is a Canva design export — the `index.html` (~296KB) is a single minified file containing all markup, styles, and scripts inline. Assets are referenced by hash-based filenames.

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

## Page Sections (in order)

| # | Section ID                  | Content                                    |
|---|-----------------------------|--------------------------------------------|
| 1 | — (nav)                     | Sticky top nav with hamburger menu          |
| 2 | `and-they-lived-happily-ever-after` | Hero: title, couple names, date, venue, RSVP CTA |
| 3 | `the-story-of-us`           | Narrative about Eddie & Jessie's story      |
| 4 | `where-we-will-say-i-do`    | Venue info + FAQ accordion (10 Q&A pairs)   |
| 5 | `the-wedding-party`         | Bridal party photo cards (~12 people)       |
| 6 | `just-for-fun`              | Couple's fun facts, interests, life goals   |
| 7 | `rsvp`                      | RSVP form (embedded Typeform or similar)    |

## Goal

Refactor the Canva-exported `index.html` into:

- **Semantic, readable HTML** with proper indentation and structure
- **Separated or clearly-organised CSS** (inline `<style>` blocks or external files)
- **Clean JavaScript** extracted from the minified blob
- **Identical visual appearance** — layout, typography, colours, animations, and responsive behaviour must match the original

## Incremental Build Plan

Each step produces a working file that can be opened in a browser and visually compared to the original. **Do not move to the next step until the current step looks correct.**

### Phase 1: Foundation

**Step 1 — Organise assets**
- Rename asset files with human-readable names (where possible) or document the hash-to-purpose mapping
- Verify all image, video, and font files are intact
- No HTML changes — purely organisational, zero risk

**Step 2 — Scaffold the HTML base**
- Create `index.html` with `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Add viewport meta, charset, title, favicon links
- Copy the CSS reset / base styles from the original (font-face declarations, reset rules, CSS custom properties)
- Reference the existing `js/` files via `<script>` tags (don't touch JS yet)
- **Verify:** Page loads without errors, fonts are available, base styles apply

**Step 3 — Build the Navigation bar**
- Sticky top nav: white background, bottom border, flexbox layout
- Hamburger menu icon (SVG from original) with checkbox toggle
- Menu items: "And They Lived Happily Ever After...", "The Story Of Us", "Where We Will Say 'I Do'", "The Wedding Party", "Just For Fun", "RSVP"
- Mobile: vertical dropdown; Desktop: horizontal row
- **Verify:** Nav appears at top, hamburger toggles menu, links are present

### Phase 2: Sections (build each one independently)

**Step 4 — Hero section (`and-they-lived-happily-ever-after`)**
- Full-viewport hero with background image/video
- Title: "And They Lived Happily Ever After..."
- Couple names: "Eddie & Jessie"
- Date: "29th March 2025"
- Venue: "Sandy Hill Forest"
- CTA button: "Click to rsvp"
- **Verify:** Hero fills viewport, text is styled correctly, background displays

**Step 5 — "The Story Of Us" section**
- Section heading: "The Story Of Us"
- Narrative text about Eddie & Jessie
- Any photos or decorative elements
- **Verify:** Text content matches original, layout is preserved

**Step 6 — "Where We Will Say 'I Do'" section**
- Venue date/location header
- FAQ accordion with 10 Q&A pairs:
  1. When is the RSVP deadline?
  2. Can I bring a date?
  3. Is the wedding indoors or outdoors?
  4. Is it okay to take pictures?
  5. Are children welcome?
  6. Will food be served?
  7. Dietary requirements
  8. Whom should I call with questions?
  9. What time should I arrive?
  10. No smoking on the property
- CTA button: "Click to rsvp"
- **Verify:** All Q&A pairs display, accordion interaction works, styling matches

**Step 7 — "The Wedding Party" section**
- Section heading: "The Wedding Party"
- Photo cards for each member:
  - Isaiah Paulley — Best Man
  - Eve Hope — Maid of Honor
  - Tom Cowling — Groomsman
  - Tom Ross — Forever our Third Wheel
  - Tony Brunton
  - Courtney Cowling — Bridesmaid
  - Melanie Fuller
  - Tina Wong — Teacher Tina
  - Joanne Kimpton — Mother of the Groom
  - Martin Kimpton — Father of the Groom
  - Laura Hope — Mother of the Bride
  - Phil Hope — Father of the Bride
- **Verify:** All cards display with photos, names, and roles

**Step 8 — "Just For Fun" section**
- Section heading: "Just For Fun"
- Couple's shared interests (skating, off-roading, UK trip, etc.)
- Dog preferences (sausage dog, Bernese, Labrador, etc.)
- Life goals: "Get Married ✔️"
- Social cause: "Cygnet Systems"
- Tagline: "Loving each other"
- Closing: "And So It Begins..."
- **Verify:** Content matches, layout is preserved

**Step 9 — RSVP section**
- Section heading or RSVP integration
- Embedded form or redirect link
- **Verify:** Form loads and is functional

### Phase 3: JavaScript & Polish

**Step 10 — Extract and clean up JavaScript**
- The original JS files are hash-named. Identify their purpose:
  - `781b7c27...js` — likely main bundle (Canva runtime / player)
  - `939898b4...js` — likely scroll/animation logic
  - `a7bdac05...js` — likely menu/UI interaction
- Create clean, readable JS files with comments
- Remove any unused Canva-specific code
- Implement: smooth scroll to sections, menu toggle, video playback, responsive behaviour
- **Verify:** All interactions work (menu, scrolling, videos, animations)

**Step 11 — Responsive review & polish**
- Test at mobile (< 768px), tablet (768–1024px), and desktop (> 1024px)
- Compare each section side-by-side with the original
- Fix any layout discrepancies
- Verify font sizes, spacing, colours match the original exactly

**Step 12 — Final cleanup**
- Remove any remaining Canva boilerplate or unused assets
- Validate HTML (`<!DOCTYPE>`, nesting, accessibility basics)
- Confirm no external dependencies (all fonts, assets are local)
- Final visual comparison against the original
