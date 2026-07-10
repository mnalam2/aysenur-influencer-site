# Aysenur Alam — Portfolio Site

The personal site of Aysenur Alam, a Brand Creative Strategist based in San Diego, live at [aysenuralam.com](https://aysenuralam.com).

A single-page portfolio built as a fast, animated landing page with sections for services, selected work, an about story, and a contact form.

## Tech stack

- [React 18](https://react.dev/) with [Vite 5](https://vitejs.dev/) for dev server and builds
- [Tailwind CSS 3](https://tailwindcss.com/) with a custom warm/cream color palette
- [Framer Motion](https://www.framer.com/motion/) for scroll-triggered fade-up animations (respects `prefers-reduced-motion`)
- [lucide-react](https://lucide.dev/) icons
- Playfair Display (via `@fontsource`) and Inter (via Google Fonts) typography
- Images served from Cloudinary with automatic format and quality optimization

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build a production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
index.html            Page shell, meta/OG tags, font loading
src/
  main.jsx            React entry point
  App.jsx             The entire site — nav, hero, services, portfolio, about, contact, footer
  index.css           Tailwind directives and global styles
tailwind.config.js    Custom colors (cream, rose, warm-*) and font families
vite.config.js        Vite + React plugin config
```

The whole page lives in `src/App.jsx` as one component, organized top-to-bottom by section with `── SECTION ──` comment markers.

## Customization notes

- **Colors** are defined in `tailwind.config.js` (`cream`, `beige`, `rose`, `warm-text`, etc.) — change them there and the whole site follows.
- **Services copy** lives in the `SERVICES` array at the top of `src/App.jsx`.
- **Photos** are Cloudinary URLs (`heroImg` / `aboutImg` constants in `App.jsx`); swap the public IDs to change images while keeping the `f_auto,q_auto` optimization transforms.
- **Portfolio** cards are currently "Coming soon" placeholders with before/after panels, ready for real project imagery.
- **Contact form** is wired for Netlify Forms (`netlify` attribute); the submit handler currently shows a thank-you state client-side.
