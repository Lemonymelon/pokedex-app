import './style/App.scss';
import React, { useState, useEffect } from 'react';

import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import PokemonList from './components/PokemonList';
import PokemonDisplay from './components/PokemonDisplay';

const App = () => {
  const [activePokemonId, setActivePokemonId] = useState<number | null>(1);

  return (
    <div className='App'>
      <Wrapper>
        <Screen>
          <div className='PokemonScreen'>
            <PokemonDisplay activePokemonId={activePokemonId} />
            <PokemonList />
          </div>
        </Screen>
      </Wrapper>
    </div>
  )
}

export default App;
