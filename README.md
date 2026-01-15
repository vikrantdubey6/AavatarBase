# AavatarBase 🚀

A premium, high-performance avatar generation engine built with **Next.js 16** and **DiceBear**. Generate unique, customizable avatars served directly from your own domain.

## 🛠️ How It Works

Our engine is built to be simple, fast, and self-hosted. It works by exposing a dynamic API route that handles avatar generation on-the-fly.

1.  **Endpoint**: All avatars are served via `/api/avatar/[style]`.
2.  **Generation**: When a request hits the endpoint, we use the `@dicebear/core` library combined with specific collections (like `avataaars` or `bottts`) to generate a unique SVG.
3.  **Customization**: Query parameters like `seed` and `backgroundColor` are parsed to modify the avatar's appearance in real-time.
4.  **Local Serving**: Unlike standard implementations that rely on external APIs, this engine serves images directly from your domain, giving you full control over link persistence.

## ✨ Features

-   🎨 **30+ Styles**: Wide variety of avatar styles from abstract to character-based.
-   🔗 **Permanent Links**: Generate absolute URLs that can be used anywhere.
-   🌈 **Custom Backgrounds**: 20+ premium color presets or any hex value.
-   ⚡ **Optimized**: Fast SVG rendering with built-in caching headers.
-   📱 **Modern UI**: Dark-mode, glassmorphism design with responsive controls.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Production Build**:
    ```bash
    npm run build
    npm run start
    ```

## 🔋 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Logic**: TypeScript & React 19
-   **AavatarBase Engine**: [DiceBear](https://www.dicebear.com/)
-   **Icons & Animation**: Lucide-React & Framer Motion

---
Built with ❤️ for the open-source community.
