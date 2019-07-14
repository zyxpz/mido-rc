import { React, ReactDom } from 'midoReact';
import { Popup } from '@/main';

class Example extends React.Component {
	handleClick = () => {
		Popup.show(
			<div>我是弹层</div>,
			{
				visible: true,
				okText: '确定',
				ok() {
					console.log('确定');
				},
				cancel() {
					console.log('取消');
				}
			}
		);
	}
	render() {
		return (
			<div onClick={() => { this.handleClick(); }}>点我</div>
		);
	}
}

ReactDom.render(
	<Example />,
	document.getElementById('app')
);