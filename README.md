# Guttered — Band Website

Minimal, no-scroll website for the band Guttered.

## Features

- **No-scroll design**: Each page fits in viewport
- **Auto dark mode**: Respects system preference (no toggle needed)
- **Soft aesthetic**: No hard boxes, uses underlines and soft dividers
- **OKLCH colors**: Modern color space for better perceptual uniformity
- **Animated background**: Unicorn Studio integration on home page
- **Cursive typography**: "Dawning of a New Day" for headings/logo
- **Responsive**: Works on mobile and desktop
- **Zero build**: Pure HTML/CSS, no build step required
- **Fast**: <50KB page weight (excluding fonts/animations)

## Pages

- `index.html` - Home (next show)
- `listen.html` - Streaming links
- `shows.html` - Upcoming shows
- `contact.html` - Email, social, mailing list

## Running Locally

Open `index.html` in a browser, or use a simple server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Customization

### Colors

Edit CSS variables in `css/main.css`:

```css
:root {
  --color-white: oklch(100% 0 0);
  --color-black: oklch(0% 0 0);
  --color-red: oklch(40% 0.22 25);
}
```

### Shows

Edit `shows.html` to add/remove show listings.

### Streaming Embeds

Replace the placeholder in `listen.html` with actual embed codes from Spotify, Bandcamp, etc.

### Social Links

Update links in `contact.html` with real URLs.

## Deployment

Upload all files to any static host:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

No build step needed.
