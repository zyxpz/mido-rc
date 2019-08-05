import React from 'react';
import PropsTypes from 'prop-types';
import './ExcelCp.less';

import { Button, Icon } from 'antd';
import XLSX from 'xlsx';

export default class ExcelCp extends React.Component {

	handleOnClick() {
		this.uploadIpt.click();
	}

	handleOnChange(e) {
		const file = e.target.files[0];

		const reader = new FileReader();

		reader.onload = function(e) {
			const data = e.target.result;
			const workbook = XLSX.read(data, { type: 'binary' });
			const sd = workbook.Sheets.Sheet1;
			let keyItem = {};
			let valueItem = {};
			Object.keys(sd).forEach(item => {
				if (!/!/.test(item)) {
					if (/1/.test(item)) {
						keyItem = sd;
					}
					valueItem = sd[item];
				}
				console.log(keyItem);
			});

		};
		reader.readAsBinaryString(file);
	}

	render() {
		const {
			uploadConfig = {},
		} = this.props;

		const {
			uploadText,
		} = uploadConfig;

		return (
			<div
				className="mido-excel"
				onClick={() => { this.handleOnClick(); }}
			>
				<Button>
					<Icon type="upload" />
					{uploadText}
				</Button>
				<input
					className="mido-excel-upload-ipt"
					type="file"
					ref={uploadIpt => { this.uploadIpt = uploadIpt; }}
					onChange={(e) => { this.handleOnChange(e); }}
				/>
			</div>

		);
	}
}

ExcelCp.propTypes = {
	uploadConfig: PropsTypes.object
};

ExcelCp.defaultProps = {
	uploadConfig: {
		uploadText: '上传'
	}
};