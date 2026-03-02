# Gemini Project Context & Rules

> **SYSTEM INSTRUCTION:** This file is the **MASTER CONTEXT**. If the IDE freezes or context is lost, read this file to resume work immediately.

## 0. 📝 CURRENT SESSION CONTEXT (Update this section to save state)

- **Current Goal:** Revert theme color to Blue.
- **Last Successful Step:** Added global button styles (but with wrong color).
- **Current Error/Blocker:** User prefers Blue buttons/footer over the reddish brand color.
- **Next Step:** Update CSS variables and generate Navigation/Footer.

## 1. Project Overview

- **Name:** Sarthak Enterprises Website
- **Description:** A corporate website for Sarthak Enterprises to showcase their services, projects, organizational structure, and provide contact information.
- **Core Business Areas:**
  1. **Infrastructure & Construction Projects**
  2. **Skilled Manpower Services**
  3. **Solar Panel Installations**
- **Key Goals:** Mobile-first responsive design, ensuring a seamless experience on all screen sizes.

## 2. Tech Stack

- **Frontend:** Angular, SCSS
- **Backend:** Not applicable (Frontend application)
- **Language/Typing:** TypeScript (Strict mode enabled)
- **Testing:** Karma, Jasmine

## 3. Architecture & Directory Structure

- `/src/app/` - Core application components and routing.
- `/src/app/<feature-name>/` - Individual page components (e.g., `/home`, `/about`). Each contains component-specific HTML, SCSS, and TypeScript files.
- `/src/assets/` - Static assets like images and JSON data.
- `/src/styles.scss` - Global stylesheets.
- `/src/main.ts` - Main entry point for the application.

## 4. Coding Conventions

- **Style:** Follow standard Angular style guides. Use early returns to avoid deep nesting.
- **Naming:** Use `PascalCase` for components/classes (e.g., `HomeComponent`), `camelCase` for variables/functions (e.g., `getUserData`), and `kebab-case` for file names (e.g., `home.component.ts`).
- **State Management:** Services are used for shared logic and data (e.g., `ContactInfoService`). For component-level state, use component properties.
- **Error Handling:** Always wrap asynchronous calls in try/catch blocks or use `.catch()` for Promises. Use Angular's built-in error handling mechanisms where appropriate.
- **Responsiveness:** Implement mobile-first CSS. Styles should target mobile by default, with media queries (using `min-width`) to add or adjust styles for larger screens.
- **Typography & Colors:**
  - Use `#0056b3` (Corporate Blue) for all headers, titles, buttons, and navigation text.
  - Use `black` for all paragraph text.

## 5. Strict Rules for AI Generation

- ALWAYS write strongly typed code
- NEVER use third-party libraries for simple utilities unless explicitly requested.
- ALWAYS include a brief inline comment explaining complex logic.
- When generating tests, aim for testing user behavior over implementation details.
- ALWAYS build components with a mobile-first approach. Ensure layouts are fluid and adapt correctly to different viewport sizes.
- The navigation bar background must be white.
- **NO INVENTION/HALLUCINATION:** Do not invent content (services, projects, people, stats). Use ONLY the provided Core Business Areas or data explicitly given by the user.
- **Context Recovery:** Before starting any task, review Section 0 of this file to understand the current state.
