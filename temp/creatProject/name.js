import { React } from 'midoReact';
import './<%=name%>.less';

export default class <%=name%> extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="<%=name%>"><%=name%></div>
    )
  }
}