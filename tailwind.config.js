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
        'primary-1': '#7f74b4',
        'primary-2': '#5a566f',
        'primary-3': 'var(--main-bg-color)',
        'secondary-1': '#6c757d',
        'secondary-2': '#797979',
        'secondary-3': '#898d92',
        'secondary-4': '#b5b5b5',
        'modal-button': '#007aff',
        mask: 'rgba(0,0,0,0.6)'
      },
      boxShadow: {
        primary: '0 0 12px 0 rgba(0, 0, 0, 0.08)'
      }
    }
  }
}
