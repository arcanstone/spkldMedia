# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 real estate video showcase website for SpkldMedia, built with TypeScript and Tailwind CSS. The site features video portfolio displays, client contact forms, and responsive design for property videography services.

## Development Commands

Working directory: `real-estate-video-site/`

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build production**: `npm run build`  
- **Start production**: `npm start`
- **Lint code**: `npm run lint`
- **Install dependencies**: `npm install`

## Architecture

### Tech Stack
- Next.js 15 with App Router
- TypeScript (strict mode enabled)
- Tailwind CSS v4 for styling
- React 19 with client components
- Lucide React for icons

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Home page with component composition
│   └── portfolio/      # Portfolio sub-page
├── components/         # Reusable UI components
│   ├── Navbar*.tsx     # Multiple navbar iterations
│   ├── Hero.tsx        # Landing hero section
│   ├── FeaturedVideo.tsx # Video player component
│   ├── Portfolio*.tsx  # Portfolio grid displays
│   ├── VideoCard.tsx   # Individual video cards
│   ├── ContactForm.tsx # Contact/quote form
│   └── Footer.tsx      # Site footer
└── types/
    └── video.ts        # Video data type definitions
```

### Key Components Architecture

The main page (`src/app/page.tsx`) follows a component composition pattern:
1. **Navbar3** - Current navigation with mobile menu
2. **Hero** - Landing section with CTA buttons
3. **FeaturedVideo** - Showcases primary video content
4. **Portfolio** - Grid of additional videos
5. **Portfolio2** - Secondary portfolio section
6. **ContactForm** - Lead generation form
7. **Footer** - Site footer with links

### Data Management
- Mock video data is stored in `MOCK_VIDEOS` array in `page.tsx`
- Video type definition in `src/types/video.ts` includes id, title, src, thumbnail, and featured flag
- Maintenance mode controlled via `NEXT_PUBLIC_MAINTENANCE_MODE` environment variable

### Styling
- Uses Tailwind CSS v4 with custom design system
- Geist fonts (Sans and Mono) configured in layout
- Responsive design with mobile-first approach
- Custom color palette using stone/amber theme in Navbar3

### Navigation
- Multiple navbar components exist (Navbar, Navbar2, Navbar3) - currently using Navbar3
- Navigation includes Portfolio, Quotes, and Login pages (not yet implemented)
- Mobile-responsive hamburger menu with overlay

### Development Notes
- TypeScript path mapping configured with `@/*` pointing to `src/*`
- ESLint configured with Next.js recommended rules
- Component naming follows PascalCase convention
- Uses "use client" directive for interactive components