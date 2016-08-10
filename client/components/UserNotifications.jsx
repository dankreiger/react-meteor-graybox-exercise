var React = require('react');
var PropTypes = React.PropTypes;

var UserNotifications = React.createClass({

  render: function() {
    return (
      <div className="userNotificationsList">
        <div className="userNotificationItems">
          <img src="images/instagram_notifications.png" />
        </div>
      </div>

    );
  }

});

module.exports = UserNotifications;
