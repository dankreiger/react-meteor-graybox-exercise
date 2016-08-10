
import React from 'react';
import ReactDOM from 'react-dom';

import MobileContainer from './components/MobileContainer.jsx';

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
