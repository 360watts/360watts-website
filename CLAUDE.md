# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

360watts is a React-based solar energy and smart home automation marketing website built with Vite, TypeScript, and Tailwind CSS. The site features an interactive solar calculator, contact forms, and multi-page routing for solutions, about, FAQ, and contact pages.

**Tech Stack:**
- React 18 with TypeScript
- Vite (build tool)
- React Router DOM (client-side routing)
- Tailwind CSS (styling)
- Shadcn UI components (Button, Card, Input, Label, Select)
- Framer Motion (animations)
- React Leaflet (maps on Contact page)
- Lucide React (icons)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173/)
npm run dev

# Build for production (outputs to dist/)
npm run build
```

**Note:** There are no test scripts, linting scripts, or type-checking scripts configured in this project.

## Architecture & Code Organization

### Directory Structure

```
project/
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn UI components (button, card, input, label, select)
│   │   ├── Navigation.tsx # Fixed navigation bar with smooth scroll
│   │   └── ScrollToTop.tsx # Route change scroll handler
│   ├── screens/
│   │   ├── WebsiteHomepage/
│   │   │   ├── WebsiteHomepage.tsx  # Main homepage (large file, ~300+ lines)
│   │   │   └── components/          # Homepage sections
│   │   │       ├── HeroSection.tsx
│   │   │       ├── BenefitsSection.tsx
│   │   │       ├── UnifiedSolutionSection.tsx
│   │   │       ├── AppSection.tsx
│   │   │       └── HowItWorksSection.tsx
│   │   ├── Solutions/    # Solar & Smart Home solutions page
│   │   ├── About/        # About Us with team section
│   │   ├── Contact/      # Contact form with map
│   │   └── FAQ/          # Frequently Asked Questions
│   ├── lib/
│   │   ├── utils.ts         # Tailwind class merging utility
│   │   └── imageRegistry.ts # Central image preloading registry
│   ├── utils/
│   │   └── solar-physics.ts # Solar calculator physics engine
│   └── index.tsx            # App entry point with routing
├── public/               # Static assets (images, videos, icons)
├── tailwind.config.js    # Tailwind configuration with custom animations
└── vite.config.ts        # Vite build configuration
```

### Key Architectural Patterns

**1. Route-Based Code Splitting**
- Each page is a separate screen component in `src/screens/`
- Homepage sections are further broken down into sub-components
- All routes defined in `src/index.tsx` using React Router

**2. Centralized Image Management**
- All images registered in `src/lib/imageRegistry.ts`
- Critical images preloaded on app start
- Remaining images lazy-loaded after 1.2s delay
- Images stored in `/public` and referenced with absolute paths (e.g., `/image7.png`)

**3. Navigation System**
- `Navigation.tsx` component handles both routing and in-page smooth scrolling
- On homepage: scrolls to section IDs
- On other pages: navigates to homepage with hash fragment
- Responsive mobile menu with hamburger toggle

**4. Solar Calculator Physics Engine**
- Located in `src/utils/solar-physics.ts`
- Complex bill decomposition algorithm based on TANGEDCO tariff slabs (India)
- Converts bill amount → energy charge → units → system size
- Calculates: panels, area, cost, ROI, NPV over 25-year lifespan
- **Critical constants:**
  - `AREA_PER_KW: 60` sq.ft
  - `PANEL_WATTAGE: 600` Wp
  - `COST_PER_KW: 65000` INR
  - `SUN_HOURS_ANNUAL_AVG: 5.5` (Peak Sun Hours)
  - 8 tariff slabs with progressive rates (first 100 units free)

**5. Form Handling Pattern**
- Contact forms use local state with `useState`
- Form validation via HTML5 attributes (`required`, `type="email"`)
- No backend integration - forms log to console and show alert
- Placeholder for future API integration in comments

## Common Development Patterns

### Adding New Images
1. Place image in `/public` folder
2. Register in `src/lib/imageRegistry.ts` under `APP_IMAGES`
3. Add to critical or remaining preload array if needed
4. Reference as `APP_IMAGES.yourImageKey` in components

### Creating New Pages
1. Create folder in `src/screens/YourPage/`
2. Add `YourPage.tsx` and `index.ts` export
3. Register route in `src/index.tsx` Routes
4. Add navigation item in `Navigation.tsx` navItems array

### Styling Guidelines
- Use Tailwind utility classes exclusively
- Custom fonts: `font-['Poppins']`, `font-['Urbanist']`, `font-['Biryani']`
- Brand colors:
  - Primary Green: `#00a63e` / `from-[#00a63e] to-[#017c54]`
  - Orange: `#F07522`
  - Navy: `#254D65`
- Custom animations available: `animate-fade-in`, `animate-fade-in-up`, `animate-float`, `animate-glow`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### Solar Calculator Integration
- Import: `import { calculateSolarRequirementsFromBill, BillInputs } from '@/utils/solar-physics'`
- Pass bill data with `totalBillAmount` (INR) or `estimatedUnits` (kWh/month)
- Returns `SolarSystemSpecs` with 9 calculated fields
- Billing cycle hardcoded to 'Bi-Monthly' for TANGEDCO context

## Important Implementation Notes

### Navigation Behavior
The `Navigation.tsx` component uses a dual-mode navigation system:
- When on homepage (`/`): uses `scrollIntoView()` to scroll to section IDs
- When on other pages: uses `navigate()` to go to `/#section-id`
- Section IDs must match across pages: `hero-section`, `solutions-section`, `about-section`, `faq-section`, `contact-section`, `solar-calculator`

### Image Loading Strategy
Images are preloaded in two phases:
1. Critical images (logo, hero images) loaded immediately on app start
2. Remaining images loaded after 1.2s delay
This prevents layout shift and improves perceived performance.

### TypeScript Configuration
- Project uses TypeScript with dual configs:
  - `tsconfig.app.json` for app code
  - `tsconfig.node.json` for Vite config
- Path alias configured in `package.json`: `"@/*": "./src/components/ui/$1"`
- However, imports generally use relative paths, not the alias

### Build Output
- Development: served on `http://localhost:5173/` via Vite dev server
- Production: builds to `dist/` folder
- Base path set to `./` for relative asset loading (supports subdirectory deployment)
- `.htaccess` file present for Hostinger deployment (see `HOSTINGER_DEPLOYMENT.md`)

## Contact Information & Branding

**Company:** 360watts
**Location:** Coimbatore, Tamil Nadu, India
**Contact:**
- Email: `hello@360watts.com`
- Phone: `+91-98765-43210`

**Logo:** `/final-logo-png-4x-2.png` (header), `/logo_with_font.png` (footer)
**Brand Font:** Biryani (extrabold 800 weight) for logo text

## Known Limitations

1. **No backend integration** - Forms only log to console
2. **No testing framework** - No unit/integration/e2e tests configured
3. **No linting** - No ESLint or Prettier setup
4. **Large homepage file** - `WebsiteHomepage.tsx` is very large (consider further refactoring)
5. **Hardcoded content** - All text content embedded in components (no i18n or CMS)
6. **India-specific** - Solar calculator uses TANGEDCO tariffs (Tamil Nadu, India)

## Additional Documentation

Refer to these files for more details:
- `COMPONENT_DOCS.md` - Detailed component API documentation
- `IMPROVEMENTS.md` - Project history and refactoring notes
- `HOSTINGER_DEPLOYMENT.md` - Deployment instructions for Hostinger
- `README.md` - Basic setup instructions
