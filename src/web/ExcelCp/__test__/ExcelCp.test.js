import * as React from 'react';
import { shallow } from 'enzyme';
import ExcelCp from '../index';

const {
	ExcelImp,
	ExcelExp
} = ExcelCp;

describe('render input', () => {
	it('render', () => {
		const wrapper = shallow(<ExcelImp />).children();
		expect(wrapper.find('input').exists());
	});
});