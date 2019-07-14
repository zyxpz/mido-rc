import path from 'path';

const { entry } = require(path.join(process.cwd(), './source/entry'));

export default {
	webpack: {
		entry,
		resolve: {
			alias: {
				"@": `${process.cwd()}/src`
			}
		},
		externals: {
			'react': 'React',
			'react-dom': 'ReactDOM'
		}
	},
	babel: {
		"plugins": [
			["import", {
				"libraryName": "antd-mobile",
				"libraryDirectory": "es",
				"style": true // `style: true` 会加载 less 文件
			}]
		]
	}
};