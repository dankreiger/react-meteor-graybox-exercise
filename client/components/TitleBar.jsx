var React = require('react');
var PropTypes = React.PropTypes;

var TitleBar = React.createClass({

  render: function() {
    return (
      <div>
        <div className="title">
          <a className="brand" href="#">Instagram</a>
          <a className="circle" href="#"></a>
        </div>
      </div>
    );
  }

});

module.exports = TitleBar;
