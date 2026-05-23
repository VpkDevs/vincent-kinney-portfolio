# Vincent Kinney — Personal Portfolio Website

A premium founder/operator portfolio built with Next.js, React, and Tailwind CSS. Showcasing AI-native software systems, narrative design, and product architecture.

## Features

- 🎨 **Premium Dark Theme** — Carefully crafted color system and typography
- ⚡ **Performance Optimized** — Built with Next.js for fast, efficient rendering
- 📱 **Fully Responsive** — Mobile-first design that works perfectly on all devices
- ♿ **Accessible** — WCAG 2.1 AA compliant
- 🎯 **Conversion Focused** — Intent-based contact forms and strategic CTAs
- 🔍 **SEO Ready** — Semantic HTML, meta tags, structured data

## Tech Stack

- **Framework**: Next.js 14+
- **Frontend**: React 18+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd vincent-kinney-portfolio

# Install dependencies
npm install

# Create .env.local if needed
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   └── page.tsx          # Homepage
├── components/
│   ├── Navigation.tsx     # Sticky navigation
│   ├── ProjectCard.tsx    # Expandable project cards
│   ├── CapabilityCard.tsx # Capability display
│   ├── ContactForm.tsx    # Intent-based forms
│   └── Footer.tsx         # Site footer
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── README.md
```

## Key Sections

### Featured Work
- **Shipwright** — AI system automating the full software lifecycle
- **Narrative Engine** — AI director for interactive narratives with latency masking
- **Shadowlight** — Dark fantasy RPG exploring real human struggles

### Capabilities
- Product Architecture
- AI & Prompt Systems
- Narrative & Experience Design
- Full-Stack Execution
- Rapid Iteration

### Contact
Three intent-based contact forms:
- Partnership or Co-Founder Interest
- Product Feedback or User Inquiry
- General Inquiry

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  'surface': '#0a0a0a',      // Primary background
  'accent': '#4d63ff',       // Primary accent (blue-violet)
  'text': '#f5f5f5',         // Primary text
  // ... more colors
}
```

### Typography
Fonts are configured in `tailwind.config.js` and `app/globals.css`. The site uses system fonts by default for best performance.

### Content
Edit `app/page.tsx` to update:
- Project information
- Capabilities
- Philosophy principles
- Credibility stats

## Performance

### Lighthouse Targets
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimization Tips
1. Use Next.js Image component for images
2. Implement lazy loading for below-fold content
3. Minimize CSS/JS bundle
4. Use dynamic imports for heavy components

## SEO

The site includes:
- Semantic HTML structure
- Meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card support
- Mobile viewport configuration

To improve SEO:
1. Add your domain to `metadata` in `app/layout.tsx`
2. Create `/public/sitemap.xml`
3. Add `/public/robots.txt`
4. Submit to Google Search Console

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for auto-deployments.

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Self-hosted servers

```bash
npm run build  # Creates .next/standalone
```

## Forms & Backend

Currently, forms are set up for demonstration. To enable real form submissions:

1. **Email Integration** (using Resend, SendGrid, or similar)
   ```tsx
   // In app/api/contact/route.ts
   import { EmailService } from '@/lib/email'
   
   export async function POST(request: Request) {
     // Handle form submission
   }
   ```

2. **Database** (optional, using Supabase, Firebase, or similar)
   - Store contact submissions
   - Track form analytics

## Analytics

To add analytics:

```tsx
// Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Future Enhancements

- [ ] Lab section with blog posts
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Dark/light mode toggle
- [ ] Video demos
- [ ] Advanced analytics

## License

All content and design are proprietary to Vincent Kinney.

## Contact

- Email: vincekinney1991@gmail.com
- GitHub: [github.com/vincentkinney](https://github.com)
- Twitter: [@vincentkinney](https://twitter.com)

---

Built with taste and velocity. 🚀
