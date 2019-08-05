import { React, ReactDom } from 'midoReact';
import { <%=name%> } from '@/main';

ReactDom.render(
	<<%=name%> 
		text={'<%=name%>'}
	/>,
	document.getElementById('app')
);