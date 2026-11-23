# Sırlı Atölye

A corporate website for **Sırlı Atölye**, a ceramics studio that offers pottery workshops and sells handmade pieces. The site content is in Turkish.

> **Note:** Sırlı Atölye is a fictional brand created for this portfolio project. It does not represent a real business.

**Live:** [mysterious-workshop.vercel.app](https://mysterious-workshop.vercel.app)

🚧 **Status:** In progress. The tooling and project setup are done, and the design is next.

## What this project demonstrates

- **Corporate website:** a multi-page brand site with workshop listings, detail pages, a product gallery and contact forms
- **Responsive design:** layouts built for phones, tablets and desktops
- **Performance and SEO:** static rendering, optimized images, per-page metadata, sitemap and structured data, with a Lighthouse score of 100 as the target

## Pages (planned)

| Page            | Route               | Content                                                     |
| --------------- | ------------------- | ----------------------------------------------------------- |
| Home            | `/`                 | Introduction, featured workshops, product highlights        |
| Workshops       | `/workshops`        | All workshops: wheel throwing, hand building, glazing, kids |
| Workshop detail | `/workshops/[slug]` | Duration, level, price, dates and a booking form            |
| Collection      | `/collection`       | Product gallery with a category filter and an order request |
| About           | `/about`            | Story, team and photos from the studio                      |
| Contact         | `/contact`          | Contact form, address and opening hours                     |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)
- [React 19](https://react.dev) and [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- Server Actions for forms
- ESLint, Prettier, husky, lint-staged and commitlint
- Deployed on [Vercel](https://vercel.com)

## Getting started

Requirements: **Node.js 26** and **npm**.

```bash
git clone https://github.com/sevvalsaygat/mysterious-workshop.git
cd mysterious-workshop
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Start the development server                    |
| `npm run build`    | Create a production build                       |
| `npm run start`    | Serve the production build                      |
| `npm run lint`     | Lint the project with ESLint                    |
| `npm run ts:check` | Generate route types and type-check the project |
| `npm run format`   | Format the project with Prettier                |

## Project structure

```text
app/          Routes and pages
components/   Shared UI components
containers/   Page-specific sections
constants/    Site-wide constants
data/         Typed content (workshops, products, team)
actions/      Server Actions
lib/          Helpers
types/        Shared TypeScript types
public/       Static files and images
```

Some folders are added as the features that need them are built.

## Workflow

- **Branches:** GitHub Flow. Every change goes through a pull request and is merged into `main` with squash and merge.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org), enforced by commitlint.
- **Git hooks:**
  - pre-commit formats and lints staged files
  - pre-push runs lint and type checks

## Credits

Photos will come from [Unsplash](https://unsplash.com) and [Pexels](https://www.pexels.com). Each photo and its photographer will be credited here.
