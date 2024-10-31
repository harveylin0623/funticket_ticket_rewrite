/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      screens: {

      },
      colors: {
        'primary-1': '#FF8637',
        mask: 'rgba(0,0,0,0.6)'
      }
    }
  }
}
