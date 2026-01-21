# Guttered — Website PRD

**Project**: Guttered Band Website  
**Version**: 1.0  
**Last Updated**: January 21, 2026  
**Status**: Draft

---

## 1. Project Overview

### Purpose

A minimal, high-impact web presence for Guttered that embodies their dark classical underground aesthetic. The site serves as a central hub for show announcements, music streaming, and community engagement.

### Principles

- **Brutal Minimalism**: Every element serves a purpose. No decoration for decoration's sake.
- **Analog in Digital**: Simulate physical media (xerox, zine, posters) through web technologies.
- **Performance First**: Fast load times. No bloat. Respect the user's bandwidth.
- **Accessibility Over Aesthetics**: When in conflict, accessibility wins.

---

## 2. Target Audience

### Primary

- **Underground Music Fans** (18-35) — Punk, hardcore, noise, experimental
- **Show Attendees** — People looking for event info, ticket links
- **DIY Community** — Other bands, promoters, zine creators

### Secondary

- **Music Industry** — Press, labels, booking agents
- **New Listeners** — Discovery via streaming platforms or social media

### Technical Profile

- **Devices**: 60% mobile, 40% desktop
- **Browsers**: Modern evergreen (Chrome, Firefox, Safari, Edge)
- **Bandwidth**: Assume slow connections (optimize for <1MB initial load)

---

## 3. Goals & Success Metrics

### Business Goals

1. Increase show attendance
2. Grow streaming numbers
3. Build mailing list
4. Establish brand identity online

### User Goals

1. Find upcoming shows quickly
2. Listen to music without friction
3. Buy merch or access links
4. Contact the band

### Success Metrics

- **Show CTR**: >15% click-through on event links
- **Page Load**: <2s on 3G
- **Bounce Rate**: <40%
- **Mailing List**: 50 signups in first month

---

## 4. Site Structure

### Information Architecture

```
/
├── Home (Shows + Latest)
├── Listen (Streaming embed + discography)
├── Merch (External link or simple shop)
└── Contact (Email + Mailing list)
```

### Navigation Pattern

- **Desktop**: Fixed top bar, typewriter monospace, uppercase
- **Mobile**: Hamburger menu (minimal animation, instant reveal)
- **Footer**: Social links, copyright

---

## 5. Features & Functionality

### 5.1 Core Features (MVP)

#### Home / Landing

- **Hero Section**: High-contrast band photo or graphic (xerox treatment)
- **Next Show**: Prominently displayed with date, venue, ticket link
- **Show List**: Chronological upcoming shows (max 5 visible, "See All" link)
- **Latest Release**: Embedded player or link to streaming

#### Listen

- **Streaming Embeds**: Spotify/Bandcamp/SoundCloud players
- **Discography Grid**: Album art (monochrome treatment) + release info
- **Links**: Direct links to all platforms (Spotify, Apple Music, Bandcamp, etc.)

#### Merch

- **Option A**: External link to Bandcamp/Big Cartel
- **Option B**: Simple product grid with images, prices, external checkout

#### Contact

- **Email**: Direct mailto link or simple form
- **Mailing List**: Embedded form (Mailchimp, Buttondown, or custom)
- **Social**: Links to Instagram, Bandcamp, etc.

### 5.2 Nice-to-Have (Post-MVP)

- **Archive**: Past shows, old flyers, photos
- **Press Kit**: Downloadable EPK (photos, bio, tech rider)
- **Blog/News**: Show recaps, political statements, community posts
- **Live Recordings**: Embedded audio/video from shows

---

## 6. Design Specifications

### 6.1 Color Palette (OKLCH)

#### Primary Colors

```css
--color-white: oklch(100% 0 0); /* Stark White */
--color-black: oklch(0% 0 0); /* Deep Black */
--color-grey: oklch(92% 0 0); /* Xerox Grey */
```

#### Accent Colors (Use Sparingly)

```css
--color-red: oklch(40% 0.22 25); /* Blood Red */
--color-violet: oklch(50% 0.25 300); /* Violet Wash */
--color-cyan: oklch(75% 0.15 200); /* Electric Cyan */
--color-amber: oklch(75% 0.15 80); /* Amber Sodium */
--color-blue: oklch(85% 0.08 220); /* Powder Blue */
```

#### Usage Rules

- **Default Background**: `--color-white` or `--color-grey`
- **Default Text**: `--color-black`
- **Inverted Sections**: Black bg, white text
- **Accent**: One color per page, max. Use for CTAs, active states, or section dividers.

### 6.2 Typography

#### Font Stack

