# Eugene P. Gardose - Full Stack Developer Portfolio

A robust, responsive, and professional portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### Option 1: Using Docker (Recommended since you have it installed)

1.  **Run the development server:**
    ```bash
    docker run --rm -it -p 3000:3000 -v "%cd%:/app" -w /app node:lts npm run dev
    ```
    *(Note: On PowerShell use `${PWD}` instead of `%cd%`, on Git Bash use `$(pwd)`)*

2.  **Open your browser:**
    Go to [http://localhost:3000](http://localhost:3000)

### Option 2: Using Local Node.js

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 🛠️ Tech Stack

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Icons:** React Icons
*   **Language:** TypeScript

## 📁 Project Structure

*   `app/`: Main application code (pages, layouts, globals.css).
*   `components/`: Reusable UI components (Hero, About, Projects, etc.).
*   `lib/data.ts`: **EDIT THIS FILE** to update your content (Bio, Skills, Projects).

## 📝 Customization

1.  **Edit Content:** Open `lib/data.ts` to change text, links, and project details.
2.  **Images:** Place your images in the `public/` folder and update the paths in `lib/data.ts` or `components/hero.tsx`.
