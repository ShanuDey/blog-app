# Blog App

[![Build and Deployment](https://github.com/ShanuDey/blog-app/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/ShanuDey/blog-app/actions/workflows/firebase-hosting-merge.yml)

## Technologies used

- React
- Firebase
- Github Action

## Demo

<a href="https://react-blog-project-5e3f9.web.app" target="_blank" rel="noopener noreferrer">Open Application </a>

## Local Development

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ShanuDey/blog-app.git
    cd blog-app
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Setup

Create a `.env` file from `.env.example` and add your Firebase configuration keys. Note that this project uses **Vite**, so environment variables must start with `VITE_`.

### Running the App

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
