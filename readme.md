# Amit Vaghela

**ML Engineer · Data Analyst · Full-Stack AI Builder**

Personal portfolio website showcasing forecasting systems, AI-powered analytics products, and agentic workflows — from raw data to deployable experience.

**Live site:** [amitvaghela19.github.io](https://amitvaghela19.github.io)

[GitHub](https://github.com/amitvaghela19) · [LinkedIn](https://www.linkedin.com/in/amit-vaghela-436355102) · [Email](mailto:amitvaghela19@gmail.com)

---

## About this site

This is a dark-theme, recruiter-focused portfolio with:

- A landing page highlighting selected work and capabilities
- An all-projects catalog with category filters
- Individual project detail / case-study pages
- About, resume (PDF download), and contact pages
- Smooth motion via Framer Motion
- Responsive layout for desktop and mobile

---

## Tech stack

- **React** + **TypeScript**
- **Vite**
- **React Router**
- **Framer Motion**
- **CSS Modules** + centralized design tokens
- **GitHub Actions** → **GitHub Pages**

---

## Getting started

```bash
npm install
npm run dev
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Production build (+ SPA `404.html` fallback) |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint with Oxlint |

---

## Content & maintenance

| Asset | Path |
|-------|------|
| Project catalog (16 entries, featured flags) | `src/data/projects.ts` |
| Profile, contact links, metrics, skill groups | `src/data/site.ts` |
| Resume PDF | `public/resume.pdf` |
| Project thumbnails | `public/project-images/` |

Add a new project by appending an object in `projects.ts` and (optionally) a thumbnail under `public/project-images/`.

---

## Deployment

Publishing source: **GitHub Actions**

On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Uploads the `dist` artifact
4. Deploys to GitHub Pages

Vite is configured with `base: '/'` for this user site (`username.github.io`).

---

## License

See [LICENSE](LICENSE).
