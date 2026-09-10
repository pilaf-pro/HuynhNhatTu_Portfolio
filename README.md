# 🚀 Huynh Nhat Tu - Personal Portfolio

A modern, highly responsive, and visually interactive Frontend Developer Portfolio web application. Built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## 🛠 Tech Stack

- **Core Framework**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling & UI**: [Tailwind CSS v4](https://tailwindcss.com/), Material UI Icons (`@mui/icons-material`), Lucide Icons (`lucide-react`)
- **Routing**: [React Router v7](https://reactrouter.com/) (`createBrowserRouter`, `RouterProvider`)
- **Fuzzy Search**: [Fuse.js](https://www.fusejs.io/)
- **Form & Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Code Quality & Formatting**: [Prettier](https://prettier.io/), [ESLint](https://eslint.org/)

---

## 💻 Installation & How to Run (Cách chạy dự án)

### Prerequisites

Make sure you have **Node.js** (v18+) or **Bun** installed on your system.

### 1. Clone the repository & Navigate to project

```bash
cd /path/to/HuynhNhatTu_Portfolio
```

### 2. Install dependencies

Using **npm**:

```bash
npm install
```

_Or using **bun** (recommended):_

```bash
bun install
```

### 3. Start Development Server

Using **npm**:

```bash
npm run dev
```

_Or using **bun** (recommended):_

```bash
bun run dev
```

The application will start locally (typically at `http://localhost:5173` or `http://localhost:5174`).

### 4. Build for Production

Using **npm**:

```bash
npm run build
```

_Or using **bun** (recommended):_

```bash
bun run build
```

### 5. Format Code with Prettier

```bash
npm run format
# or
bun run format
```

---

## ✨ Key Features

- 🛣️ **Separate Route Architecture**: Routes configured cleanly in `src/routes/index.tsx` using `createBrowserRouter` and `RouterProvider`.
- ⌨️ **Typewriter & Blinking Cursor Animation**: Custom `useTypewriter` hook and `Typewriter` component on the Home page cycling through titles with a realistic blinking terminal cursor.
- 🔍 **Fuzzy Search & Tag Filter (Fuse.js)**: Real-time fuzzy searching on the Projects page matching titles, descriptions, and tech stacks, combined with tag filtering and an Empty State view.
- 📊 **Decoupled Data Architecture**: Clean separation of skills data (`src/data/skillsData.tsx`) and projects data (`src/data/projects.json`).
- 📝 **Contact Form Validation**: Full client-side form validation built with React Hook Form and Zod schema validation.
- 🎨 **Modern Glassmorphism UI**: Beautiful radial ambient glows, card glassmorphism, responsive font scaling, and smooth hover micro-animations.
- 🎬 **Page & Motion Animations**: Seamless page transitions and scroll-triggered animations powered by Framer Motion.
- 🚫 **Custom 404 NotFound Page**: Animated 404 page handling invalid routes gracefully.
- 🧹 **Code Formatting**: Prettier configuration (`.prettierrc`, `.prettierignore`) enforcing consistent code style across the codebase.
