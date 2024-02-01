import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-social-media/', // for github page
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: fileURLToPath(new URL('./types', import.meta.url)),
      },
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      // #/xxxx => types/xxxx
      {
        find: /#\//,
        replacement: fileURLToPath(new URL('./types', import.meta.url)),
      },
    ],
  },
})
