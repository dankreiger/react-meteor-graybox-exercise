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


    return (
      <div>
        <div className="user-info" style={userInfoStyle}>
          <div className="avatarCell" style={avatarCellStyle}>
            <img src="images/dan.jpg" style={userAvatar} />
          </div>
          <div className="userNameCell" style={userNameCellStyle}>
            <h4 style={firstNameStyle}>dan</h4>
            <h4 style={lastNameStyle}>kreiger</h4>
          </div>
          <div className="loggedInDurationCell" style={loggedInDurationCellStyle}>
            <h4 style={loggedInDurationStyle}>3h</h4>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfileBar;
