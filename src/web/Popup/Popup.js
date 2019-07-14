import { React } from 'midoReact';


import { Modal } from 'antd-mobile';

import View from './View';

const {
	Component
} = React;

@View()

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