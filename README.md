# SustAInd Website

This is the official website for the SustAInd project.

## Contributing

To make any changes to the website, please follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/sa4s-serc/sustaind.git
   ```
2. Make your changes.
3. Test the changes locally:
   ```bash
   bun install
   npm run dev
   ```
4. Build the project:
   ```bash
   npm run build
   ```
   The final build will be available in the `docs` directory, which will be served by GitHub Pages.
   
   **Important: Make sure you create an empty .nojekyll file in the `docs` directory to ensure GitHub Pages serves the site correctly.**
5. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
6. Push your changes:
   ```bash
   git push origin main
   ```