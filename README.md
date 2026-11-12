# Fly 748 booking

## Deploy the website to GitHub Pages

The `Deploy Vite app to GitHub Pages` workflow builds and deploys the frontend when changes are pushed to `main`. In the repository, open **Settings > Pages** and select **GitHub Actions** as the build and deployment source.

The workflow sets Vite's base path for the repository's GitHub Pages URL, `https://muriukikelly7-lang.github.io/fly748new/`, so built assets load from the project subpath.

## Backend and sign-in

GitHub Pages hosts only the static frontend; it cannot run the Express API. Host this project's Node backend separately, then add a repository Actions variable named `VITE_API_BASE_URL` with the backend's public origin (for example, `https://api.example.com`, without a trailing slash). The backend must allow requests from the website's domain.

Run the backend with `npm run start:server`. Configure its environment with `PORT` (provided by most hosts), `MAIL_PROVIDER=smtp`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and optionally `FROM_EMAIL`. Keep SMTP credentials on the backend host; do not add them to GitHub Actions variables or frontend code. After changing `VITE_API_BASE_URL`, push a commit or run the Pages workflow again to rebuild the frontend.

For local development, run `npm run dev:all`. The Vite development server proxies `/api` requests to the local backend on port 4000.
