# VINCENT KINNEY WEBSITE
## Design System & Implementation Guide

---

## I. DESIGN SYSTEM

### Color Palette

#### Neutrals (Surfaces & Text)
```
Primary Surface (#0a0a0a)
- Darkest background
- Main page background
- Use for: Hero, footer, primary sections

Secondary Surfaces (#1a1a1a, #232323)
- Slightly lighter
- Card backgrounds
- Section alternation
- Use for: Featured projects, capabilities sections

Text Primary (#f5f5f5)
- Near-white
- Main body copy, headings
- Maximum readability on dark

Text Secondary (#a0a0a0)
- Medium gray
- Supporting copy, labels, metadata
- Taglines, descriptions

Border Color (#333)
- Subtle dividers
- Card borders
- Section separators
- Use sparingly; negative space preferred
```

#### Accent Colors
```
Accent Primary (#4d63ff)
- Electric blue-violet
- CTAs, highlights, hover states
- Primary interactive element color
- Use: Buttons, links, emphasis

Accent Secondary (#e0f2ff)
- Subtle cyan
- Focus states, secondary highlights
- Use: Form focus, hover states on cards
- Lower saturation; more restrained

Emphasis White (#ffffff)
- Pure white
- Rare, high-impact moments only
- Never overuse
```

### Typography System

#### Display Font
**Recommendation**: Inter (or similar geometric sans with premium feel)
- Weight: 700 (bold)
- Letter spacing: -0.02em
- Use for: Hero headline, major section titles

**h1 (Hero)**
- Size: 56px (desktop), 40px (tablet), 32px (mobile)
- Weight: 700
- Line-height: 1.2
- Letter-spacing: -0.02em
- Color: #f5f5f5
- Max-width: 900px

**h2 (Section Titles)**
- Size: 40px (desktop), 32px (tablet), 28px (mobile)
- Weight: 700
- Line-height: 1.25
- Letter-spacing: -0.01em
- Color: #f5f5f5
- Margin-bottom: 32px

**h3 (Subsection Titles)**
- Size: 28px (desktop), 24px (tablet), 20px (mobile)
- Weight: 600
- Line-height: 1.3
- Color: #f5f5f5

#### Body Font
**Recommendation**: Inter or System UI stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- Clean, highly readable
- Excellent on all sizes
- Professional feel

**Body Text**
- Size: 16px
- Weight: 400
- Line-height: 1.6
- Letter-spacing: 0
- Color: #a0a0a0
- Max-width: 65 characters (readable line length)

**Small Text / Captions**
- Size: 14px
- Weight: 400
- Line-height: 1.5
- Color: #a0a0a0 or #666

**Emphasis Within Body**
- Use **weight changes** (600 instead of 400)
- Use **size variation** (larger = more important)
- Avoid italic or all-caps for emphasis

### Spacing System

**Base Unit**: 8px (multiples thereof)

```
xs: 4px (rarely used)
sm: 8px (padding within components)
md: 16px (component spacing)
lg: 24px (section padding)
xl: 32px (major spacing)
2xl: 48px (hero spacing)
3xl: 64px (section margins)
```

**Application**:
- Hero section: 80px top, 60px bottom (pt-32 / pb-20 in Tailwind)
- Section padding: 80px vertical, 24px horizontal
- Card padding: 32px
- Button padding: 12px horizontal, 8px vertical

### Visual Hierarchy

#### Spacing as Hierarchy
- **Generous whitespace** = premium
- **Tight spacing** = visual grouping
- **Breathing room** between sections
- Avoid: full-width content; max-width ~1200px (6xl in Tailwind)

#### Size as Hierarchy
- h1 > h2 > h3 > body text
- Primary text is larger than secondary
- Actionable items are distinct

#### Color as Hierarchy
- #f5f5f5 = most important
- #a0a0a0 = supporting
- #4d63ff = interactive/accent

### Component Library

#### Buttons

**Primary CTA Button** (outline style)
```
Border: 1px #4d63ff
Text: #4d63ff, 14px, semi-bold
Padding: 12px 24px
Hover: bg-[#4d63ff], text-[#0a0a0a]
Focus: outline 2px #e0f2ff, outline-offset 2px
Transition: all 200ms ease
```

**Secondary Button** (filled)
```
Background: #4d63ff
Text: #0a0a0a, 14px, semi-bold
Padding: 12px 24px
Hover: bg-[#6a7bff]
Transition: all 200ms ease
```

#### Cards

**Project Card**
```
Border: 1px #333
Background: #1a1a1a
Padding: 32px
Hover: border-color #4d63ff, bg-[#232323]
Radius: 8px (subtle)
Transition: all 200ms ease
```

