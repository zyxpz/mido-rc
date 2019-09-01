import { React, ReactDom } from 'midoReact';
import { Rules } from '@/main';

import Button from 'antd';
import 'antd/es/button/style';
import { rules } from './constants';
import './Basic.less';

const {
	Fragment
} = React;

class RulesExamples extends React.Component {

	state = {
		data: {}
	}

	handleValue(d) {
		console.log(d);
		// this.setState({
		// 	data: d
		// });
	}

	handleSubmit() {
		const {
			data
		} = this.state;

		console.log(data);
	}

	render() {
		return (
			<Fragment>
				<Rules
					rulesData={rules}
					rulesChangeData={(d) => { this.handleValue(d); }}
				/>
				<Button type="primary" onClick={() => { this.handleSubmit(); }}>提交</Button>
			</Fragment>
		);
	}
}

ReactDom.render(
	<RulesExamples />,
	document.getElementById('app')
);