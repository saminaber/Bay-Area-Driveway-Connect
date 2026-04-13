# 🗺️ Component Map & Architecture

## Page Structure

```
Home Page (src/app/page.tsx)
│
├─ Hero (components/Hero.tsx)
│  └─ Two CTA buttons: "Request Free Quotes" & "For Contractors"
│
├─ TrustSection (components/TrustSection.tsx)
│  ├─ Local Bay Area Focus
│  ├─ Simple Matching Process
│  ├─ No Upfront Cost
│  └─ Save Time
│
├─ HowItWorks (components/HowItWorks.tsx)
│  ├─ Step 1: Tell us about your project
│  ├─ Step 2: We review and match
│  └─ Step 3: Compare quotes and decide
│
├─ Services (components/Services.tsx)
│  ├─ 🛣️ Driveway Replacement
│  ├─ 🧱 Paver Installation
│  ├─ 🏗️ Concrete Work
│  ├─ 🌳 Backyard Hardscape
│  ├─ 🚶 Walkways and Paths
│  └─ ☀️ Patio & Outdoor Surfaces
│
├─ ServiceAreas (components/ServiceAreas.tsx)
│  ├─ Los Gatos
│  ├─ Saratoga
│  ├─ San Jose
│  ├─ Palo Alto
│  ├─ Cupertino
│  ├─ Menlo Park
│  ├─ Atherton
│  ├─ Danville
│  ├─ Alamo
│  └─ + Surrounding communities
│
├─ Activity (components/Activity.tsx)
│  ├─ New Contractor Added
│  ├─ Requests Being Matched
│  ├─ Open to Inquiries
│  ├─ Ready to Match
│  └─ Disclaimer: Contractor matching process
│
├─ CTASection (components/CTASection.tsx)
│  ├─ For Homeowners
│  │  └─ "Request Contractor Match" button
│  └─ For Contractors
│     └─ "Join Our Network" link
│
├─ ContactForm (components/ContactForm.tsx) - ID: "contact-form"
│  ├─ Full Name *
│  ├─ Phone Number *
│  ├─ Email Address *
│  ├─ City *
│  ├─ Project Type * (dropdown)
│  ├─ Timeline * (dropdown)
│  ├─ Project Details * (textarea)
│  └─ Submit button
│
└─ Footer (components/Footer.tsx)
   ├─ Brand info & description
   ├─ Quick Links
   │  ├─ Request Quotes
   │  ├─ For Contractors
   │  └─ About Us
   ├─ Contact Info
   │  ├─ Phone
   │  ├─ Email
   │  └─ Location
   └─ Copyright & Credits
```

## Data Flow

### Hero Section
- **User clicks "Request Free Quotes"**
  ↓
- JavaScript scrolls to ContactForm (ID: "contact-form")
  ↓
- User fills form and submits

### Contact Form
- **User submits**
  ↓
- Form validates all fields
  ↓
- Opens mailto link with form data
  ↓
- User's email client opens (or FormSubmit integration)

### Navigation
- **All buttons scroll smoothly to relevant sections**
- Uses `scroll-behavior: smooth` in globals.css
- Smooth scroll to #contact-form on CTA clicks

## Component Breakdown

### Hero.tsx
- Client component (uses 'use client' for interactivity)
- Imports: React hooks (useEffect on scroll)
- Key function: `scrollToForm()` → document.getElementById('contact-form')

### TrustSection.tsx, Services.tsx, ServiceAreas.tsx
- Static components (no interactivity)
- Display: Cards with icons and text
- Styling: Tailwind grid layouts

### HowItWorks.tsx
- Static component
- Display: 3-column step layout with numbered circles
- Connector lines between steps

### Activity.tsx
- Static component
- Display: 4 update boxes + disclaimer
- Styling: Green gradient backgrounds

### CTASection.tsx
- Client component (has onClick handlers)
- Two side-by-side call-to-action boxes
- Email links for contractor route

### ContactForm.tsx
- Client component (form state management)
- Uses: useState for form data
- Handlers: handleChange, handleSubmit
- Validation: HTML5 required attributes
- Submission: Opens mailto link

### Footer.tsx
- Static component
- Display: 3-column layout on desktop, stacked on mobile
- Contains: All contact information

## Styling System

### Colors
```typescript
// Primary
bg-blue-600   // Main action buttons
bg-blue-50    // Section backgrounds
border-blue-600

// Accent
hover:bg-blue-700  // Button hover states

// Grays
bg-gray-900   // Footer background
bg-white      // Card backgrounds
text-gray-600 // Body text
```

### Layout
- Max-width: 6xl (used in most sections)
- Padding: Responsive (px-4 sm:px-6 lg:px-8)
- Grid: 1 column (mobile), 2 columns (tablet), 3-4 columns (desktop)

### Typography
- Tailwind's system font stack
- Antialiased: -webkit-font-smoothing: antialiased
- Sizes: sm (12px), base (16px), lg (18px), xl (20px), 2xl (24px), etc.

## State Management

### Hero Component
- `showForm` state (unused, can be removed)
- `scrollToForm()` function

### ContactForm Component
- `formData` state (7 fields)
- `submitted` state (success message)
- `loading` state (button disabled during submission)

## Event Flow

1. **User sees page** → All components render
2. **User clicks CTA button** → Hero's `scrollToForm()` triggers
3. **Page scrolls** → smooth scroll to ContactForm
4. **User fills form** → Updates `formData` state
5. **User clicks Submit** → Form validates & opens mailto
6. **Success message** → Shows briefly, clears form

## Mobile Responsiveness

### Breakpoints Used
- `sm:` - 640px+ (tablets and up)
- `md:` - 768px+ (larger tablets and desktops)
- `lg:` - 1024px+ (desktops and up)

### Mobile-First Approach
- Default: 1 column, stacked layout
- sm:grid-cols-2 → 2 columns on tablets
- lg:grid-cols-3 → 3 columns on desktops

### Touch Targets
- Button heights: 40-48px (touch-friendly)
- Input heights: 48px
- Spacing: 16px minimum gaps

## Performance Optimizations

1. **Code Splitting** - Next.js auto-splits per page/component
2. **CSS Purging** - Tailwind removes unused styles in production
3. **Image Optimization** - Ready to use Next.js Image component
4. **Font Optimization** - System font stack (no external fonts)
5. **Build Optimization** - Production build is 89.9 kB First Load JS

## SEO Features

- Metadata in `layout.tsx` (title, description, keywords)
- Semantic HTML (header, section, footer elements)
- Responsive viewport meta tag
- Sitemap-ready structure

## Accessibility

- Semantic HTML elements
- ARIA labels in form
- Color contrast ratios meet WCAG AA
- Keyboard navigable
- Focus states on interactive elements

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**This architecture ensures:**
- ✅ Easy to maintain and update
- ✅ Quick to customize
- ✅ Mobile-first responsive design
- ✅ Production-ready performance
- ✅ Clean, organized code structure
