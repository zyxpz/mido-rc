import path from 'path';

const { entry } = require(path.join(process.cwd(), './source/entry'));

export default {
	webpack: {
		entry,
	},
	babel: {

	}
};