var React = require('react');
var PropTypes = React.PropTypes;


var SearchBar = React.createClass({

    render: function() {
      const searchBarStyle={
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      };
      const searchBarCellStyle={
        flex: '1 auto',
        width: '100%'
      };
      const searchBarInputStyle={
        flex: '1 auto',
        width: '90%',
        height: '11vh',
        border: 'none'
      };


      return (
        <div>
          <div className="search-bar" style={searchBarStyle}>
            <div className="searchBarCell" style={searchBarCellStyle}>
              <form>
                <input
                  placeholder="Search Instagram"
                  type="text"
                  style={searchBarInputStyle}
                />
              </form>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = SearchBar;
