import React from 'react';
import { Link } from 'react-router-dom';

const SinglePokemonScreen: React.FC = () => {
    return (
        <div>SINGLE POKEMON

            <ul>
                <li>
                    <Link to="/pokemon-list">Pokemon List</Link>
                </li>
                <li>
                    <Link to="/evolution-tree">Evolution Tree</Link>
                </li>
            </ul>
        </div>
    )
}

export default SinglePokemonScreen;