import { React, ReactDom } from 'midoReact';

const {
	Component
} = React;


export default () => WrapWithView => {

	const target = document.querySelector('body');

	const container = document.createElement('div');

	const render = (renderDom, opts) => {
		const newOpts = {
			...opts,
			onCloseSoon() {
				ReactDom.unmountComponentAtNode(container);
				target.removeChild(container);
			},
			onOk(res) {
				newOpts.onCloseSoon();
				newOpts.ok(res);
			},
			onCancel(res) {
				newOpts.onCloseSoon();
				newOpts.cancel(res);
			},
		};

		let comp = '';

		target.appendChild(container);

		const element = (
			<Viewer
				renderDom={renderDom}
				opts={newOpts}
				ref={instance => { comp = instance; }}
			/>
		);

		let callBack = () => (comp, newOpts.onSure, newOpts.onClose);


		ReactDom.render(element, container, callBack);
	};

	const popUp = (renderDom, opts = {}) => {
		render(renderDom, opts);
	};

	class Viewer extends Component {

		static show = popUp;

		render() {
			return (
				<WrapWithView {...this.props} />
			);
		}
	}

	return Viewer;
};