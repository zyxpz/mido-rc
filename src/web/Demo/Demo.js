import React from 'react';
import PropTypes from 'prop-types';
import './Demo.less';

export default class Demo extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const {
			text
		} = this.props;
		return (
			<div className="Demo">{text}</div>
		);
	}
}

Demo.defaultProps = {
	text: PropTypes.string
};

Demo.propTypes = {
	text: 'Demo'
};