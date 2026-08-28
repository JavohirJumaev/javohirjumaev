import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
  extend: {
    keyframes: {
      "fade-up": {
        "0%": { opacity: "0", transform: "translateY(12px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-up": "fade-up 0.6s ease-out both",
    },
  },
},
})
