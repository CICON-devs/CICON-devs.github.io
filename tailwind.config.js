/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
    theme: {
      extend: {
        colors: {
          accent: '#6D8B74',
          'accent-dark': '#3b4a3f',
          'accent-darker-light': '#9eb0a2',
          'accent-light': '#eaece1',
          'accent-lighter': '#f5f5f5',
          'accent-blue': '#5a8d8c',
          'accent-navy': '#275a5a',
          'accent-header': '#ffffff',
          'accent-footer': '#000000',
        },
        fontFamily: {
          mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
        borderWidth: { thick: '2px' },
      },
    },
    plugins: [],
  }
  