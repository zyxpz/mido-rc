/**
 * 设置预览html
 */
exports.setHtml = (file) => {
	return `<!DOCTYPE html>
  <html lang="zh">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
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
		return `'${[item.name]}-example': '${item.path}'
    `;
	});
	return `exports.entry = {
    index: '${process.cwd()}/source/index.html',
    ${d}
  }`;
};