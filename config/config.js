import path from 'path';

const { entry } = require(path.join(process.cwd(), './source/entry'));

const milieu = process.env.NODE_ENV || 'development';

export default {
	webpack: {
		entry,
		output: {
			publicPath: milieu === 'production' ? '/mido-rc/dist/' : '/'
		}
	},
	babel: {

	}
};