# Ayush Portfolio

## Description
A cinematic 3D space portfolio application inspired by NASA, Apple, and Awwwards, built with React and Three.js.

## Tech Stack
- React (Vite)
- JavaScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- Framer Motion
- Lenis
- Zustand
- React Router DOM

## Folder Architecture
- `.github/` - GitHub Actions workflows
- `public/` - Static assets like icons, models, textures, and sounds
- `src/` - Source files
  - `app/` - App configuration and initialization
  - `assets/` - Project specific assets (fonts, images, etc.)
  - `components/` - Reusable UI and 3D components
  - `scenes/` - Different 3D scenes (Earth, Mars, etc.)
  - `models/` - 3D models and loaders
  - `shaders/` - Custom GLSL shaders
  - `hooks/` - Custom React hooks
  - `context/` - React contexts
  - `services/` - API and external services
  - `store/` - Zustand state management
  - `utils/` - Utility functions
  - `constants/` - App constants
  - `styles/` - Global styles and Tailwind configurations
  - `data/` - Mock data and content
  - `config/` - App configurations
  - `animations/` - Animation variants and configurations
  - `types/` - JSDoc type definitions
  - `pages/` - Page components
  - `routes/` - React Router configuration
- `docs/` - Documentation
- `screenshots/` - Project screenshots

## Architecture
- **Component-driven Design**: UI is built from small, reusable components.
- **Strict Linting & Formatting**: Follow established style guides.
- **Centralized Configurations**: Constants and configurations kept in dedicated folders (`/constants`, `/config`).
- **CSS-in-JS & Tailwind**: Tailwind used primarily for styling, with custom global styles centralized in `/styles`.

## Coding Standards
- Clean, modular code structure following React best practices.
- Avoid duplicate packages or logic where native utility/helpers apply.

## Folder Rules
- **No Duplicate Folders**: Assets, utilities, and components have a strict single-source of truth.
- Empty folders should contain a `.gitkeep` file until populated.
- Modules exporting components should utilize index.js barrel files.

## Naming Rules
- **PascalCase**: Used for React components and Three.js scenes (e.g., `PlanetModel.jsx`).
- **camelCase**: Used for variables, utility functions, hooks, and standard files (e.g., `useTheme.js`, `helpers.js`).

## Sprint Workflow
- **Sprint 1.0**: Foundation & Design System (Tailwind, Tokens, Aliases, Configuration)
- **Sprint 2.0+**: UI Development, WebGL Scenes, Animations, Polish

## Future Roadmap
- Implement routing and base pages
- Add 3D scene initialization and camera controls
- Add core planet models (Earth, Moon, Mars, etc.)
- Integrate GSAP/Framer Motion for scroll and transition animations
- Post-processing rendering setup

## Installation
```bash
npm install
```

## Scripts
- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build
