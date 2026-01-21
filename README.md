# Guttered — Band Website

Minimal, no-scroll website for the band Guttered.

## Features

- **No-scroll design**: Each page fits in viewport
- **Auto dark mode**: Respects system preference (no toggle needed)
- **Soft aesthetic**: No hard boxes, uses underlines and soft dividers
- **OKLCH colors**: Modern color space for better perceptual uniformity
- **Animated background**: Unicorn Studio integration (persists across navigation)
- **SPA routing**: Client-side navigation keeps background loaded
- **Cursive typography**: "Dawning of a New Day" for headings/logo
- **Responsive**: Works on mobile and desktop
- **Zero build**: Pure HTML/CSS, no build step required
- **Fast**: <50KB page weight (excluding fonts/animations)

## Structure

- `index.html` - Single page application shell
- `js/router.js` - Client-side router
- `css/main.css` - All styles

Routes: `/` (home), `/listen`, `/shows`, `/contact`

## Running Locally

The site uses client-side routing (SPA) to keep the background animation loaded during navigation.

Use a simple server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

**Note**: For production deployment, ensure your server is configured to serve `index.html` for all routes (see deployment section).

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

### Content

Edit `js/router.js` to update:
- Show listings
- Streaming links
- Contact info
- Social links

## Deployment

Upload all files to any static host:

### Netlify
Automatically works with the included `_redirects` file.

### Vercel
Automatically works with the included `vercel.json` file.

### GitHub Pages / Cloudflare Pages
Add a `404.html` that's a copy of `index.html`:
```bash
cp index.html 404.html
```

### Other Hosts
Configure your server to serve `index.html` for all routes (SPA routing).

No build step needed.