**Capability Card**
```
Border-left: 2px #4d63ff
Padding-left: 24px
No background
Hover: border-color #e0f2ff
```

#### Forms

**Input / Textarea**
```
Background: #1a1a1a
Border: 1px #333
Padding: 12px 16px
Color: #f5f5f5
Placeholder: #666
Focus: border-color #4d63ff, box-shadow: 0 0 0 2px rgba(77,99,255,0.1)
Transition: all 200ms ease
Border-radius: 6px
Font: 16px body
```

**Form Label**
```
Color: #a0a0a0
Font-size: 14px
Font-weight: 500
Margin-bottom: 8px
```

#### Navigation

**Header Navigation**
```
Background: #0a0a0a/95 with backdrop blur
Border-bottom: 1px #333
Links: #f5f5f5, 14px
Link Hover: color #4d63ff
Padding: 16px 24px
Position: sticky top-0, z-50
```

**Navigation Link**
```
Default: #f5f5f5
Hover: #4d63ff
Active: underline 2px #4d63ff, offset 4px
Transition: color 200ms ease
```

#### Links

**Text Link**
```
Color: #4d63ff
Hover: underline
Transition: all 200ms ease
```

**External Link Icon**
```
Use: lucide-react ExternalLink (16px)
Color: inherit from text
Margin-left: 4px
```

### Motion & Animation

**Principles**:
- **Purposeful**: Animation communicates, not distracts
- **Restrained**: Prefer fade/slide over spin/bounce
- **Consistent**: 200-300ms for most interactions
- **Performant**: Use transform/opacity only (GPU-accelerated)

**Standard Transitions**
```
// Color change
transition: color 200ms ease

// Border/background change
transition: border-color 200ms ease, background-color 200ms ease

// Scale/transform
transition: transform 200ms ease

// Full reset
transition: all 200ms ease (use sparingly)
```

**Scroll Animations**
```
// Fade in on scroll
opacity: 0 → 1 over 400ms
Use: section headers, card reveals

// Slide in on scroll
transform: translateY(20px) → translateY(0) over 400ms
Use: subtle entry, featured items

Avoid: distracting parallax, jank on scroll
```

**Hover States**
```
// Button hover
border-color: #4d63ff
background: #4d63ff / #0a0a0a

// Card hover
border-color: #4d63ff
background: slight lift (#232323 if originally #1a1a1a)

// Link hover
underline appears, color shifts

Duration: 200ms
Easing: ease (default)
```

---

## II. RESPONSIVE DESIGN

### Breakpoints (Tailwind Standard)
```
Mobile: default (320px+)
Tablet: md (768px+)
Desktop: lg (1024px+)
Large Desktop: xl (1280px+)
```

### Layout Strategy

**Mobile (320px+)**
- Single column
- Full-width padding: 24px
- Hero text: 32px
- No multi-column layouts
- Cards stack vertically
- Touch-friendly tap targets: 44px minimum

**Tablet (768px+)**
- Two-column where sensible
- Padding: 24px (can increase to 32px)
- Hero text: 40px
- Enable two-up on projects/capabilities
- Cards gain breathing room

**Desktop (1024px+)**
- Three-column capable
- Max-width: 1200px (6xl in Tailwind)
- Centered with generous margins
- Hero text: 56px
- Full visual expression
- Premium spacing throughout

### Responsive Components

**Hero Section**
```
Mobile: 32px text, 24px line-height, stacked elements
Tablet: 40px text, padding adjustment
Desktop: 56px text, full width, two-column potential
```

**Featured Work Cards**
```
Mobile: 1 column, no expanded details on click (or modal)
Tablet: 1 column with better spacing
Desktop: 1 column but full width possible (featured)
```

**Capabilities Grid**
```
Mobile: 1 column
Tablet: 2 columns
Desktop: 2 columns or 5-across if space allows
(Note: 5 items may stack to 2x3 on desktop; adjust based on content)
```

**Contact Forms**
```
Mobile: Single column form
Tablet: Single column (forms don't benefit from multi-column)
Desktop: Single column (max-width: 600px)
```

### Image Responsive Strategy
```
<img 
  src="image.png"
  srcset="image-small.png 640w, image-medium.png 1024w, image-large.png 1280w"
  sizes="(max-width: 768px) 100vw, 70vw"
/>
```

---

## III. IMPLEMENTATION GUIDE

### Tech Stack

**Recommended: Next.js + React + Tailwind**

