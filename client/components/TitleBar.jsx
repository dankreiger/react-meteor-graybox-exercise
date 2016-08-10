var React = require('react');

var TitleBar = React.createClass({

  render: function() {
    return (
      <div>
        <div className="title">
          <a className="brand" href="#">Instagram</a>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

});

module.exports = TitleBar;
