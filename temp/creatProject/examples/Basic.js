import { React, ReactDom } from 'midoReact';

const Example = () => <div>Example-<%=name%></div>;

ReactDom.render(
	<Example />,
	document.getElementById('app')
);