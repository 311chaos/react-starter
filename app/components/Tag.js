import React from 'react';

const Tag = React.createClass({
  render: function() {
    const divStyle = {
      display: 'inline-block', border: 2, borderStyle: 'solid', borderColor: '#7cd8cb', borderRadius: 3, whiteSpace: 'no-wrap', margin: '-1 5 5 0'
    };
    const spanStyle = {
      display: 'inline-block',
      padding: 8,
      fontSize: 14
    };
    const closeStyle = {
      fontWeight: 500,
      paddingRight: 8,
      color: '#999',
      fontSize: 16,
      cursor: 'pointer'
    };
    return (
      <div style={divStyle}>
        <span style={spanStyle}>{this.props.tag.value}</span>
        <a tabIndex="-1" style={closeStyle} onClick={() => this.props.deleteItem(this.props.tag.value)}>x</a>
      </div>
    )
  }
});

export default Tag;