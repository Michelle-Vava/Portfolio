# Michelle Vava - Senior Frontend Portfolio

A production-grade personal portfolio engineered to demonstrate full-stack capabilities, modern frontend architecture, and attention to detail.

![Portfolio Banner](./src/assets/me.jfif)

## 🚀 Key Features

*   **Interactive "Fan Deck" Gallery:** Custom Framer Motion animations for project showcasing.
*   **System Design Case Studies:** Dedicated deep-dive sections into architecture and backend choices.
*   **Parallax & Micro-interactions:** Mouse-aware hero background and scroll-linked navigation.
*   **Mobile-First Design:** Fully accessible spring-physics mobile navigation.
*   **Performance Optimized:** Route-based code splitting and lazy loading for heavy assets.
*   **Dark Mode / Theming:** Custom Tailwind v4 theme configuration (Mint/Dark).

## 🛠️ Tech Stack

*   **Runtime:** React 18
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4 (Alpha/Beta features enabled) + Autoprefixer
*   **Animation:** Framer Motion (Complex shared layout animations)
*   **Icons:** Lucide React
*   **Testing:** Vitest + React Testing Library

## 🏗️ Architecture

The codebase is structured to separate content from presentation, treating the portfolio content as a "headless" config source.

```
src/
├── components/       # Presentational components (Hero, About, Projects)
├── config/           # Content & Data Layer (constants.ts)
├── assets/           # Optimized static assets
└── test/             # Unit tests
```

## 🚦 getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Michelle-Vava/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Run Tests**
    ```bash
    npm test
    ```

5.  **Build for Production**
    ```bash
    npm run build
    ```

## 🧪 Testing

The project uses **Vitest** for unit testing.
*   `src/test/Hero.test.tsx`: Validates core render logic and data injection.

Run tests with:
```bash
npm test
```

## 📄 License

MIT License © 2026 Michelle Vava
