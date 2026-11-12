# Fly 748 booking

## Deploy the website to GitHub Pages

The `Deploy Vite app to GitHub Pages` workflow builds and deploys the frontend when changes are pushed to `main`. In the repository, open **Settings > Pages** and select **GitHub Actions** as the build and deployment source.

The workflow uses a relative Vite base path so the site loads correctly from GitHub Pages project URLs and from a configured custom domain. The custom domain is `fly748airlines.com` (the deployed site includes the required `CNAME` file). To connect it through Cloudflare:

1. Add `fly748airlines.com` in the repository **Settings > Pages > Custom domain**.
2. In Cloudflare **DNS**, add four A records for `fly748airlines.com`, with the values `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Set each record to **DNS only** while GitHub verifies the domain and provisions HTTPS.
3. Optionally add a **DNS only** CNAME record for `www` pointing to `muriukikelly7-lang.github.io`.
4. Wait for DNS to propagate, then enable **Enforce HTTPS** in **Settings > Pages**.

## Backend and sign-in

GitHub Pages hosts only the static frontend; it cannot run the Express API. Host this project's Node backend separately, then add a repository Actions variable named `VITE_API_BASE_URL` with the backend's public origin (for example, `https://api.example.com`, without a trailing slash). The backend must allow requests from the website's domain.

Run the backend with `npm run start:server`. Configure its environment with `PORT` (provided by most hosts), `MAIL_PROVIDER=smtp`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and optionally `FROM_EMAIL`. Keep SMTP credentials on the backend host; do not add them to GitHub Actions variables or frontend code. After changing `VITE_API_BASE_URL`, push a commit or run the Pages workflow again to rebuild the frontend.

For local development, run `npm run dev:all`. The Vite development server proxies `/api` requests to the local backend on port 4000.
