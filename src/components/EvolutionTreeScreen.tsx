import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const EvolutionTreeScreen: React.FC = () => {
    return (
        <div>EVOLUTION TREE

            <ul>
                <li>
                    <Link to="/pokemon-list">Pokemon List</Link>
                </li>
                <li>
                    <Link to="/single-pokemon">Single Pokemon</Link>
                </li>
            </ul>
        </div>
    )
}

export default EvolutionTreeScreen;