import React from 'react';
import Tag from './Tag';
import _ from 'lodash';

const TAB_KEY_CODE = 9;

const divStyle = {
  padding: 5,
  borderColor: '#bdc7d8',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 3
};

const ulStyle = {
  listStyleType: 'none',
  WebkitUserSelect: 'none',
  margin: 0,
  padding: 0
};

const liStyle = {
  display: 'inline',
  paddingRight: 10,
  margin: 0,
  marginRight: 5,
  padding: 0
};

const inputStyle = {
  outline: 'none',
  borderWidth: 0,
  padding: 5,
  marginLeft: 5
};
const addToTags = (tags, item) => {
  if(!_.find(tags, { value: item })) {
    return tags.concat([{value: item}]);
  }
  console.log('Duplicate tag', item);
  return tags;
};

const removeFromTags = (tags, item) => {
  return _.filter(tags, tag => {
    return tag.value !== item;
  })
};

const Tags = React.createClass({
  deleteItem: function(item) {
    this.setState({tags: removeFromTags(this.state.tags, item)});
  },
  onChange: function(e) {
    this.setState({text: e.target.value})
  },
  onKeyDown: function(e) {

    if(e.keyCode ===  TAB_KEY_CODE && this.state.text) {
      const newTags = addToTags(this.state.tags, this.state.text);
      e.preventDefault();
      e.stopPropagation();
      this.setState({text: '', tags: newTags});
      e.target.focus();
    }
  },
  getInitialState: function() {
    return {
      tags: [
        { value: 'shirts'},
        { value: 'shoes'},
        { value: 'pants'},
      ]
    }
  },
  render: function() {
     var tagItems = this.state.tags.map(function(item) {
      return (
        <li style={liStyle} key={item.value}><Tag deleteItem={this.deleteItem} tag={item} /></li>
      )
    }, this);
    return (
      <div className="container" style={divStyle}>
        <ul style={ulStyle}>
          {tagItems}
          <li style={{display: 'inline'}}>
            <input
              value={this.state.text || ''}
              onKeyDown={this.onKeyDown}
              onChange={this.onChange}
              type="text"
              style={inputStyle}
              autoFocus
            />
          </li>
        </ul>
      </div>
    )
  }
});

export default Tags;