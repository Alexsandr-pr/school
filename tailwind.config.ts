import type { Config } from "tailwindcss"


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  	prefix: "",
	theme: {
		screens: {
			"2sm": "480px",
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		boxShadow: {
			'main': '0px 0px 8px 0px rgba(59, 130, 246, 0.12)',
		},
		fontFamily: {
			inter: "var(--font-inter)",
		},
		colors: {
			grey: {
				100: "#F1F5F9",
				300: "#CBD5E1",
				600: "#475569",
				700:"#334155",
				800:"#1D2939",
				900: "#0F172A",
				border: "#E2E8F0",
				textDark:"#020617",
				disableColor:"#94A3B8",
				background: "#F8FAFC",
				textLight: "#64748B"
			  },
			  white: "#FFF",
			  black: "#000",
			  primary: {
				50: "#EFF6FF",
				100: "#E0F2FE",
				500: "#3B82F6",
				600: "#2563EB"
			  },
			  blue: "#0866FF",
			  warning: {
				300: "#FEC84B",
				400: "#FACC15",
				500: "#EAB308",
				600: "#CA8A04"
			  },
			  active: {
				400: "#4ADE80",
				500: "#22C55E",
				600: "#16A34A",
			  },
			  error: {
				50:"#FEF2F2",
				500: "#EF4444",
				600: "#DC2626"
			  },
			  brand: {
				100: "#165DFF"
			  },
			  v2040Cyan: {
				100: "#0FC6C2"
			  },
			  text3: "#86909C",
		
		}
		
	},
	
} satisfies Config

export default config