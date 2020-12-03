module.exports = {
	moduleFileExtensions: [
		'js',
		'json',
		'jsx'
	],
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest'
	},
	transformIgnorePatterns: [
		// "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
		"/node_modules/(?!react-test-renderer)"
	],
	verbose: true,
	testMatch: [
		'<rootDir>/test/*.test.js'
	],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**.{js}',
		'!**/node_modules/**'
	],
	coveragePathIgnorePatterns: [
		'node_modules'
	],
	coverageReporters: ['html', 'text-summary', 'text'],
	coverageDirectory: 'test/coverage',
	rootDir: './',
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/mock/fileMock.js",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy"
	},
	verbose: false
};
