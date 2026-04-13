# Bay Area Driveway Connect

A modern, clean landing page for a contractor-matching service connecting Bay Area homeowners with local driveway, paver, concrete, and outdoor surface contractors.

## 🎯 Project Overview

Bay Area Driveway Connect is a Next.js-based landing page for a contractor matching service. The site helps homeowners find trusted local contractors for their driveway and outdoor surface projects while providing a network opportunity for quality contractors.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## 📋 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, premium visual style with high trust factor
- ✅ SEO optimized
- ✅ Contact form for homeowner inquiries
- ✅ Contractor application CTA
- ✅ Service showcase (6 services)
- ✅ Service areas listing (9+ Bay Area communities)
- ✅ How it works section
- ✅ Trust-building value proposition
- ✅ Real-time form validation
- ✅ Smooth scrolling navigation
- ✅ Production-ready code

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with CTA buttons
│   │   ├── TrustSection.tsx       # Value propositions
│   │   ├── HowItWorks.tsx         # 3-step process explanation
│   │   ├── Services.tsx           # Service offerings
│   │   ├── ServiceAreas.tsx       # Bay Area coverage
│   │   ├── Activity.tsx           # Credibility/activity updates
│   │   ├── CTASection.tsx         # Homeowner vs Contractor CTAs
│   │   ├── ContactForm.tsx        # Main inquiry form
│   │   └── Footer.tsx             # Footer with contact info
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or navigate to the project:**
```bash
cd "connect contrzct"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint on the codebase
```

## 🎨 Customization

### Contact Information
Update the following in the components:
- **Phone**: `650-863-2112` (in [Footer.tsx](src/app/components/Footer.tsx) and [CTASection.tsx](src/app/components/CTASection.tsx))
- **Email**: `saminaber2005@gmail.com` (in multiple components)

### Services
Edit the `services` array in [Services.tsx](src/app/components/Services.tsx):
```typescript
const services = [
  { icon: '🛣️', name: 'Your Service Here' },
  // ...
]
```

### Service Areas
Modify the `areas` array in [ServiceAreas.tsx](src/app/components/ServiceAreas.tsx):
```typescript
const areas = ['City1', 'City2', ...]
```

### Colors
Update the Tailwind color scheme in [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  'primary': '#1e40af',
  'primary-dark': '#1e3a8a',
  'accent': '#0891b2',
}
```

### Brand Copy
Update business name, headlines, and descriptions in each component as needed.

## 📧 Contact Form

The contact form collects:
- Full Name
- Phone Number
- Email Address
- City
- Project Type (dropdown)
- Timeline (dropdown)
- Project Details (textarea)

Form submissions are handled via `mailto:` link (opens default email client). For production, integrate with:
- EmailJS
- Sendgrid
- Formspree
- Your own backend API

## ⚖️ Legal Compliance

The site includes:
- Disclaimer about contractor matching process
- Clarification that homeowners decide which contractor to hire
- No false claims about licensing or vetting (ready to add disclaimers as needed)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/bay-area-driveway-connect.git
git push -u origin main
```

2. **Connect to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Vercel will auto-detect Next.js settings
- Click "Deploy"

### Deploy to Other Platforms

The project is optimized for any Node.js hosting:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🔐 Environment Variables

Create a `.env.local` file (copy from `.env.local.example`):
```
# Add any environment variables needed for your backend
```

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- ✅ Optimized for Core Web Vitals
- ✅ Image optimization ready (use Next.js Image component)
- ✅ CSS fully optimized by Tailwind
- ✅ Production build is fully minified

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🤝 Contributing

Feel free to customize and extend this template for your needs.

## 📄 License

This project is created for Bay Area Driveway Connect.

## 📞 Support

For questions about this landing page:
- Phone: (650) 863-2112
- Email: saminaber2005@gmail.com

---

**Built with Next.js, React, TypeScript, and Tailwind CSS**
