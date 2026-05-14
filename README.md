# React Hooks State Lab - Shopping App

A simple grocery shopping app built with React, demonstrating the use of core React Hooks (`useState`, `useCallback`, `useMemo`) for state management.

## Features

-  **Dark Mode Toggle** -Switch between light and dark themes
-  **Add to Cart** -Add products to your shopping cart (no duplicates)
-  **Category Filtering**- Filter products by category (All, Fruits, Dairy)
-  **Cart Count**-Displays the total number of items in the cart

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)- development server & bundler
- [Material UI](https://mui.com/)- UI components
- [CSS Modules](https://github.com/css-modules/css-modules)-scoped styling
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)-testing

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iankinoti-cloud/lab-react-hooks-state.git
   cd lab-react-hooks-state
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm test` | Runs the test suite |

## Project Structure

```
src/
├── components/
│   ├── Cart.jsx           # Cart display component
│   ├── DarkModeToggle.jsx # Theme toggle button
│   ├── ProductCard.jsx    # Individual product card
│   └── ProductList.jsx    # Filtered list of products
├── styles/
│   ├── DarkMode.module.css
│   └── ProductCard.module.css
├── App.jsx                # Root component with state logic
└── main.jsx               # App entry point
```

## License

Free to use for learning purposes.
