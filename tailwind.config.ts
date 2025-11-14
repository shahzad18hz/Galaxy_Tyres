import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", // 9px
        md: ".375rem", // 6px
        sm: ".1875rem", // 3px
      },
      colors: {
        // Default colors
        background: "#ffffff",
        foreground: "#000000",
        border: "#e5e7eb", // ✅ added to fix border-border issue

        primary: {
          DEFAULT: "#1d4ed8", // blue-700
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#64748b", // slate-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f59e0b", // amber-500
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#ffffff",
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Cairo", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
        arabic: ["Cairo", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
