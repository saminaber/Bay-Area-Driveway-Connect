# Quick Reference Guide

## 🚀 Getting Started Right Now

Your site is already running! Visit: **http://localhost:3000**

## 📂 Project Structure

```
src/app/
├── components/          # All React components
│   ├── Hero.tsx               # Main hero section
│   ├── TrustSection.tsx        # Value propositions
│   ├── HowItWorks.tsx          # 3-step process
│   ├── Services.tsx            # Service offerings
│   ├── ServiceAreas.tsx        # Bay Area cities
│   ├── Activity.tsx            # Live updates section
│   ├── CTASection.tsx          # Homeowner/Contractor CTAs
│   ├── ContactForm.tsx         # Inquiry form
│   └── Footer.tsx              # Footer with contact info
├── layout.tsx           # Root layout (metadata, fonts)
├── page.tsx             # Main landing page
├── globals.css          # Global styles & Tailwind imports
└── favicon.ico          # Your favicon here

Root Files:
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript config
├── next.config.js       # Next.js config
├── tailwind.config.ts   # Tailwind CSS color palette
├── postcss.config.mjs   # PostCSS plugins
├── .eslintrc.json       # ESLint rules
├── .gitignore           # Git ignore rules
└── README.md            # Documentation
```

## ✏️ Common Edits Cheat Sheet

### Change Business Name
Search for "Bay Area Driveway Connect" in all files and replace.

### Change Phone
Search for "650-863-2112" and replace.

### Change Email  
Search for "saminaber2005@gmail.com" and replace.

### Add Your Logo (coming soon)
1. Add PNG/SVG to `public/` folder
2. Import in components as needed
3. Use Next.js Image component for best performance

### Modify Hero Button Text
Edit `src/app/components/Hero.tsx` buttons section

### Change Service List
Edit the `services` array in `src/app/components/Services.tsx`

### Update Service Areas
Edit the `areas` array in `src/app/components/ServiceAreas.tsx`

### Change Primary Color
Edit `tailwind.config.ts`:
```typescript
'primary': '#NEW_COLOR_CODE',
```

### Customize Activities/Updates
Edit the `updates` array in `src/app/components/Activity.tsx`

## 🎨 Customization Files

| File | What to Customize |
|------|-------------------|
| `Hero.tsx` | Headlines, button text, CTA copy |
| `TrustSection.tsx` | Value propositions, icons |
| `Services.tsx` | Service list, icons |
| `ServiceAreas.tsx` | Cities & geographic coverage |
| `Activity.tsx` | Live updates, credibility messaging |
| `ContactForm.tsx` | Form fields, validation |
| `layout.tsx` | Page title, meta description |
| `tailwind.config.ts` | Color scheme, brand colors |

## 🔄 Workflow

### Daily Development
```bash
npm run dev    # Start local server
# Edit files - changes auto-reload at localhost:3000
```

### Before Deploying
```bash
npm run lint   # Check for errors
npm run build  # Test production build
```

### Deploy to Vercel
```bash
git push origin main   # Push to GitHub
# Vercel auto-deploys on push
```

## 📋 All Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Check code quality |
| `npm install` | Install dependencies |

## 🐛 Quick Fixes

**Page looks broken?**
```bash
rm -rf .next
npm run dev
```

**Styles not loading?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

## 📞 Contact Info Used in Site

- **Phone:** 650-863-2112
- **Email:** saminaber2005@gmail.com
- **Business Name:** Bay Area Driveway Connect

Update these in all components where they appear.

## 🎯 Key Features

✅ Mobile responsive (tested on all sizes)
✅ Fast performance (optimized builds)
✅ SEO friendly (metadata configured)
✅ Production ready (linting clean)
✅ Easy to customize (component-based)
✅ Tailwind CSS (utility-first styling)
✅ TypeScript (type-safe code)

## 📱 Test on These Devices

- Mobile: 375px, 390px, 430px width
- Tablet: 768px width
- Desktop: 1024px+ width

Use Chrome DevTools → Device Toolbar to test.

## 🚀 Deployment Cheat Sheet

**Vercel (Easiest):**
1. Push to GitHub
2. Go to vercel.com
3. Import project
4. Done! Auto-deploys on push

**Other Options:** See DEPLOYMENT.md for Netlify, AWS, DigitalOcean, etc.

## 📚 Need Help?

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- React: https://react.dev/learn
- TypeScript: https://www.typescriptlang.org/docs

## 💡 Pro Tips

1. Use `Ctrl+K` in editor to open command palette
2. Format code: `Ctrl+Shift+P` → "Format Document"
3. Lint code: `npm run lint`
4. Check build: `npm run build` before deploying

---

**Ready to customize? Start with `src/app/components/` folder!**
