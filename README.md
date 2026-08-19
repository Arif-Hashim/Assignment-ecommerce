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

# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production
```bash
npm run build
npm run preview
```


