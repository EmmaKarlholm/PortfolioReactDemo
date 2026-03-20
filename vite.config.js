import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

const deployingToGitHubPages = true;

export default defineConfig({
  // For GitHub page deployment, uncomment the line below:
  // base: "/PortfolioReactDemo/",
  plugins: [react()],
})
