var React = require('react');
var PropTypes = React.PropTypes;

var UserProfileBar = React.createClass({

  render: function() {
    const userAvatar={
      borderRadius: '100%',
      width: '15%',
      marginLeft: 14,
      paddingTop: 10,
      height: 'auto'
    };
    return (
      <div>
        <div className="user-info">
          <img src="images/dan.jpg" style={userAvatar} />
        </div>
      </div>
    );
  }

});

module.exports = UserProfileBar;
