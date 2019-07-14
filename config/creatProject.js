const chalk = require('chalk');
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');

const {
	main
} = require('../temp/app');

process.stdin.setEncoding('utf8');
process.stdout.write('创建文件名(首字母为大写): ');

const creat = (srcDir, destDir, chunk, cb = () => {}) => {
	glob.sync('**', {
		cwd: srcDir,
		dot: true,
		ignore: [],
	}).forEach(file => {
		const fromPath = path.join(srcDir, file);
		const destPath = path.join(destDir, file);

		if (fs.existsSync(destPath)) {
			console.log(`${chalk.yellow('[警告]')}${'文件夹已存在'}`);
			process.exit(0);
		}

		if (fs.statSync(fromPath).isDirectory()) {
			fs.mkdirsSync(destPath);
		} else if (fs.statSync(fromPath).isFile()) {
			let content = fs.readFileSync(fromPath).toString();

			const reg = new RegExp(`<%=\\s*?name\\s*?%>`, 'gi');
			if (reg.test(content)) {
				content = content.replace(reg, chunk);
			}

			fs.writeFileSync(destPath, content);
		}

		if (fs.statSync(destPath).isFile()) {
			const baseName = path.basename(destPath, '.js');
			const testName = path.basename(destPath, '.test.js');
			if (baseName === 'name') {
				fs.renameSync(destPath, `${destDir}/${chunk}.js`);
			}
			if (testName === 'name') {
				fs.renameSync(destPath, `${destDir}/test/${chunk}.test.js`);
			}
		}

	});

	cb();
	console.log(`${chalk.green('[成功]')}${'构建完成'}`);
	process.exit(0);
};

// 写入main
const writeMain = () => {
	// 先删除main
	fs.unlink(path.join(process.cwd(), 'src/web/main.js'));
	const project = path.join(process.cwd(), 'src/web');

	fs.readdirSync(project, {
		encoding: 'utf-8'
	}).forEach(file => {
		// 文件路径
		const filePath = path.join(project, file);

		// 文件状态
		const fileStat = fs.statSync(filePath);

		if (fileStat.isDirectory()) {
			fs.outputFileSync(`${process.cwd()}/src/main.js`, main(file));
		}
	})
}

process.stdin.on('data', (chunk) => {

	console.log(`${chalk.grey('正在创建，请稍后...')}`);

	const newChunk = chunk.replace(/[\r\n]/, '');

	const srcDir = path.join(process.cwd(), 'temp', 'creatProject');

	const destDir = path.join(process.cwd(), 'src/web', newChunk);

	creat(srcDir, destDir, newChunk, writeMain);

});