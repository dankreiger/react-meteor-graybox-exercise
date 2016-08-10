var React = require('react');
var PropTypes = React.PropTypes;

var SocialMediaBar = React.createClass({

  render: function() {
    const socialMediaBarStyle={
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    };
    const heatIconCellStyle={
      flex: '1 auto',
      width: '10%'
    };
    const likeCountCellStyle={
      flex: '1 auto',
      width: '50%'
    };
    const likeStyles={
      fontFamily: ['Helvetica Neue','Arial','Helvetica','sans-serif'],
      fontSize: 14,
      fontWeight: 'normal',
      margin: '0 auto'
    };
    const likeCellStyle={
      flex: '1 auto',
      width: '10%'
    };
    const commentCellStyle={
      flex: '1 auto',
      width: '10%'
    };
    const slideShowCellStyle={
      flex: '1 auto',
      width: '10%'
    };
    const shareCellStyle={
      flex: '1 auto',
      width: '10%'
    };
    return (
      <div>
        <div className="social-media-bar" style={socialMediaBarStyle}>
          <div className="heatIconCell" style={heatIconCellStyle}>
            <div className="icon-heart"></div>
          </div>
          <div className="likeCountCell" style={likeCountCellStyle}>
            <p style={likeStyles}>112 Likes</p>
          </div>
          <div className="likeCell" style={likeCellStyle}>
            <div className="icon-heart-empty"></div>
          </div>
          <div className="commentCell" style={commentCellStyle}>
            <div className="icon-share"></div>
          </div>
          <div className="slideShowCell" style={slideShowCellStyle}>
            <div className="icon-play"></div>
          </div>
          <div className="shareCell" style={shareCellStyle}>
            <div className="icon-camera-alt"></div>
          </div>

        </div>
      </div>
    );
  }

});

module.exports = SocialMediaBar;
