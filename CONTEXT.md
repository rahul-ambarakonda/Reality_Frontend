```markdown
## CONTEXT.md

This document provides a high-level overview of the `Reality_Frontend` project.

### What This Project Does

This project, named `Reality_Frontend`, serves as the user interface (frontend) for a larger "Reality" application. It is described as a "Demo App," indicating its purpose is to demonstrate key features and functionalities of the "Reality" platform. As a frontend, it is responsible for rendering the user interface, handling user interactions, and communicating with a backend API (not included in this repository) to fetch and submit data.

### Tech Stack and Architecture

*   **Tech Stack:**
    *   **Frontend Framework:** React
    *   **Language:** TypeScript
    *   **Build Tool/Dev Server:** Vite
    *   **State Management:** Zustand
    *   **Routing:** React Router DOM
    *   **Styling:** Tailwind CSS
    *   **API Client:** Axios (for HTTP requests)
*   **Architecture:** This is a **Single Page Application (SPA)**, providing a dynamic and responsive user experience by loading a single HTML page and dynamically updating content as the user interacts. It communicates with a RESTful backend API. The application follows a component-based architecture.

### Key Directories and Their Purpose

The project's directory structure is as follows:

*   **`public/`**: Contains static files such as `index.html` and the favicon, served directly.
*   **`src/`**: Contains the main application source code.
    *   **`src/components/`**: Reusable UI components (e.g., buttons, cards, forms).
    *   **`src/pages/`**: Top-level components representing distinct application screens or routes.
    *   **`src/utils/`**: Utility functions, common helpers, and non-UI logic.
    *   **`src/api/`**: Modules for interacting with the backend API, including API client configuration and request logic.
    *   **`src/store/`**: Manages global application state using Zustand.
    *   **`src/assets/`**: Static assets like images, fonts, and global stylesheets.
    *   **`src/hooks/`**: Custom React hooks for encapsulating reusable logic.
    *   **`src/types/`**: TypeScript type definitions and interfaces.
    *   **`src/styles/`**: Global stylesheets and Tailwind CSS configuration.
*   **`dist/`**: The output directory for the compiled and bundled application, ready for deployment.
*   **`config/`**: Contains configuration files for environment variables (e.g., `.env` files).

### Important Conventions or Patterns

The project adheres to the following conventions and best practices:

*   **Component-Based Architecture:** Emphasizes the creation of small, reusable, and self-contained UI components for modularity and maintainability.
*   **State Management:** Utilizes Zustand for efficient and centralized management of global application state.
*   **Route-Based Navigation:** Implements client-side routing using React Router DOM for seamless navigation between different pages/views without full page reloads.
*   **Consistent Code Style:** Enforces a unified coding style and formatting via **ESLint** and **Prettier** to ensure readability and maintainability across the codebase.
*   **API Client Abstraction:** Centralizes logic for making API calls, handling authentication, and error reporting within the `src/api/` directory.
*   **Environment Configuration:** Utilizes environment variables (via `.env` files) for managing different deployment targets (development, staging, production) and sensitive information.
*   **Type Safety:** Leverages **TypeScript** across the entire codebase to enhance code quality, reduce bugs, and improve developer experience through static type checking.
*   **Testing:** Basic unit and integration tests are set up, typically using tools like Vitest and React Testing Library.
```