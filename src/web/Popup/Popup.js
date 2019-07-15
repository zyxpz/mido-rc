import { React } from 'midoReact';


import { Modal } from 'antd';

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

export default PopUp;