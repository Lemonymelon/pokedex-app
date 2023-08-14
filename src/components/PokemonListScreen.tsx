import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const PokemonListScreen: React.FC = () => {
    return (
        <div>POKEMON LIST
            <ul>
                <li>
                    <Link to="/single-pokemon">Single Pokemon</Link>
                </li>
                <li>
                    <Link to="/evolution-tree">Evolution Tree</Link>
                </li>
            </ul>

        </div>
    )
}

export default PokemonListScreen;