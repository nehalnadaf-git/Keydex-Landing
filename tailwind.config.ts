import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
          border: "#E2E8F0",
          shelf: "#BAC3D0",
        },
        accent: {
          DEFAULT: "#007AFF",
          hover: "#0066D6",
          light: "#EBF5FF",
          glow: "rgba(0, 122, 255, 0.15)",
        },
        shark: {
          DEFAULT: "#1D1D1F",
          muted: "#64748B",
          faint: "#94A3B8",
        },
        emerald: {
          DEFAULT: "#10B981",
          light: "#ECFDF5",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        "keycap": "0 3.5px 0 #BAC3D0, 0 4px 6px -1px rgba(0, 0, 0, 0.08)",
        "keycap-active": "0 1px 0 #BAC3D0, 0 1px 2px rgba(0, 0, 0, 0.1)",
        "porcelain-card": "0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        "floating-chip": "0 14px 28px -6px rgba(0, 122, 255, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        "modal": "0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "pill": "9999px",
        "card": "24px",
      }
    },
  },
  plugins: [],
};

export default config;

