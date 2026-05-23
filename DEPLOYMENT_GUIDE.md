# Deployment Guide — Vincent Kinney Portfolio

Complete step-by-step guide to deploy your website to production.

## Quick Start (Vercel — Recommended)

Vercel is the easiest way to deploy Next.js applications. It's where Next.js was created, so it's optimized perfectly.

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Vincent Kinney portfolio site"

# Create a GitHub repository at github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/vincent-kinney-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy"

That's it! Your site is live.

### Step 3: Custom Domain

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `vincentkinney.dev`)
3. Follow the DNS instructions for your registrar
4. Vercel provides free SSL certificate automatically

## Alternative Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

### Self-Hosted (Node.js)

```bash
# Build
npm run build

# Start server
npm run start
```

Then deploy to your server:
- DigitalOcean
- Linode
- AWS EC2
- Heroku
- Railway

## Environment Variables

Create `.env.local` for development, `.env.production` for production:

```bash
# Email (if using Resend or SendGrid)
NEXT_PUBLIC_EMAIL_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Domain
NEXT_PUBLIC_DOMAIN=vincentkinney.dev
```

## Pre-Deployment Checklist

- [ ] Update contact form email address
- [ ] Add your GitHub, Twitter, LinkedIn links
- [ ] Replace project emoji with real images (if desired)
- [ ] Test all links and forms locally
- [ ] Run Lighthouse audit (`npm run build` then test with DevTools)
- [ ] Update metadata in `app/layout.tsx`
- [ ] Test on mobile devices
- [ ] Set up analytics tracking
- [ ] Configure DNS for custom domain

## Post-Deployment

### 1. Test the Site

```bash
# Visit your deployed URL
# Test all sections:
# - Navigation links
# - Expandable project cards
# - Contact forms
# - External links
# - Mobile responsiveness
```

### 2. Monitor Performance

```bash
# Run Lighthouse audit in DevTools (F12 → Lighthouse)
# Check Core Web Vitals in Chrome

# Targets:
# - Performance: 95+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### 3. Set Up Analytics

**Google Analytics:**
```tsx
// Add to app/layout.tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</script>
```

**Vercel Analytics (easier):**
```bash
npm install @vercel/analytics
```

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

### 4. Set Up Form Handling

Forms currently only show success/error states. To actually send emails:

**Option A: Vercel Functions + Resend**

```bash
npm install resend
```

Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const data = await request.json()

  try {
    await resend.emails.send({
      from: 'contact@vincentkinney.dev',
      to: 'vincekinney1991@gmail.com',
      subject: `New ${data.type} inquiry from ${data.email}`,
      html: `<p>${data.message}</p>`,
    })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error }, { status: 400 })
  }
}
```

**Option B: Formspree (No Backend)**

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update form action:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 5. Search Engine Submission

```bash
# Create sitemap
# Create robots.txt in /public

# Submit to Google Search Console
# https://search.google.com/search-console

# Submit to Bing Webmaster Tools
# https://www.bing.com/webmasters
```

## Troubleshooting

### Build fails with TypeScript errors

```bash
# Check TypeScript
npx tsc --noEmit

# Fix any errors in .tsx files
```

### Lighthouse performance low

```bash
# Check for large images
# Use Next.js Image component
# Enable image optimization in next.config.js

# Minify CSS/JS
# Remove unused dependencies
# Check for memory leaks in components
```

### Form submissions not working

```bash
# Check .env.local variables
# Test API endpoint manually
# Check email service credentials
# Verify CORS settings if needed
```

### DNS not propagating

- Give it 24-48 hours
- Flush DNS cache
- Check DNS settings with `nslookup`
- Contact your domain registrar

## Performance Optimization

### Images
```tsx
import Image from 'next/image'

<Image
  src="/projects/shipwright.png"
  alt="Shipwright interface"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

### Code Splitting
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
})
```

### Font Optimization
```tsx
// in app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

## Maintenance

### Weekly
- Monitor contact form submissions
- Check analytics

### Monthly
- Review Lighthouse scores
- Check for broken links
- Update projects if needed

### Quarterly
- Review analytics
- Update copy/content
- Security updates (`npm update`)

### Annually
- Full audit
- Design refresh if needed
- Technology stack review

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

**You're live!** 🚀 Your site is now online. Monitor performance and iterate based on user feedback.
