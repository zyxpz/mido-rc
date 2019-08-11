module.exports = {
	setupFiles: ['<rootDir>/config/jest.setup.js'], // 运行测试前可执行的脚本（比如注册enzyme的兼容）
	transform: {
		'^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest'
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/'], // 转换时需忽略的文件
	testMatch: ['<rootDir>/src/web/**/__test__/*.test.(js|jsx|mjs)'],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/__mocks__/fileMock.js",
		"\\.(css|less|scss)$": "<rootDir>/config/__mocks__/styleMock.js"
	},
	moduleFileExtensions: [
		'js',
		'jsx',
	],
};