const plugin = require("tailwindcss/plugin");

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
	addUtilities({
		".rotate-y-0": {
			transform: "rotateY(0deg)",
		},
		".rotate-y-90": {
			transform: "rotateY(90deg)",
		},
	});
});

const delay = plugin(function ({ addUtilities }) {
	addUtilities({
		".delay-0": {
			transitionDelay: "0",
		},
	});
});

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {},
	},
	plugins: [rotateY, delay],
};
