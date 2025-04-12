
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Aahaar Setu custom colors
				'aahaar-green': {
					50: '#f2fcee',
					100: '#e3f8db',
					200: '#c8f0b8',
					300: '#9de389',
					400: '#72d25c',
					500: '#4eb436',
					600: '#3a9229',
					700: '#2e7224',
					800: '#295b22',
					900: '#244c1f',
					950: '#0f2a0c',
				},
				'aahaar-orange': {
					50: '#fff8ed',
					100: '#ffeed4',
					200: '#ffd8a8',
					300: '#ffba70',
					400: '#ff9638',
					500: '#ff7511',
					600: '#fb5d06',
					700: '#cc4507',
					800: '#a2390e',
					900: '#84310f',
					950: '#471604',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'count-up': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'float': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0.8)', opacity: '1' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'count-up': 'count-up 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'ripple': 'ripple 1s linear infinite',
			},
			backgroundImage: {
				'bridge-pattern': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"20\" viewBox=\"0 0 100 20\" fill=\"none\"><path d=\"M0 10 Q 25 0, 50 10 Q 75 20, 100 10\" stroke=\"%23E3F8DB\" stroke-width=\"2\" fill=\"none\" /></svg>')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
