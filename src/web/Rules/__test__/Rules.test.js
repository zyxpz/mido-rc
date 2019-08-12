import * as React from 'react';
import { shallow } from 'enzyme';
import Rules from '../index';

describe('<Rules />', () => {
	it('render Rules with Rules', () => {
		const wrapper = shallow(<Rules />).children();
		expect(wrapper.find('input').exists());
	});
});