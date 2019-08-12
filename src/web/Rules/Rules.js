import React, { createElement } from 'react';
import PropsTypes from 'prop-types';
import './Rules.less';

import { Input } from 'antd';
const {
	TextArea
} = Input;

const Rules = props => {
	const {
		rulesData,
		testArea
	} = props;

	const {
		autosize,
		defaultValue,
		value
	} = testArea;

	return (
		<div className="mido-roules">
			{
				rulesData.map((item, key) => {
					return createElement(
						item.render,
						{
							key,
							className: 'mido-rules-conditions',
							onClick: (e) => { this.handleConditionsClick(e); }
						}
					);
				})
			}
			<TextArea
				autosize={autosize}
				defaultValue={defaultValue}
				value={value}
			/>
		</div>
	);
};

export default Rules;

Rules.defaultProps = {
	rulesData: [],
	testArea: {
		autosize: false, // 自适应内容高度
		defaultValue: '', // 输入框默认值
		value: '', // 输入框内容
		onPressEnter: () => { }
	}
};

Rules.propTypes = {
	rulesData: PropsTypes.array,
	testArea: PropsTypes.objectOf({
		autosize: PropsTypes.string,
		defaultValue: PropsTypes.string,
		value: PropsTypes.string,
		onPressEnter: PropsTypes.func
	})
};