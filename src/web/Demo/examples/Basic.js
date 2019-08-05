import { React, ReactDom } from 'midoReact';
import { Demo } from '@/main';

ReactDom.render(
	<Demo 
		text={'Demo'}
	/>,
	document.getElementById('app')
);