import React from 'react';
import MainTabBar from './navigation/main_tab_bar';
import About from './components/about';

// disable really annoying in app warnings
console.disableYellowBox = true;

const App = (props) => {
  return (
    <div>
      <MainTabBar />
      <About />
    </div>
  );
};

export default App;
