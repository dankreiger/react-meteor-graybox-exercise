const React = require('react');
const ReactDom = require('react-dom');
const {Tabs,
    TabList, Tab, TabPanel} = require('react-tabs');
const TitleBar = require('./TitleBar.jsx')

const MobileContainer = React.createClass({
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },
  render: function() {
    const tabsListStyle = {
      marginBottom: 0,
      borderBottom: 0
    };
    const userPhotoStyle={
      backgroundColor: '#222222',
    };
    const homePhotoStyle={
      width: '100%',
      height: 'auto'
    };
    return (
      <div>
        <div>
          <TitleBar />
          <Tabs
            onSelect={this.handleSelect}
            selectedIndex={2}
          >
            <TabList style={tabsListStyle}>
              <Tab className="icon-home-outline"></Tab>
              <Tab className="icon-search"></Tab>
              <Tab className="icon-bell"></Tab>
              <Tab className="icon-camera"></Tab>
            </TabList>



            <TabPanel className="user-photo" style={userPhotoStyle}>
              <div className="user-info"></div>
              <img src="images/golden_pup.png" style={homePhotoStyle}/>
              <div className="footer"></div>
            </TabPanel>
            <TabPanel className="user-photo" style={userPhotoStyle}>
              <div className="user-info"></div>
              <h2>IMAGE</h2>
              <div className="footer"></div>
            </TabPanel>
            <TabPanel className="user-photo" style={userPhotoStyle}>
              <div className="user-info"></div>
              <h2>IMAGE</h2>
              <div className="footer"></div>
            </TabPanel>
            <TabPanel className="user-photo" style={userPhotoStyle}>
              <div className="user-info"></div>
              <h2>IMAGE</h2>
              <div className="footer"></div>
            </TabPanel>

          </Tabs>

        </div>

    </div>
    );
  }

});

module.exports = MobileContainer;
