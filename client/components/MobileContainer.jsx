const React = require('react');
const ReactDom = require('react-dom');
const {Tabs,
    TabList, Tab, TabPanel} = require('react-tabs');
const TitleBar = require('./TitleBar.jsx');
const UserProfileBar = require('./UserProfileBar.jsx');
const SocialMediaBar = require('./SocialMediaBar.jsx');

const MobileContainer = React.createClass({
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },
  render: function() {
    const tabsListStyle={
      marginBottom: 0,
      borderBottom: 0,
      backgroundColor: '#555555',
      whiteSpace: 'nowrap'
    };
    const homePhotoStyle={
      maxWidth: '100%',
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

            <TabPanel className="user-tab">
              <UserProfileBar />
              <img src="images/golden_pup.png" style={homePhotoStyle}/>
              <SocialMediaBar />
            </TabPanel>
            <TabPanel className="user-tab">
              <UserProfileBar />
              <h2>IMAGE</h2>
              <SocialMediaBar />
            </TabPanel>
            <TabPanel className="user-tab">
              <UserProfileBar />
              <h2>IMAGE</h2>
              <SocialMediaBar />
            </TabPanel>
            <TabPanel className="user-tab">
              <UserProfileBar />
              <h2>IMAGE</h2>
              <SocialMediaBar />
            </TabPanel>

          </Tabs>

        </div>

    </div>
    );
  }

});

module.exports = MobileContainer;
