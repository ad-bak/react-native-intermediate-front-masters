// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ["expo", "prettier"],
	plugins: ["prettier", "react-native"],
	rules: {
		"prettier/prettier": ["error", { useTabs: true }],
		"react-native/no-unused-styles": "error",
		"react-native/no-inline-styles": "error",
	},
};
