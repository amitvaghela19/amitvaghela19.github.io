# Cursor Build Instructions for `amitvaghela19.github.io`

Build a production-quality personal portfolio website for **Amit Vaghela** using **React + Vite** and deploy it to **GitHub Pages** through **GitHub Actions**. The GitHub Pages repository is already set to `amitvaghela19.github.io`, and GitHub Pages has already been switched to **GitHub Actions** as the publishing source.[1][2]

The portfolio is not a generic developer site. It must position Amit as an **ML Engineer, Data Analyst, and Full-Stack AI Builder** with strong emphasis on forecasting systems, agentic AI workflows, end-to-end ML projects, and recruiter-friendly project storytelling.[3]

## Objective

Create a dark-theme portfolio with smooth modern animation, a professional landing page, a featured projects section, an all-projects view, and separate project detail pages. The experience should feel premium and modern, not like a flat template portfolio.

## Tech stack

Use the following stack:
- React
- Vite
- React Router
- Framer Motion for animation
- CSS modules or a clean centralized CSS architecture
- GitHub Actions for deployment to GitHub Pages[4][2]

Because this is a root user site at `amitvaghela19.github.io`, configure Vite with `base: '/'` so assets resolve correctly on GitHub Pages.[4][1]

## Core requirements

### 1. Site structure

Create these routes/pages:
- `/` → Home / Landing page
- `/projects` → All projects page
- `/projects/:slug` → Dynamic-style project detail page per project
- `/about` → About page
- `/resume` → Resume page or resume section with download link
- `/contact` → Contact page

Use a shared layout with a modern top navigation, footer, dark theme, and responsive behavior. Avoid a permanent left sidebar like the reference portfolio, because that structure feels dated and too resume-like for this goal.[5][6]

### 2. Design direction

Design style should be:
- Dark theme by default
- Premium, modern, recruiter-friendly
- Framer-like motion and depth
- Subtle glow, layered panels, and clean grid layouts
- Minimal but expressive interactions
- Fully responsive for mobile and desktop

Avoid:
- Generic template copy
- Flat teal resume-site styling
- Overcrowded skill-logo dumping
- Equal emphasis on all 16–17 repos
- Too much text in the hero section[5][7][8]

### 3. Content strategy

The homepage should prominently feature only the **top 6 selected GitHub projects**, even if more projects exist. The rest can appear in the all-projects page later. This matches the user’s recruiter-focused preference for curated project presentation over dumping everything at once.[3]

Each featured project card must include:
- Project title
- Short problem statement
- Tech stack tags
- 2–3 impact/result bullets if available
- GitHub link
- Optional live demo/report link
- Project thumbnail
- Link to dedicated detail page[9]

Each project detail page should include:
- Hero section with project title and short summary
- Problem statement
- Business or technical goal
- Tools / stack
- Workflow / pipeline overview
- Key results
- Screenshots or visuals
- Challenges and learnings
- GitHub repo link
- Navigation back to projects[3]

### 4. Homepage sections

Build the homepage with these sections in order:
1. Hero
2. Selected metrics / highlights
3. Featured projects
4. What I build
5. About snapshot
6. CTA / Contact footer

Hero copy direction should present Amit as someone who builds forecasting systems, LLM applications, agentic workflows, and data products. Avoid weak phrases such as “fast learner” or generic self-description, because that weakens positioning compared with his actual technical background.[5][3]

Suggested headline pattern:
- Amit Vaghela
- ML Engineer · Data Analyst · Full-Stack AI Builder
- Building forecasting systems, AI-powered analytics products, and agentic workflows from raw data to deployable experience.[10]

### 5. Skills presentation

Do not build a giant icon wall. Group skills by capability instead:
- Machine Learning
- Forecasting / Time Series
- Data Engineering / ETL
- LLM / Agentic AI
- Full-Stack Development
- BI / Analytics Tools[11][12]

Each skill group should be short, readable, and relevant to the portfolio narrative.

### 6. Data-driven content model

Store project content in a dedicated structured file, for example:
- `src/data/projects.ts`
- or `src/data/projects.json`

Each project object should contain:
- `slug`
- `title`
- `summary`
- `problem`
- `stack`
- `highlights`
- `githubUrl`
- `demoUrl`
- `image`
- `category`
- `featured`
- `details`
- `results`
- `lessons`

This will make the site easy to maintain in Cursor and easy to expand later when new repos are added.[3]

### 7. Animation requirements

Use Framer Motion carefully:
- Section fade-up reveals
- Smooth hover lift on cards
- Animated nav underline or active state
- Subtle page transitions between routes
- Optional staggered project card reveal

Animation should feel polished and modern, not distracting. Respect performance and responsiveness.

### 8. GitHub Pages deployment

Add a GitHub Actions workflow at:
- `.github/workflows/deploy.yml`

The workflow should:
- trigger on push to `main`
- install Node
- run `npm ci`
- run `npm run build`
- upload the `dist` directory
- deploy using Pages actions

GitHub Pages custom workflows support this pattern, and Vite’s static deployment guidance aligns with GitHub Actions deployment for Pages.[2][13][4]

### 9. Folder structure

Use a clean structure like this:

```text
amitvaghela19.github.io/
├── public/
│   ├── resume.pdf
│   ├── favicon.svg
│   └── project-images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── projects/
│   │   └── shared/
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── vite.config.ts
└── package.json
```

### 10. Writing style for project copy

Project copy must be:
- professional
- recruiter-friendly
- technically credible
- concise but substantive
- impact-oriented

Use the same style that works well in strong GitHub READMEs: short summary, business value, technical rigor, and measurable outcomes where possible.[9][14]

### 11. Future-ready placeholders

Architect the site so these can be added later without redesign:
- floating AI chatbot
- interactive analytics demo
- blog / notes section
- filtered projects by category

### 12. Final quality bar

The finished site should feel like:
- a modern ML/AI engineer portfolio
- a serious recruiter-facing project showcase
- a product-minded engineering website

It should **not** feel like:
- a beginner resume website
- a template copied from a generic portfolio
- a plain grid of repos with little story[5][7]

## Execution steps for Cursor

1. Scaffold a Vite React app.
2. Install dependencies: router, framer-motion, icons.
3. Configure routes and layout.
4. Build dark theme design system.
5. Create structured project data file.
6. Build homepage sections.
7. Build featured project cards.
8. Build all-projects page.
9. Build dynamic project detail page.
10. Add resume/contact/about pages.
11. Add responsive polish and motion.
12. Add GitHub Actions deploy workflow.
13. Test locally with `npm run dev` and production with `npm run build`.
14. Push to `main` for Pages deployment.[2][4]

## Input expected from Amit

Cursor should expect the user to paste or provide:
- top 6 featured project metadata
- all remaining project metadata later
- resume PDF
- GitHub profile link
- LinkedIn link
- email
- project screenshots
- optional headshot

## Deliverable

Deliver a complete React + Vite codebase for `amitvaghela19.github.io` with:
- dark theme
- animated homepage
- featured project showcase
- project detail pages
- responsive layout
- GitHub Actions deployment
- clean maintainable structure for future expansion.[2][4]