```css
/* Logo & Display */
--font-script: "Allura", "Great Vibes", cursive;

/* Headers (Context-Dependent) */
--font-blackletter: "Old London", "UnifrakturMaguntia", serif;
--font-industrial: "DIN Condensed", "Bebas Neue", sans-serif;

/* Body & Info */
--font-mono: "IBM Plex Mono", "Courier New", monospace;
--font-sans: "Inter", "Helvetica", sans-serif;
```

#### Type Scale

```css
--text-xs: 0.75rem; /* 12px - Captions */
--text-sm: 0.875rem; /* 14px - Body small */
--text-base: 1rem; /* 16px - Body */
--text-lg: 1.125rem; /* 18px - Subheads */
--text-xl: 1.5rem; /* 24px - H3 */
--text-2xl: 2rem; /* 32px - H2 */
--text-3xl: 3rem; /* 48px - H1 */
--text-4xl: 4rem; /* 64px - Hero */
```

#### Usage

- **Navigation**: `--font-mono`, `--text-sm`, uppercase, `letter-spacing: 0.1em`
- **Body Copy**: `--font-mono` or `--font-sans`, `--text-base`
- **Show Dates**: `--font-mono`, `--text-lg`, bold
- **Logo**: `--font-script`, `--text-3xl` or larger

### 6.3 Layout & Spacing

#### Grid System

```css
--container-max: 1200px;
--gutter: 1.5rem; /* 24px */
--section-gap: 4rem; /* 64px */
```

#### Breakpoints

```css
--bp-mobile: 640px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-wide: 1280px;
```

#### Spacing Scale

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
```

### 6.4 Components

#### Buttons

```css
/* Primary CTA */
background: var(--color-black);
color: var(--color-white);
padding: var(--space-3) var(--space-6);
font-family: var(--font-mono);
text-transform: uppercase;
border: 2px solid var(--color-black);
letter-spacing: 0.05em;

/* Hover */
background: var(--color-white);
color: var(--color-black);
```

#### Cards (Show Listings)

```css
background: var(--color-white);
border: 3px solid var(--color-black);
padding: var(--space-6);
position: relative;

