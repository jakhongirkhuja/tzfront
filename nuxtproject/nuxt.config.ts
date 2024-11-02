export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  // Use the relative path without ".js"
  plugins: ['~/plugins/axios'],

  modules: ['@pinia/nuxt'],
  compatibilityDate: '2024-11-01',
  ssr: true
})