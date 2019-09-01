import React from 'react';

import Modal from 'antd/es/modal';
import 'antd/es/modal/style';

import PropsTypes from 'prop-types';

import view from './View';

const {
	Component
} = React;

@view()

class PopUp extends Component {

	render() {
		const {
			renderDom,
			opts
		} = this.props;

		return (
			<Modal
				{
				...opts
				}
			>{renderDom}</Modal>
		);
	}
}

PopUp.propTypes = {
	renderDom: PropsTypes.string,
	opts: PropsTypes.object
};

PopUp.defaultProps = {
	renderDom: null,
	opts: {}
};

export default PopUp;