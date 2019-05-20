const fs = require('fs-extra');

const path = require('path');

const { setHtml, setIndex, webpackEntry } = require('../temp/app');

const tpl = require('art-template');

const indexHtml = require('../temp/index.art');

let cpName = ''; // component Name
let etName = ''; // webpack entry name
let webpackEntryArr = []; // webpackEntryArr
let cpNameArr = [];


// 设置webpack所需entry
const setWebpackEntry = () => {
	const directory = path.join(process.cwd(), 'source');

	fs.readdirSync(directory, {
		encoding: 'utf-8'
	}).forEach(file => {
		// 文件路径
		const filePath = path.join(directory, file);
		const fileState = fs.statSync(filePath);

		if (fileState.isDirectory()) {
			etName = file;

			const obj = {
				name: etName,
				path: `${process.cwd()}/source/${etName}/index.js`
			};

			webpackEntryArr.push(obj);
		}
	});

	const etContent = webpackEntry(webpackEntryArr);

	fs.outputFileSync(`${process.cwd()}/source/entry.js`, etContent);
};


const getEntryFile = (dir) => {
	const directory = path.join(process.cwd(), 'src', dir);

	fs.readdirSync(directory, {
		encoding: 'utf-8'
	}).forEach(file => {
		// 文件路径
		const filePath = path.join(directory, file);

		// 文件状态
		const fileStat = fs.statSync(filePath);

		if (fileStat.isDirectory() && file !== 'index') {
			const subdir = path.join(dir, file, 'examples');
			cpName = file;
      
			cpNameArr.push(cpName);

			getEntryFile(subdir);
		} else if (fileStat.isFile()) {
			// 文件后缀
			const fileExtName = path.extname(filePath);
			if (fileExtName === '.js') {
				// 生成html
				const cpHtml = setHtml(`${cpName}-example`);
				// 生成js
				const cpJs = setIndex(cpName, filePath);

				fs.outputFileSync(`${process.cwd()}/source/${cpName}/${cpName}.html`, cpHtml);
				fs.outputFileSync(`${process.cwd()}/source/${cpName}/index.js`, cpJs);
			}
		}
    
		if (file === 'index') {
			const cpList = [];

			cpNameArr.forEach(item => {
				cpList.push({ name: item, 
					file: `/${item}.html` });
			});

			const buildIndexHtml = indexHtml({ cpList });
			fs.outputFileSync(`${process.cwd()}/source/index.html`, buildIndexHtml);
		}
	});
};

getEntryFile('web');
setWebpackEntry();
