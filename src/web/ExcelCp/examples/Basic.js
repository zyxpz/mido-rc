import { React, ReactDom } from 'midoReact';
import { ExcelCp } from '@/main';

import { Table } from 'antd';

const {
	Fragment
} = React;

const {
	ExcelImp,
	ExcelExp
} = ExcelCp;

class ExcelExampel extends React.Component {
	state = {
		labelData: [
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
		]
	}
	columns = [
		{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: '住址',
			dataIndex: 'address',
			key: 'address',
		},
	];

	handleExcelData(data) {
		const {
			labelData = []
		} = this.state;
		this.setState({
			labelData: [
				...labelData,
				...data
			]
		});
	}

	render() {
		const {
			labelData,
		} = this.state;
		return (
			<Fragment>
				<ExcelExp
					excelData={
						[["name", "age", "address"]]
					}
				/>
				<ExcelImp
					text={'upload'}
					excelData={(data) => { this.handleExcelData(data); }}
				/>
				{

					<Table dataSource={labelData} columns={this.columns} />
				}
			</Fragment>
		);
	}
}

ReactDom.render(
	<ExcelExampel />,
	document.getElementById('app')
);