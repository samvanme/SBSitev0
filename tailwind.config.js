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
      animation: {
        'aurora': 'aurora 15s ease-in-out infinite alternate',
        'float': 'float 20s ease-in-out infinite',
        'waveform': 'waveform 1s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'rotate-beams': 'rotate-beams 20s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(10%, 5%) rotate(5deg) scale(1.1)' },
          '100%': { transform: 'translate(-5%, 10%) rotate(-5deg) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-30px, 30px) scale(0.9)' },
          '75%': { transform: 'translate(-50px, -30px) scale(1.05)' },
        },
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 171, 226, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 171, 226, 0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'rotate-beams': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
