import React, { Component } from 'react';
import Router from './Router';

const styles = {
  div: {
    backgroundColor: 'tomato',
  },
};

const App = () => {
  return (
    <React.Fragment>
      <div style={styles.div} className="maincontainer">
        <div className="App">
          <Router />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
