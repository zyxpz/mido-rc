import React from 'react';
import PropsTypes from 'prop-types';


import { Button, Icon } from 'antd';
import XLSX from 'xlsx';

export default class ExcelCp extends React.Component {

	handleOnClick() {
		this.uploadIpt.click();
	}

	handleOnChange(e) {

		const {
			excelData
		} = this.props;

		const file = e.target.files[0];

		const reader = new FileReader();

		reader.onload = function(e) {
			const data = e.target.result;
			const workbook = XLSX.read(data, { type: 'binary' });
			let sheetNames = workbook.SheetNames; // 工作表名称集合
			sheetNames.forEach(name => {
				let worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
				const dataJson = XLSX.utils.sheet_to_json(worksheet);
				const d = dataJson.map((item, key) => {
					const newItem = item;
					newItem.key = key;
					return newItem;
				});
				excelData(d);
			});

		};
		reader.readAsBinaryString(file);
	}

	render() {
		const {
			text,
		} = this.props;

		return (
			<div
				onClick={() => { this.handleOnClick(); }}
			>
				<Button>
					<Icon type="upload" />
					{text}
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
	text: PropsTypes.string,
	excelData: PropsTypes.func
};

ExcelCp.defaultProps = {
	text: '上传',
	excelData: () => {}
};