import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/package-browser/', // For GitHub Pages deployment

  build: {
    rollupOptions: {
      output: {
        // Entry file for JavaScript
        entryFileNames: 'main.js', // Ensure JS is named main.js
        // Chunk file names if you want to bundle them together (optional)
        chunkFileNames: 'main.js', // All chunks will go into main.js (optional, use with caution)
        // Asset file names (CSS)
        assetFileNames: 'style.css', // Ensure CSS is named style.css
      },
    },
    // To split CSS into its own file
    cssCodeSplit: true,
  },

  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from pre-bundling
  },
});
