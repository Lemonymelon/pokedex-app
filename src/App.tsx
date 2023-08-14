import './style/App.scss';
import React from 'react';

import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Router from './components/Router';

const App = () => {
  return (
    <div className='App'>
      <Wrapper>
        <Screen>
          <Router />
        </Screen>
      </Wrapper>
    </div>
  )
}

export default App;
