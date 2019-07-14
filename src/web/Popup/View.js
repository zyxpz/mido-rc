import { React, ReactDom } from 'midoReact';

const {
	Component
} = React;


export default (opts = {}) => WrapWithView => {

	const target = document.querySelector('body');

	const container = document.createElement('div');

	const render = (renderDom, opts) => {

		opts = {
			...opts,
			onCloseSoon() {
				ReactDom.unmountComponentAtNode(container);
				target.removeChild(container);
			},
			onOk(res) {
				opts.onCloseSoon();
				opts.ok(res);
			},
			onCancel(res) {
				opts.onCloseSoon();
				opts.cancel(res);
			},
		};

		let comp = '';

		target.appendChild(container);

		const element = (
			<Viewer
				renderDom={renderDom}
				opts={opts}
				ref={instance => comp = instance}
			/>
		);

		let callBack = () => (comp, opts.onSure, opts.onClose);


		ReactDom.render(element, container, callBack);
	};

	const popUp = (renderDom, opts = {}) => {
		render(renderDom, opts);
	};

	class Viewer extends Component {

    static show = popUp;

    constructor(params) {
    	super(params);
    }

    render() {
    	return (
    		<WrapWithView {...this.props} />
    	);
    }
	}

	return Viewer;
};