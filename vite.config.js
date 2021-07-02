import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/dist/',
  base: process.env.NODE_ENV === 'production' ? '/vue3-element3-admin/dist/' : '/',
  plugins: [vue()]
})
