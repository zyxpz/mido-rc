import { React, ReactDom } from 'midoReact';
import { Drag } from '@/main';

const styles = {
	dragWarp: {
		width: '200px',
		height: '100px',
		border: 'solid 1px blue',
	},
	li: {
		width: '40px',
		height: '100%',
		display: 'inline-block',
		textAlign: 'center',
		border: 'solid 1px black',
	},
	drop: {
		width: '800px',
		height: '200px',
		border: 'solid 1px blue',
	},
	li2: {
		width: '80px',
		height: '100%',
		display: 'inline-block',
		textAlign: 'center',
		border: 'solid 1px black',
	},
};

const defaultValues = [
	{
		text: 5,
		id: '5'
	},
	{
		text: 6,
		id: '6'
	},
	{
		text: 7,
		id: '7'
	},
	{
		text: 8,
		id: '8'
	},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.option = {
			dragWarp: {
				dragData: [
					{
						text: 1,
						id: '1'
					},
					{
						text: 2,
						id: '2'
					},
					{
						text: 3,
						id: '3'
					},
					{
						text: 4,
						id: '4'
					},
				],
				classNames: 'dragWarp-li',
				styles: { display: 'inline-block' },
				render: data => (
					<span
						style={{ ...styles.li }}
					>
						{data.text}
					</span>
				),
			},
			dropWarp: {
				classNames: 'dropWarp-li',
				styles: { ...styles.li2 },
				render: data => (
					<span>
						{data.text}
					</span>
				),
			},
		};
	}

	handleOnchange = (data) => {
		console.table(data);
	}

	render() {
		return (
			<Drag
				Option={this.option}
				dragClassName="drag-Warp"
				dragStyle={{ ...styles.dragWarp }}
				dropClassName="drop-Warp"
				dropStyle={{ ...styles.drop }}
				defaultValue={defaultValues}
				onChange={this.handleOnchange}
			/>
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector('.app'),
);