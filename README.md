# TimeStore ⌚

> A full-stack watch e-commerce app — browse, pick your size, and check out in minutes.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux)](https://redux-toolkit.js.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-00E5CC?style=flat-square&logo=postgresql)](https://neon.tech/)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?style=flat-square&logo=stripe)](https://stripe.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=vercel)](https://timestore-asharmeraj.vercel.app/)

---

## 📋 Table of Contents

- [Landing Page](#-landing-page)
- [All Products](#️-all-products)
- [Product Details](#-product-details)
- [Cart](#-cart)
- [Tech Stack](#️-tech-stack)
- [License](#-license)

---

## 🏠 Landing Page

The home page sets the tone for the whole experience. I built it around three core sections — New Arrivals, Showcase, and Featured — so visitors get a curated look at what's available right away. Framer Motion keeps the transitions feeling alive without being distracting.

<div align="center">
  <img src="/public/assets/LandingPage.png" width="400"/>
  <img src="/public/assets/LandingPage2.png" width="400"/>
</div>

---

## 🗂️ All Products

This page pulls the full watch catalog directly from a PostgreSQL database on the server side, so there's no waiting around for data to load after the page arrives. It's built to handle as many products as the inventory grows to. Clean grid, fast load, easy to browse.

<img src="/public/assets/allItems.png" width="800"/>

---

## 🔍 Product Details

Every product has its own dynamic page with a high-res image carousel, category info, and a size picker. I also pull in related products from the same category at the bottom — it gives people a natural reason to keep browsing. Embla handles the carousel, and it keeps things feeling snappy.

<div align="center">
  <img src="/public/assets/ProductPage.png" width="400"/>
  <img src="/public/assets/ProductPage2.png" width="400"/>
</div>

---

## 🛒 Cart

The cart runs entirely on Redux Toolkit — add items, bump quantities up or down, remove something you changed your mind on, and the totals recalculate instantly. Sizes are tracked per item so nothing gets mixed up at checkout. When you're ready, the cart data goes to a server-side route that creates a Stripe Checkout session and sends you there directly. Dedicated success and failure pages handle wherever you land after payment.

<img src="/public/assets/cartPage.png" width="800"/>

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router), React 18, TypeScript |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS, Radix UI |
| Animations | Framer Motion, Embla Carousel |
| Backend | Next.js Route Handlers |
| Database | PostgreSQL (Neon) + Drizzle ORM |
| Payments | Stripe Checkout |
| Images | Cloudinary |
| Data Fetching | Server Components + React Query |
| Deployment | Vercel |

