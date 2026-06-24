# HubSpot Accessible Theme

A custom, fully accessible HubSpot CMS theme built for the **HubSpot CMS for Developers II** certification practicum.

![HubSpot CMS](https://img.shields.io/badge/HubSpot-CMS-ff7a59?logo=hubspot)
![Accessibility](https://img.shields.io/badge/Accessibility-100%25-success)
![Performance](https://img.shields.io/badge/Performance-90%2B-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌐 Live Preview
[View Live Practicum Page](https://148406044.hs-sites-eu1.com/final-practicum-4)

## 📸 Screenshots
*(Add your own screenshots here – desktop and mobile views)*

## 🏆 Lighthouse Scores
- **Accessibility:** 100/100 ✅
- **Performance:** ≥ 90/100 ✅
- **SEO:** 100/100 ✅
- **Best Practices:** 100/100 ✅

## 📁 Theme Structure

```
HubSpot-Accessible-Theme/
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML entry point
├── metadata.json                # Project metadata
├── package.json                 # NPM dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── README.md                    # Project documentation
├── IMG_20260625_002016.jpg      # Project image
├── assets/                      # Static assets
│   └── .aistudio/               # AI Studio files
└── src/                         # Source code
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # Main application component
    ├── index.css                # Global styles
    ├── types.ts                 # TypeScript type definitions
    ├── data.ts                  # Static data and constants
    ├── components/              # Reusable React components
    │   ├── Header.tsx           # Navigation header
    │   ├── Footer.tsx           # Footer section
    │   ├── Modal.tsx            # Modal dialog component
    │   ├── ReusableComponents.tsx # Shared UI components
    │   ├── DynamicIcon.tsx       # Dynamic icon renderer
    │   ├── SkipToContent.tsx     # Accessibility skip link
    │   └── RouteAnnouncer.tsx    # Route change announcer
    └── views/                   # Page views/routes
        ├── HomeView.tsx         # Home page
        ├── AboutView.tsx        # About page
        ├── ServicesView.tsx     # Services listing page
        ├── ServiceDetailView.tsx # Individual service details
        ├── ContactView.tsx      # Contact form page
        └── TeamView.tsx         # Team members page
```


## 🧩 Features
- ✅ **Skip‑to‑content** link for keyboard users
- ✅ **Semantic HTML5** landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ✅ **Responsive design** – works on all screen sizes
- ✅ **Custom Team Module** with style fields (border style, color, width) using `scope_css`
- ✅ **Reusable Sections** – Image & Text, Team Members
- ✅ **Inherited brand colors** from HubSpot account settings
- ✅ Optimised images with `resize_image_url` and lazy loading
- ✅ Clean, maintainable CSS using partials

## 📜 Certification
This theme was built as part of the **HubSpot CMS for Developers II** practicum.  
[View Certificate](https://academy.hubspot.com/certificates/) (add your certificate link)

## 🛠️ Technologies
- HubL (HubSpot Markup Language)
- HTML5, CSS3
- JavaScript (ES6)
- HubSpot Design Manager

## 📄 License
MIT – feel free to use and adapt!

---
