module.exports = {
	plugins: [
		"react"
	],
	parser: "babel-eslint",
	parserOptions: {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	env: {
        "node": true,
        "browser": true,
        "es6": true
    },
	extends: ["eslint:recommended", "plugin:react/recommended"],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/prop-types': 2,
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'max-len': ["error", { "code": 80, "ignoreTrailingComments": true, "ignoreComments": true }],
		'quotes': ['error', 'single', {'avoidEscape': true}],
		'semi': [
			'error',
			'always'
		],
		"no-console": "off"
	}
};