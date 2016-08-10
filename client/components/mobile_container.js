import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class MobileContainer extends React.Component {
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  render () {
    const tabsListStyle = {
      marginBottom: 0,
      borderBottom: 0
    };
    const userPhotoStyle={
      backgroundColor: '#222222',
    };
    return (
      <div>
        <div>
          <div className="title">
            <a className="brand" href="#">Instagram</a>
          <div className="circle"></div>
          </div>
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
}

export default MobileContainer;
