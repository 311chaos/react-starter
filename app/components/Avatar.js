import React from 'react';

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


const Link = React.createClass({
  changeURL: function() {
    console.log(this.props);
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
});

const ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
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

export default React.createClass({
  render: function() {
    return (
      <Avatar user={USER_DATA}/>
    )
  }
});