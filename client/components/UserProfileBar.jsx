var React = require('react');
var PropTypes = React.PropTypes;

var UserProfileBar = React.createClass({

  render: function() {
    const userInfoStyle={
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    };
    const avatarCellStyle={
      flex: '1 auto',
      width: '25%'
    };
    const userAvatar={
      borderRadius: '100%',
      width: '55%',
      marginLeft: '14%',
      paddingTop: '15%',
      height: 'auto'
    };
    const userNameCellStyle={
      flex: '1 auto',
      width: '25%'
    };
    const firstNameStyle={
      color: '#555555',
      fontFamily: ['Helvetica Neue','Arial','Helvetica','sans-serif'],
      fontWeight: 'normal',
      margin: '14% auto 0'
    };
    const firstNameLinkStyle={
      textDecoration: 'none',
      color: 'inherit'
    };
    const lastNameLinkStyle={
      textDecoration: 'none',
      color: 'inherit'
    };
    const lastNameStyle={
      color: '#555555',
      fontWeight: 'lighter',
      fontFamily: ['Helvetica Neue','Arial','Helvetica','sans-serif'],
      margin: '0 auto'
    };
    const loggedInDurationCellStyle={
      flex: '1 auto',
      width: '50%'
    };
    const loggedInDurationStyle={
      color: '#555555',
      fontWeight: 'lighter',
      fontFamily: ['Helvetica Neue','Arial','Helvetica','sans-serif'],
      margin: '14% 12% 0 0',
      textAlign: 'right'
    };
    const loggedInDurationLinkStyle={
      textDecoration: 'none',
      color: 'inherit'
    };


    return (
      <div>
        <div className="user-info" style={userInfoStyle}>
          <div className="avatarCell" style={avatarCellStyle}>
            <a href="#"><img src="images/dan.jpg" style={userAvatar} /></a>
          </div>
          <div className="userNameCell" style={userNameCellStyle}>
            <h4 style={firstNameStyle}><a href="#" style={firstNameLinkStyle}>dan</a></h4>
            <h4 style={lastNameStyle}><a href="#" style={lastNameLinkStyle}>kreiger</a></h4>
          </div>
          <div className="loggedInDurationCell" style={loggedInDurationCellStyle}>
            <h4 style={loggedInDurationStyle}><a href="#" style={loggedInDurationLinkStyle}>3h</a></h4>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfileBar;
