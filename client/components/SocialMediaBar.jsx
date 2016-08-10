var React = require('react');
var PropTypes = React.PropTypes;

var SocialMediaBar = React.createClass({

  render: function() {
    const socialMediaBarStyle={
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingTop: '3%'
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
    const streamCellStyle={
      flex: '1 auto',
      width: '65%',
      marginTop: 30,
      marginLeft: 10
    };
    const streamStyle={
      border: '1px solid #b2b2b2',
      backgroundColor: '#d3d3d3',
      padding: 10,
      fontSize: '1em',
      borderTopRightRadius: '15%',
      borderBottomRightRadius: '15%',
      borderBottomLeftRadius: '15%'
    };
    const instagramLogoCellStyle={
      flex: '1 auto',
      marginTop: 20
    };
    const instagramLogoStyle={

    };
    return (
      <div>
        <div className="social-media-bar" style={socialMediaBarStyle}>
          <div className="heatIconCell" style={heatIconCellStyle}>
            <a href="#" className="icon-heart"></a>
          </div>
          <div className="likeCountCell" style={likeCountCellStyle}>
            <p style={likeStyles}><a href="#">112 Likes</a></p>
          </div>
          <div className="likeCell" style={likeCellStyle}>
            <a href="#" className="icon-heart-empty"></a>
          </div>
          <div className="commentCell" style={commentCellStyle}>
            <a href="#" className="icon-share"></a>
          </div>
          <div className="slideShowCell" style={slideShowCellStyle}>
            <a href="#" className="icon-play"></a>
          </div>
          <div className="shareCell" style={shareCellStyle}>
            <a href="#" className="icon-camera-alt"></a>
          </div>

          <div className="comment" style={streamCellStyle}>
            <a href="#" style={streamStyle}>Wauwau!</a>
          </div>
          <div className="instagramLogo" style={instagramLogoCellStyle}>
            <a href="#" style={instagramLogoStyle}><img src="images/instagram_circle.png" /></a>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SocialMediaBar;
