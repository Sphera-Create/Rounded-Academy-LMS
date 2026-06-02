# Design Decisions

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Dark Purple | `#1F0022` | Primary brand color, sidebar backgrounds, headings |
| Gold | `#FFDE4E` | Accent color, CTAs, active states, highlights |
| Cream | `#FFFDF9` | Page backgrounds, cards, light surfaces |

## Typography

- **Headings:** Poppins (600-700 weight) ← Will switch to Qurova when available
- **Body:** Poppins (400 weight)
- **Fallback:** system-ui, sans-serif

## Design Principles

1. **Mobile-first** — All layouts designed for mobile first, then enhanced for desktop
2. **Premium feel** — Generous whitespace, soft shadows, rounded corners (12-16px)
3. **Feminine luxury** — Not school-like. Think high-end brand, not educational portal
4. **Consistent spacing** — 8px grid system, multiples of 8 for all spacing
5. **Gold accents** — Used sparingly to draw attention to key actions and active states

## Layout

- **Desktop:** Fixed sidebar (280px, dark purple) + main content area
- **Mobile:** Bottom navigation tab bar + slide-out drawer menu
- **Header:** Top bar with greeting, notifications, user menu

## Component Architecture

- `components/ui/` — shadcn base components (button, card, etc.)
- `components/layout/` — Layout system (sidebar, nav, shell)
- `components/shared/` — Reusable business components
- `components/course/` — Course-specific components
- `components/dashboard/` — Dashboard-specific widgets

## What Was Inspired by the Reference

The reference site (academy.tomidewilliams.com) informed:
- Clean card-based layouts
- Simple section headers
- Program card pattern
- Centered hero with clear CTA

But we pushed further with:
- Dark purple + gold luxury palette
- Rounded corners and soft shadows
- Gradient accents and feminine styling
- More generous spacing
