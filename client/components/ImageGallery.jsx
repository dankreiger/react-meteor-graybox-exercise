var React = require('react');
var PropTypes = React.PropTypes;

var ImageGallery = React.createClass({

  render: function() {
    return (
      <div>
        <div className="imageGallery">
          <div>
            <img src="http://www.onlinesheetmusic.com/static/images/image/piano.jpg" />
          </div>
          <div>
            <img src="https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg" />
          </div>
        </div>
        <div className="imageGallery">
          <div>
            <img src="http://c50039.r39.cf3.rackcdn.com/uploads/landing_page/article_widget/260/getting-around-berlin-rs.jpg" />
          </div>
        </div>
      </div>

    );
  }

});

module.exports = ImageGallery;
