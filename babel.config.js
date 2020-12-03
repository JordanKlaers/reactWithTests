module.exports = {
	"presets": [
		[
			"@babel/preset-env", {
				"targets": {
					"browsers": [
						"last 2 Chrome versions",
						"last 2 Firefox versions",
						"last 2 Safari versions",
						"last 2 iOS versions",
						"last 1 Android version",
						"last 1 ChromeAndroid version",
						"ie 11"
					],
					"node": "current"
				}
			},
			"@babel/preset-react"
		]
	],
	"plugins": [
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-syntax-jsx",
		"@babel/plugin-transform-modules-commonjs"
	]
};
