import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    // Docs: https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
    vuetify({
      styles: {
        configFile: 'src/assets/styles/variables/_vuetify.scss',
      },
    }),
    Components({
      dirs: ['src/@core/components', 'src/components'],
      dts: true,
    }),

    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math', 'pinia'],
      vueTemplate: true,

      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ['useCookies'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    svgLoader(),
  ],
  define: { 'process.env': {
      VITE_GOOGLE_CLIENT_ID: JSON.stringify(process.env.VITE_GOOGLE_CLIENT_ID),
      VITE_GOOGLE_CLIENT_SECRET: JSON.stringify(process.env.VITE_GOOGLE_CLIENT_SECRET),
  } },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles/', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/assets/styles/variables/_template.scss', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 50000,
    // Optimize bundle output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks for better caching
          'vendor': ['vue', 'vue-router', 'pinia'],
          'axios': ['axios'],
          'vuetify': ['vuetify'],
          'chart': ['chart.js'],
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
    // Prebundle dependencies to improve startup time
    include: ['axios', 'chart.js', 'marked', 'mitt']
  },
  server: {
    // Enable HMR for faster development
    hmr: true,
    // Optimize server cold-start time
    warmup: {
      clientFiles: ['./src/main.js']
    },
    host: true, // Listen on all addresses
    port: 5050,
    proxy: {
      '/api': {
        target: 'https://gateway.berkompeten.id',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
  preview: {
    host: true, // Listen on all addresses including localhost and network
    port: 5050,
    strictPort: true,
    allowedHosts: ['localhost', '127.0.0.1', 'app.berkompeten.id']
  }
})
