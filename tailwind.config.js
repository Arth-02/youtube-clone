/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        hover: "hsl(var(--hover))",
        hoveractive: "hsl(var(--hover-active))",
        descriptionbg: "hsl(var(--description-bg))",
        descriptionactivebg: "hsl(var(--description-active-bg))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        chipselection: {
          DEFAULT: "hsl(var(--chip-selection))",
          foreground: "hsl(var(--chip-selection-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        ripple: {
          from: {
            transform: "scale(0)",
            opacity: 1,
          },
          to: {
            transform: "scale(2)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ripple": "ripple 0.8s ease-out",
      },
      fontFamily: {
        roboto: ["var(--roboto)", ...fontFamily.sans],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "600",
      },
      fontSize: {
        'xs': '.625rem',    // 10px
        'sm': '.75rem',     // 12px
        'my': '.8125rem',   // 13px
        'base': '.875rem',  // 14px
        'base2': '0.9375rem',  // 15px
        'lg': '1rem',       // 16px
        'xl': '1.125rem',   // 18px
        '2xl': '1.25rem',   // 20px
        '3xl': '1.5rem',    // 24px
        '4xl': '1.875rem',  // 30px
        '5xl': '2.25rem',   // 36px
        '6xl': '3rem',      // 48px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}