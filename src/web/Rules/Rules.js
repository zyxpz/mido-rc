import React, { createElement, useState } from 'react';
import PropsTypes from 'prop-types';
import './Rules.less';

const Rules = props => {

	const [whData, setWhData] = useState({ list: [] });

	const {
		rulesData,
		rulesChangeData
	} = props;

	const {
		list
	} = whData;

	// 点击匹配规则
	const handleConditionsClick = e => {
		const value = e.target.innerText;
		const newList = list.concat(value);
		setWhData({
			list: newList
		});
	};

	// 回调结果
	if (list.length) {
		let newData = '';
		list.forEach(item => {
			newData += item;
		});
		rulesChangeData(newData);
	}

	return (
		<div className="mido-roules">
			{
				rulesData.map((item, key) => {
					return createElement(
						'div',
						{
							key,
							className: `mido-rules-conditions ${item.className}`,
							onClick: (e) => { handleConditionsClick(e); }
						},
						item.value
					);
				})
			}
			<div className="mido-rules-warehouse">
				{
					list.map((item, key) => {
						return createElement(
							'span',
							{
								key,
							},
							item
						);
					})
				}
			</div>
		</div>
	);
};

Rules.defaultProps = {
	rulesData: [],
	rulesChangeData: () => {}
};

Rules.propTypes = {
	rulesData: PropsTypes.array,
	rulesChangeData: PropsTypes.func
};

export default Rules;