/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "background": "var(--background)",
        "surface": "var(--surface)",
        "on-primary": "var(--on-primary)",
        "on-secondary": "var(--on-secondary)",
        "on-surface": "var(--on-surface)",
        "form-field-fill": "var(--form-field-fill)",
        "surface-border": "var(--surface-border)",
      },
      boxShadow: {
        'sm': '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
        'md': '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
        'lg': '0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
        'xl': '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)'
      }
    }
    
  },
  plugins: [],
}
