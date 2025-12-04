import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Hito-2-PizzeriaMammaMia-React-CamiloRiquelme/",  // 👈 importantísimo
})
