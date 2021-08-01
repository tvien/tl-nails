module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Sailec', 'ui-sans-serif', 'system-ui'],
		},
		extend: {},

		transitionDuration: {
			60000: '60000ms',
		},

		container: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	variants: {
		extend: {},
		scale: ['responsive', 'hover', 'focus', 'group-hover'],
		transform: ['responsive', 'group-hover'],
		// transformOrigin: ['responsive'],
		// transitionDelay: ['responsive'],
		// transitionDuration: ['responsive'],
		// transitionProperty: ['responsive'],
		// transitionTimingFunction: ['responsive'],
		translate: ['responsive', 'hover', 'focus', 'group-hover'],
		extend: {},
	},
	plugins: [],
}
