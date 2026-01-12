/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#00ABE2',
          'blue-dark': '#105665',
        },
        void: '#030712',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Darker Grotesque', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '30': '7.5rem',   // 120px - generous section spacing
        '36': '9rem',     // 144px - hero-level spacing
      },
      animation: {
        // Functional animations only - no decorative motion
        'waveform': 'waveform 1s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        // Waveform - shows audio state (functional)
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        // Marquee - for scrolling content (functional)
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