/* Optional: Torn edge effect via pseudo-element */
```

#### Dividers

```css
height: 3px;
background: var(--color-black);
margin: var(--space-12) 0;
```

### 6.5 Textures & Effects

#### Grain Overlay

- Apply a subtle noise texture (PNG or SVG) at ~5% opacity over hero sections
- Use CSS `mix-blend-mode: multiply` for analog feel

#### Image Treatment

- Convert color photos to high-contrast black & white
- Apply grain/halftone filters
- Use CSS filters: `contrast(1.2) brightness(1.1) grayscale(1)`

#### Animations

- **Minimal & Intentional**: No gratuitous motion
- **Loading States**: Typewriter text reveal, scanning line
- **Page Transitions**: Instant or quick cuts (<200ms)
- **Hover**: Color inversion, slight scale (1.02x), or underline reveal

---

## 7. Technical Requirements

### 7.1 Tech Stack

#### Framework/Platform (Options)

- **Option A**: Static Site Generator (11ty, Hugo, Astro) + Netlify/Vercel
- **Option B**: Next.js (if dynamic content needed)
- **Option C**: Plain HTML/CSS/JS (maximum simplicity)

**Recommendation**: Astro — Fast, minimal JS, great DX, supports OKLCH out of the box.

#### Styling

- **CSS**: PostCSS or native CSS (custom properties + nesting)
- **No Heavy Frameworks**: Avoid Tailwind bloat; write custom minimal CSS

#### CMS (Optional)

- **Headless CMS**: Sanity, Contentful, or Notion (for show updates)
- **Git-based**: Markdown files in repo (simplest)

#### Performance

- **Image Optimization**: WebP/AVIF, lazy loading, responsive images
- **Font Loading**: Self-host fonts, `font-display: swap`
- **No Analytics Bloat**: Use lightweight (Plausible, Fathom) or self-hosted

### 7.2 Browser & Device Support

- **Modern Browsers**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **No IE Support**: Actively block or show unstyled fallback
- **Mobile-First**: Design and build for mobile, enhance for desktop

### 7.3 Accessibility (WCAG 2.1 AA Minimum)

- **Color Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Keyboard Navigation**: Full site navigable via keyboard
- **Screen Readers**: Semantic HTML, ARIA labels where needed
- **Focus States**: Visible, high-contrast focus indicators
- **Motion**: Respect `prefers-reduced-motion`

### 7.4 Performance Targets

- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Largest Contentful Paint**: <2.5s
- **Total Page Weight**: <500KB (excluding streaming embeds)

---

## 8. Content Requirements

### 8.1 Copy Guidelines

- **Tone**: Unapologetic, direct, minimal punctuation
- **Voice**: Active, declarative, community-focused
- **Length**: Short paragraphs (2-3 sentences max)
- **Formatting**: Uppercase for emphasis, monospace for data

### 8.2 Imagery

- **Band Photos**: High-res, high-contrast B&W, grainy
- **Show Flyers**: Scanned originals or xerox-style recreations
- **Album Art**: Square format, monochrome treatment
- **Icons**: Custom stencil-style or none at all

### 8.3 Required Content (Pre-Launch)

- [ ] 5-10 high-quality band photos
- [ ] Bio (100-200 words)
- [ ] Discography (album art + streaming links)
- [ ] Upcoming shows (min. 3)
- [ ] Social media links
- [ ] Contact email
- [ ] Logo (script version + lockup)

---

## 9. Content Management

### Show Updates

- **Frequency**: Weekly or as booked
- **Format**: Date, venue, city, ticket link, lineup
- **Entry Method**: CMS, markdown file, or simple form

### Music Releases

- **Update On**: Release day
- **Content**: Embed code, links, artwork, credits

### Merch

- **Update As**: Inventory changes
- **Content**: Product photo, description, price, link

---

## 10. SEO & Metadata

### Meta Tags (Every Page)

```html
<title>Guttered — [Page Name]</title>
<meta name="description" content="Underground band. Shows, music, merch." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
<meta name="theme-color" content="oklch(0% 0 0)" />
```

### Structured Data

- **Organization Schema**: Band name, logo, social links
- **Event Schema**: For show listings (helps Google discover events)
- **MusicGroup Schema**: Discography, genre, members

---

## 11. Launch Checklist

### Pre-Launch

- [ ] Domain secured (e.g., gutteredband.com)
- [ ] Hosting configured (SSL, CDN)
- [ ] All content populated
- [ ] Accessibility audit passed
- [ ] Performance audit passed (Lighthouse 90+)
- [ ] Cross-browser testing completed
- [ ] Mobile testing on real devices
- [ ] Mailing list integration tested
- [ ] Analytics installed (if using)

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Share on social media
- [ ] Update Instagram bio link
- [ ] Monitor performance metrics
- [ ] Collect user feedback

---

## 12. Risks & Constraints

### Risks

- **Bandwidth**: Heavy imagery could slow mobile users → **Mitigation**: Aggressive image optimization
- **Content Staleness**: Shows page outdated if not maintained → **Mitigation**: Easy CMS or automated pulls from Bandsintown API
- **Accessibility vs. Aesthetic**: High-contrast xerox look may reduce readability → **Mitigation**: Offer accessible fallback or ensure minimum contrast ratios

### Constraints

- **Budget**: Assume minimal/zero budget → Use free hosting, no paid plugins
- **Maintenance Time**: Band members are busy → Keep CMS dead simple or fully automate
- **Technical Skill**: May not have a dedicated dev → Use platform with good docs/support

---

## 13. Future Enhancements (Roadmap)

### Phase 2 (3-6 months post-launch)

- **Archive Section**: Scanned flyers, old show photos, community submissions
- **Press Kit**: Downloadable ZIP with bio, photos, tech rider
- **Blog**: Show recaps, political statements, zine-style posts

### Phase 3 (6-12 months)

- **Live Recordings**: Embedded audio/video player for bootlegs
- **Fan Submissions**: User-uploaded photos from shows
- **Merch Shop**: Full e-commerce (if Bandcamp insufficient)

### Blue Sky (Nice-to-Have)

- **Interactive Flyer Generator**: Let fans create their own xerox-style posters
- **Easter Eggs**: Hidden content, glitch effects on key presses
- **Web Zine**: Collaborations with other bands, artists, writers

---

## 14. Appendix

### Design References

- Analyzed images from `/Users/nicojaffer/Downloads/guttered/`
- Design language document: See accompanying file

### Inspiration Sites

- **Brutalist Websites**: brutalistwebsites.com
- **DIY Band Sites**: Touche Amore, Turnstile (early versions), La Dispute
- **Experimental**: arena.is (for archival aesthetic)

### Tools & Libraries

- **Fonts**: Google Fonts (Allura, IBM Plex Mono), or self-hosted
- **Icons**: Custom SVG stencils or Feather Icons (modified)
- **Noise Texture**: Generate via noisepng.com or SVG filter
- **Image Processing**: Sharp (Node.js) or Cloudinary

---

**Document Status**: Ready for technical spec & design mockups  
**Next Steps**: Create wireframes, finalize tech stack, begin development sprint planning
