
import React from 'react';
import ReactDOM from 'react-dom';

import MobileContainer from './components/mobile_container';

const App = () => {
  return (
    <div>
      <MobileContainer />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
