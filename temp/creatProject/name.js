import React from 'react';
import PropTypes from 'prop-types';
import './<%=name%>.less';

export default class <%=name%> extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const {
      text
    } = this.props;
    return (
      <div className="<%=name%>">{text}</div>
    )
  }
}

<%=name%>.defaultProps = {
  text: PropTypes.string
};

<%=name%>.propTypes = {
  text: '<%=name%>'
};