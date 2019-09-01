import React, { PureComponent } from 'react';
import PropsTypes from 'prop-types';


import Button from 'antd';
import Icon from 'antd';
import 'antd/es/button/style';
import 'antd/es/icon/style';
import XLSX from 'xlsx';

export default class ExcelExp extends PureComponent {

	componentDidMount() {
		const {
			excelData,
			saveName
		} = this.props;

		this.craeatBlob({
			data: excelData,
			saveName
		});
	}

	// 字符串转ArrayBuffer
	s2ab(s) {
		const buf = new ArrayBuffer(s.length);
		const view = new Uint8Array(buf);
		for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}

	// 生成下载地址
	craeatBlob(props) {
		const {
			data,
			saveName
		} = props;

		const sheet = XLSX.utils.aoa_to_sheet(data);

		let workbook = {
			SheetNames: [saveName],
			Sheets: {}
		};

		workbook.Sheets[saveName] = sheet;
		// 生成excel的配置项
		let wopts = {
			bookType: 'xlsx', // 要生成的文件类型
			bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
			type: 'binary'
		};

		let wbout = XLSX.write(workbook, wopts);

		const blob = new Blob([this.s2ab(wbout)],
			{ type: "application/octet-stream" });
		const newUrl = URL.createObjectURL(blob);

		this.setState({
			blobUrl: newUrl
		});
	}

	handleOnClick() {
		const {
			blobUrl = ''
		} = this.state;
		const {
			saveName
		} = this.props;
		let aLink = document.createElement('a');
		aLink.href = blobUrl;
		aLink.download = `${saveName}.xlsx` || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效

		aLink.click();
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
					<Icon type="download" />
					{text}
				</Button>
			</div>
		);
	}
}

ExcelExp.defaultProps = {
	text: '下载',
	excelData: [],
	saveName: '导出'
};

ExcelExp.propTypes = {
	text: PropsTypes.string,
	excelData: PropsTypes.array,
	saveName: PropsTypes.string
};