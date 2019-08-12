import { React, ReactDom } from 'midoReact';
import { Rules } from '@/main';

import { rules } from './constants';
import './Basic.less';

class RulesExamples extends React.Component {

	handleValue(d) {
		console.log(d);
	}

	render() {
		return (
			<Rules
				rulesData={rules}
				onPressEnter={(d) => { this.handleValue(d); }}
			/>
		);
	}
}

ReactDom.render(
	<RulesExamples />,
	document.getElementById('app')
);