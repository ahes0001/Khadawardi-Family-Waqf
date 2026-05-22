# وقف الخضاوردي | Khadawardi Waqf

A modern bilingual (Arabic/English) informational website prototype for a multi-generational family waqf (family endowment) based in the Hijaz region of Saudi Arabia.

## Overview

This is a **first-stage prototype** focused on:
- Clean, reusable component architecture
- Hijazi Modern visual design
- Full RTL/LTR bilingual support
- Family-view gated content simulation
- Interactive family tree visualization

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#1F4A47` | Brand color, headings, primary buttons |
| Primary Light | `#2A6360` | Hover states |
| Primary Dark | `#163634` | Pressed states |
| Background | `#FAF8F3` | Page background |
| Surface | `#FFFFFF` | Cards, elevated surfaces |
| Text Primary | `#1A1A1A` | Body text |
| Text Secondary | `#6B6B68` | Subtitles, captions |
| Accent Sand | `#D4B896` | Decorative elements, secondary accents |
| Accent Terracotta | `#A85A3E` | Family-only content indicators |
| Border | `#E8E3D7` | Dividers, card borders |

### Typography

**Arabic:**
- Headings: Reem Kufi (Google Fonts)
- Body: Tajawal (Google Fonts)

**English:**
- Headings: Cormorant Garamond (Google Fonts)
- Body: Inter (Google Fonts)

### Geometric Patterns

Eight-pointed star (نجمة ثمانية) motifs used for:
- Section dividers (`StarDivider`)
- Loading states (`LoadingSpinner`)
- Decorative card corners (`CornerStar`)
- Background tessellation patterns (`Tessellation`)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [lang]/            # i18n routing (ar/en)
│   │   ├── page.tsx       # Home page
│   │   ├── about/
│   │   ├── family-tree/
│   │   ├── contact/
│   │   └── ...
│   ├── layout.tsx         # Root layout with providers
│   └── globals.css        # Global styles & Tailwind config
├── components/
│   ├── patterns/          # Geometric SVG components
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page section components
│   └── FamilyTree.tsx     # Interactive family tree
├── lib/
│   ├── context/           # React Context providers
│   │   ├── LanguageContext.tsx
│   │   └── FamilyViewContext.tsx
│   ├── data/              # Static data
│   │   └── familyTree.ts  # ~15 dummy family members
│   └── translations/
│       ├── ar.json        # Arabic translations
│       └── en.json        # English translations (placeholder)
└── public/                # Static assets
```

## Key Features

### 1. Bilingual Support (RTL/LTR)

- Arabic as primary language (default)
- English secondary
- Full RTL layout support using Tailwind logical properties
- Language toggle in navbar
- Preference persisted in localStorage

### 2. Family View Toggle

Since this is a prototype without real authentication:

- "View as family member" toggle in navbar
- Uses React Context for state management
- Persists preference in localStorage
- Gated content visually distinguished with terracotta left border

**Gated content patterns:**
```tsx
const { isFamilyView } = useFamilyView();

// In JSX:
{isFamilyView ? (
  <div className="gated-content">Family-only content</div>
) : (
  <div>Public placeholder</div>
)}
```

### 3. Family Tree Component

- Custom recursive tree visualization
- ~15 dummy members across 3 generations
- Search functionality (family view only)
- Click node → modal with member details
- Public view: shows only name and generation
- Family view: shows full details including contact

### 4. Geometric Pattern Components

Reusable eight-pointed star components:

```tsx
import { EightPointedStar, StarDivider, CornerStar } from "@/components/patterns";

// Single star
<EightPointedStar size={64} color="#1F4A47" />

// Divider with line and star
<StarDivider />

// Decorative corner
<CornerStar position="top-right" size={48} />
```

## Technical Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Fonts:** Google Fonts (next/font)
- **Icons:** Heroicons (inline SVG)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
cd khadawardi_waqf
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This generates a static export in `dist/` folder.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Build settings are automatic

### Static Hosting

The project is configured for static export (`output: 'export'`). Upload the `dist/` folder to any static host.

## Prototype vs Production

### What's Prototype-Only

| Feature | Prototype | Production |
|---------|-----------|------------|
| Authentication | Toggle simulation | Real auth (Auth0, etc.) |
| Family Tree Data | 15 dummy members | Full family database |
| Contact Form | Client-side only | Backend API integration |
| Search | Client-side only | Server-side search |
| Content | Placeholder | CMS integration |

### Production Recommendations

1. **Authentication:** Implement proper auth (Auth0, Firebase Auth, or custom)
2. **Database:** PostgreSQL with Prisma ORM for family data
3. **CMS:** Sanity, Contentful, or Strapi for content management
4. **Search:** Algolia or PostgreSQL full-text search
5. **Forms:** Formspree, Getform, or custom API
6. **Image CDN:** Cloudinary or Vercel Blob for founder photos

## Design Decisions

### Why Custom Tree Component vs react-d3-tree

Initially planned to use `react-d3-tree`, but created a custom component because:
1. Simpler RTL handling
2. Better control over styling for the Hijazi aesthetic
3. Smaller bundle size
4. Easier static export compatibility

### Tailwind v4 with @theme

Using Tailwind CSS v4 with the new `@theme` directive for:
- CSS-native theme configuration
- Better performance
- Future-proofing

## Contributing

This is a private family project. For development:

1. Follow the existing component patterns
2. Use the color palette consistently
3. Ensure RTL compatibility for all new components
4. Add Arabic translations for all new text
5. Test both public and family views

## License

Private - All rights reserved.

---

**Built with care for the Khadawardi family**