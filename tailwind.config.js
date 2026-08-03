/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        bg: "#050816",
        elevated: "#0a0f1e",
        accent: "#3B82F6",
        "accent-light": "#60A5FA",
        "accent-dark": "#2563EB",
        highlight: "#8AB8FF",
        surface: "rgba(255,255,255,0.05)",
        "surface-hover": "rgba(255,255,255,0.08)",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.15)",
        "text-secondary": "rgba(255,255,255,0.65)",
        "text-tertiary": "rgba(255,255,255,0.4)",
        "text-muted": "rgba(255,255,255,0.25)",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.08), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(138,184,255,0.06), transparent), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(59,130,246,0.04), transparent)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        "accent-gradient": "linear-gradient(135deg, #3B82F6, #60A5FA)",
        "text-gradient": "linear-gradient(180deg, #ffffff, rgba(255,255,255,0.7))",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "float-slow": "floatSlow 20s ease-in-out infinite",
        "float-reverse": "floatSlow 25s ease-in-out infinite reverse",
        "scroll-partners": "scrollPartners 30s linear infinite",
        "pulse-dot": "pulseDot 2s ease infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -30px)" },
          "50%": { transform: "translate(-15px, 20px)" },
          "75%": { transform: "translate(25px, 15px)" },
        },
        scrollPartners: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59,130,246,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(59,130,246,0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.15)",
        "glow-lg": "0 0 80px rgba(59,130,246,0.2)",
        "card": "0 4px 16px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.4)",
        "card-xl": "0 16px 64px rgba(0,0,0,0.5)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;