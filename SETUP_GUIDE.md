# Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

```bash
# Navigate to the project
cd rounded-academy

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** in your browser.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
rounded-academy/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Public pages (landing, login, signup)
│   ├── (dashboard)/        # Student dashboard pages
│   └── admin/              # Admin dashboard
├── components/
│   ├── ui/                 # shadcn components
│   ├── layout/             # Sidebar, Nav, Header, Shell
│   ├── shared/             # PremiumCard, StatCard, GoldButton
│   ├── course/             # CourseCard
│   └── dashboard/          # Dashboard widgets
├── lib/                    # Utilities (cn, etc.)
├── constants/              # Placeholder data, nav items
├── types/                  # TypeScript type definitions
├── public/
│   ├── branding/           # Logo files
│   └── images/             # Image assets
└── project-docs/           # Roadmaps, design decisions
```

## Brand Colors

To update brand colors, edit the CSS variables in `app/globals.css`:

```css
--brand-dark: #1F0022;
--brand-gold: #FFDE4E;
--brand-cream: #FFFDF9;
```

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

## Notes

- This is Phase 1 — UI only. No backend.
- All data is placeholder content from `constants/index.ts`
- To add real data later, swap placeholder imports with database queries
