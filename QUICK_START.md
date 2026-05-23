# Quick Start Guide

Get your portfolio site up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed ([download](https://nodejs.org))
- A code editor (VS Code recommended)
- Git (for version control)

## Installation (5 minutes)

### 1. Install Dependencies

```bash
cd vincent-kinney-portfolio
npm install
```

This installs Next.js, React, Tailwind CSS, and all dependencies.

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your site is live locally!

### 3. Edit & Test

All code changes auto-reload. Try editing:
- `app/page.tsx` — Homepage content
- `app/globals.css` — Styles
- `components/` — Individual sections

## Customization (15 minutes)

### Update Your Info

**Edit `app/page.tsx`:**

```tsx
// Line 20-30: Update hero text
"I build AI-native software systems and experiences."

// Line 55+: Update projects
// Line 150+: Update capabilities
// Line 170+: Update philosophy
```

### Update Contact Email

**Edit `components/Footer.tsx`:**
```tsx
<a href="mailto:YOUR_EMAIL@example.com">
```

### Update Links

**Edit `components/Navigation.tsx` & `components/Footer.tsx`:**
```tsx
// GitHub, Twitter, LinkedIn links
<a href="https://github.com/YOUR_USERNAME">
<a href="https://twitter.com/YOUR_HANDLE">
```

### Add Project Images

Replace emoji with real images:

```tsx
// In app/page.tsx, change from:
emoji: '🚀',

// To:
image: '/images/shipwright.png',
```

Then add images to `public/images/` folder.

## Build for Production

```bash
npm run build
npm run start
```

Site is optimized and ready to deploy!

## Deploy (Choose One)

### Option 1: Vercel (Easiest)

```bash
npm i -g vercel
vercel
# Follow prompts, your site is live in 2 minutes
```

### Option 2: Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

### Option 3: GitHub Pages

```bash
git add .
git commit -m "Deploy site"
git push origin main
# Enable GitHub Pages in repo settings
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage (all content) |
| `app/globals.css` | Global styles |
| `tailwind.config.js` | Colors, typography, theme |
| `components/` | Reusable components |
| `package.json` | Dependencies |

## Common Customizations

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  'surface': '#0a0a0a',      // Background
  'accent': '#4d63ff',       // Blue accent
  'text': '#f5f5f5',         // Text color
}
```

### Change Fonts

Edit `app/globals.css`:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

### Update Projects

Edit `app/page.tsx`, search for `const projects = [`:

```tsx
{
  id: 'your-project',
  name: 'Your Project',
  emoji: '🎯',
  tagline: 'What it does in one sentence',
  description: 'Longer description...',
  // ... more fields
}
```

### Change Hero Text

Edit `app/page.tsx`, line 200-210:

```tsx
<h1>Your headline here</h1>
<p>Your subtitle here</p>
```

## Testing

### Run Lighthouse Audit

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Aim for 95+ scores

### Test Mobile

1. DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Test on iPhone and Android sizes
3. Check all buttons and forms

### Test Forms

1. Fill out contact form
2. Should show success message
3. (To send real emails, see DEPLOYMENT_GUIDE.md)

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
# Use a different port
```

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
```bash
# Check file exists and import path is correct
# Run: npx tsc --noEmit
```

## What's Next?

1. ✅ Site is running locally
2. ✅ Customize content and colors
3. ✅ Test on mobile devices
4. ✅ Deploy to Vercel/Netlify
5. ✅ Set up custom domain
6. ✅ Add analytics
7. ✅ Monitor performance

See `DEPLOYMENT_GUIDE.md` for detailed deployment steps.

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- TypeScript docs: https://www.typescriptlang.org/docs

---

**You're all set!** Start editing and deploy when ready. 🚀
