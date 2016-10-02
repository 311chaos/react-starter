import React from 'react';
import ReactDom from'react-dom';

const USER_DATA = {
  name: 'Aaron Hickman',
  username: '311chaos',
  imageUrl: 'https://avatars1.githubusercontent.com/u/3876866?v=3&s=466'
};

const ProfileImage = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});


const ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://github.com/' + this.props.username} >
          {this.props.username}
        </a>
      </div>
    )

  }
});

const ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

const Avatar = React.createClass({
  render: function() {
    return (
    <div>
      <ProfileImage imageUrl={this.props.user.imageUrl}/>
      <ProfileLink username={this.props.user.username}/>
      <ProfileName name={this.props.user.name}/>
    </div>
    )
  }
});



ReactDom.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));