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
        // Thinking state animations
        'thinking-dots': 'thinking-dots 1.4s ease-in-out infinite',
        'thinking-typing': 'thinking-typing 1s step-end infinite',
        // Progress animations
        'progress-indeterminate': 'progress-indeterminate 1.5s ease-in-out infinite',
        // Transition animations
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
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
        // Thinking dots - opacity pulse
        'thinking-dots': {
          '0%, 80%, 100%': { opacity: '0.3' },
          '40%': { opacity: '1' },
        },
        // Thinking typing - cursor blink
        'thinking-typing': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // Progress indeterminate - sliding bar
        'progress-indeterminate': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        // Fade in
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Slide up
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Scale in
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