Why:
- SSG for static pages (fast, no server needed)
- React for interactivity (expandable case studies, forms)
- Tailwind for design system consistency
- Vercel hosting (Next.js native)
- Markdown support for lab posts (future)
- Easy to extend and maintain

### Project Structure

```
vincent-kinney-portfolio/
├── app/
│   ├── page.tsx (home)
│   ├── work/
│   │   └── page.tsx
│   ├── lab/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── CapabilityCard.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── ...
├── content/
│   ├── projects.json (project data)
│   ├── capabilities.json
│   └── posts/ (markdown files for lab)
├── styles/
│   └── globals.css (Tailwind)
├── public/
│   └── images/
├── lib/
│   └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Key Files & Components

**Layout (app/layout.tsx)**
```tsx
// Global layout, Navigation, Footer
// Meta tags for SEO
// Fonts loaded here
```

**Home Page (app/page.tsx)**
```tsx
// Hero component
// Featured work section with expandable cards
// Capabilities grid
// Philosophy section
// Credibility stats
// Lab preview
// Contact CTA
```

**Navigation (components/Navigation.tsx)**
```tsx
// Sticky header
// Logo/brand
// Nav links (Work, Capabilities, Philosophy, Contact)
// Responsive (hamburger on mobile if needed, but prefer horizontal stack)
```

**Hero (components/Hero.tsx)**
```tsx
// Primary heading
// Secondary copy
// CTA button
// Responsive text scaling
```

**Project Card (components/ProjectCard.tsx)**
```tsx
// Expandable/collapsible interface
// Shows summary on collapse
// Shows full case study on expand
// Tags, emoji icon
// "What It Signals" section
```

**Contact Form (components/ContactForm.tsx)**
```tsx
// Intent-based tabs (Partnership, Product, General)
// Form fields
// Validation & submission
// Success/error states
```

### Tailwind Configuration

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'dark-surface': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'accent': '#4d63ff',
        'accent-light': '#e0f2ff',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a0a0a0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Use default Tailwind + custom multiples as needed
      },
      maxWidth: {
        '6xl': '72rem', // Homepage max-width
      },
    },
  },
}
```

### CSS Custom Properties (Optional)

```css
:root {
  --color-surface: #0a0a0a;
  --color-surface-secondary: #1a1a1a;
  --color-accent: #4d63ff;
  --color-text: #f5f5f5;
  --color-text-secondary: #a0a0a0;
  --spacing-unit: 8px;
  --transition-fast: 200ms ease;
}

body {
  background-color: var(--color-surface);
  color: var(--color-text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
}
```

### SEO Implementation

**Meta Tags (Next.js Metadata API)**
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Vincent Kinney | AI-Native Product Architect & Founder',
  description: 'I build AI-native software systems and experiences...',
  openGraph: {
    title: '...',
    description: '...',
    image: '/og-image.png',
  },
}
```

**Page-Specific Metadata**
```tsx
// Each page exports its own metadata
export const metadata = { ... }
```

**Structured Data (JSON-LD)**
```tsx
// Add in layout or specific pages
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vincent Kinney",
  "jobTitle": "Product Architect & Founder",
  ...
}
</script>
```

### Performance Optimization

**Image Optimization**
```tsx
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/projects/shipwright.png"
  alt="Shipwright product interface"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

**Font Optimization**
```tsx
// Use next/font to load Inter
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Use fallback font while loading
})
```

**Code Splitting**
```tsx
// Lazy load interactive components
const ProjectCard = dynamic(() => import('./ProjectCard'), {
  loading: () => <p>Loading...</p>,
})
```

**Lighthouse Targets**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Build & Deployment

**Build Process**
```bash
npm run build  # Generates optimized static/hybrid site
npm run start  # Runs production server
```

**Deployment (Vercel Recommended)**
```bash
# Connect GitHub repo to Vercel
# Auto-deploys on push to main
# Generates preview URLs for branches
```

**Alternative Hosting**
- Netlify (also integrates with Next.js well)
- AWS Amplify
- Self-hosted (less recommended for this size)

---

## IV. COMPONENT SPECIFICATIONS

### Expandable Project Card

**State**: Collapsed (default)
```
[Icon] Title
Tagline
Description text...
[Tags] [Tags]

[Expand icon on right] ▼
```

**State**: Expanded
```
[Full content above]
[Border separator]

[Case study content - formatted with headings, lists, paragraphs]

[Border separator]
What This Signals:
[Signal text]
```

**Interaction**:
- Click card body to toggle
- Smooth expand/collapse animation (300ms)
- Only one card expanded at a time (optional)

