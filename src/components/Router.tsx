import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import SinglePokemonScreen from './SinglePokemonScreen';
import PokemonListScreen from './PokemonListScreen';
import EvolutionTreeScreen from './EvolutionTreeScreen';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokemon-list" element={<PokemonListScreen />} />
                <Route path="/single-pokemon" element={<SinglePokemonScreen />} />
                <Route path="/evolution-tree" element={<EvolutionTreeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;