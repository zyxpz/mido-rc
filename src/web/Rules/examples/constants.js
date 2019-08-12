import { React } from 'midoReact';

const rules = [{
	key: '(',
	render() {
		return (<div className="rule-wrap-conditions"><span>(</span></div>);
	}
},
{
	key: ')',
	render() {
		return (<div className="rule-wrap-conditions"><span>)</span></div>);
	}
}, {
	key: '||',
	render() {
		return (<div className="rule-wrap-conditions"><span>或</span></div>);
	}
}, {
	key: '&&',
	render() {
		return (<div className="rule-wrap-conditions"><span>且</span></div>);
	}
}];

export {
	rules
};