### Multi-Intent Contact Form

**Initial State** (before selection)
```
[Button] Partnership Interest
[Button] Product Feedback
[Button] General
```

**After Selection** (e.g., Partnership)
```
[Collapse/Close button]

[Form]
  Email input
  Message textarea
  Send button
```

**Success State**
```
✓ Message sent!
We'll be in touch within 48 hours.
[New form / back button]
```

---

## V. ACCESSIBILITY (WCAG 2.1 AA)

### Color Contrast
- Text on background: 7:1 ratio minimum
- #f5f5f5 on #0a0a0a: ✓ passes (21:1)
- #a0a0a0 on #0a0a0a: ✓ passes (7:1)
- #4d63ff on #0a0a0a: ✓ passes (8:1)

### Keyboard Navigation
- All interactive elements: Tab-accessible
- Focus state visible (outline or ring)
- No keyboard traps
- Logical tab order (top to bottom, left to right)

### Semantic HTML
```html
<header>
<nav>
<main>
  <section>
    <h1>, <h2>, <h3> hierarchy
    <article> for case studies
</main>
<footer>
```

### Images & Alt Text
```html
<!-- Screenshots -->
<img alt="Shipwright interface showing project analysis screen" src="..." />

<!-- Decorative icons -->
<img alt="" src="..." /> <!-- empty alt -->
```

### Form Labels
```html
<label for="email">Your email</label>
<input id="email" type="email" />
```

### ARIA Attributes (where needed)
```html
<!-- Expandable sections -->
<button aria-expanded="false" aria-controls="case-study-1">
  View case study
</button>
<div id="case-study-1" hidden>...</div>
```

---

## VI. BROWSER & DEVICE SUPPORT

### Target Browsers
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile Safari (iOS 14+)
- Chrome Mobile

### Not Supported
- IE 11 (OK to not support)

### Testing
- Use BrowserStack or similar for cross-browser testing
- Test on real mobile devices (iPhone, Android)
- Use DevTools device emulation for quick checks

---

## VII. HANDOFF TO DEVELOPER

### Critical Files for Developer
1. **Strategy Document** (VincentKinney_Website_Strategy.md)
2. **Copy Document** (Website_Full_Copy.md)
3. **Design System** (this file)
4. **Component Spec** (above)
5. **Figma/Design** (optional, but helpful)

### Key Decisions Already Made
- Dark theme (no light mode required initially)
- React/Next.js stack
- Tailwind CSS for styling
- Expandable project cards (no separate pages required)
- Intent-based contact forms
- Max-width 1200px for content

### Decisions Still Open
- Actual project images/screenshots (placeholder emoji currently used)
- Newsletter integration (optional future feature)
- Lab post system (can start simple with static JSON)
- Blog/CMS integration (future expansion)
- Analytics tracking (Vercel Analytics or GA4)

### Quality Checklist for Developer
- [ ] Mobile responsive (tested on multiple devices)
- [ ] Lighthouse score 95+ (all categories)
- [ ] Forms functional and styled
- [ ] All links working (internal, external, email)
- [ ] Images optimized and lazy-loaded
- [ ] Fonts loaded with swap display
- [ ] No console errors
- [ ] Keyboard navigation tested
- [ ] Focus states visible
- [ ] Meta tags all set
- [ ] Social sharing metadata (OG tags) working
- [ ] Performance budget met
- [ ] Accessibility audit passed (WAVE, axe)
- [ ] Deployed and live

---

## VIII. FUTURE EXPANSION

### Lab Section (Phase 2)
- Markdown-based posts
- Categories/tags
- Search functionality
- Optional: CMS integration (Contentful, Sanity)

### Newsletter (Phase 2)
- Email capture on /lab page
- Automated email on new posts (optional)
- Resend or ConvertKit integration

### Analytics (Phase 2)
- Vercel Analytics or Google Analytics
- Track engagement by section
- Monitor form submissions
- Understand visitor journeys

### Social Features (Future)
- Twitter embed for updates
- GitHub activity feed (if relevant)
- YouTube videos (technical deep-dives)

---

## IX. MAINTENANCE SCHEDULE

### Weekly
- Check form submissions
- Monitor error logs

### Monthly
- Check links (internal & external)
- Review analytics
- Update projects if new launches

### Quarterly
- Deep analytics review
- Update copy if strategy shifts
- Add lab posts
- Test all features end-to-end

### Annually
- Full accessibility audit
- Update technology stack if needed
- Refresh design if it feels stale
- Review and update strategy

---

END OF DESIGN SYSTEM DOCUMENT

