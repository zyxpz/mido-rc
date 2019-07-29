/**
 * 设置预览html
 */
exports.setHtml = (file, milieu) => {
	return `<!DOCTYPE html>
  <html lang="zh">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${milieu === 'production' ?
		'<link rel="stylesheet" href="../styles.css"></link>' :
		'<link rel="stylesheet" href="./styles.css"></link>'}
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdn.bootcss.com/react/16.8.6/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcss.com/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
    ${milieu === 'production' ?
		'<script src="../commons.js"></script> <script src="../styles.js"></script>' :
		'<script src="./commons.js"></script> <script src="./styles.js"></script>'}
    <script src="./${file}.js"></script>
  </body>
  </html>`;
};

/**
 * 设置预览js
 */
exports.setIndex = (name, file) => {
	return `import './${name}.html';
         import '${file}';`;
};

/**
 * 设置entry
 */
exports.webpackEntry = (arr) => {
	const d = arr.map(item => {
		return `'${[item.name]}': '${item.path}'
    `;
	});
	return `exports.entry = {
    index: '${process.cwd()}/source/index.html',
    ${d}
  }`;
};

/**
 * 组件写入main
 */
exports.main = (arr) => {
	const d = arr.map(item => {
		return `
    export { default as ${item.name} } from '${process.cwd()}/src/web/${item.name}';\n
    `;
	});
	return d;
};