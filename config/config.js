import path from 'path';

const { entry } = require(path.join(process.cwd(), './source/entry'));

export default {
	webpack: {
		entry,
		resolve: {
			alias: {
				"@": `${process.cwd()}/src`
			}
		}
	},
	babel: {

	}
};