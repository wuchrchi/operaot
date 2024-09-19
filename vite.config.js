import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

const path = require('path')

export default defineConfig({
  base: '/operator', // 'operator' 是你的 GitHub repo 名稱
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/operator'
    : '/'
}
