# SHOP.CO — E-commerce Website (React + Vite)

A fully functional clone of the SHOP.CO e-commerce Figma template, built with
React (Vite) and React Router DOM. Component-based, with a working cart,
filters, sorting, and product detail pages.

## Tech stack
- React 18 + Vite 5
- React Router DOM v6 (client-side routing)
- Plain CSS per component (no UI framework)
- Cart state via React Context + `useReducer`, persisted to `localStorage`

## Pages
- `/` — Home (hero, brand strip, new arrivals, top selling, browse by dress style, testimonials, newsletter)
- `/shop` and `/shop/:styleSlug` (e.g. `/shop/casual`) — product listing with sidebar filters (category, price, color, size, dress style), sorting, and pagination
- `/product/:id` — product detail page (image gallery, color/size selection, quantity, add to cart, tabs for details/reviews/FAQs, related products)
- `/cart` — cart page (quantity controls, remove items, promo code, order summary, checkout)

## Getting started

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Unzip the project, then cd into it
cd ecommerce-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production
```bash
npm run build
npm run preview
```

## Notes
- Real product/banner photos live in `src/components/images/` and are imported
  through `src/components/images/index.js`. Products that don't have a
  matching real photo (Bermuda Shorts, Pullover Hoodie) fall back to a
  `placehold.co` placeholder so the grid never breaks — drop a photo into that
  folder, export it from `index.js`, and set `localImage` on the product in
  `src/data/products.js` to swap it in.
- Try the promo code **SHOPCO20** on the Cart page for a 20% discount demo.
- Cart contents persist across page reloads (stored in `localStorage`).
- This project was **not** run/built in the environment that generated it
  (no network access there), so after `npm install`, if you hit any small
  issue, tell me the error and I'll fix it right away.
