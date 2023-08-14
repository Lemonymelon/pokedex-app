import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPokemon } from '../api';

export interface ListPokemon {
    id: number,
    name: string
}

const PokemonListScreen: React.FC = () => {
    const [pokemon, setPokemon] = useState<ListPokemon[]>([]);

    useEffect(() => {
        getPokemon().then((pokemon) => {
            setPokemon(pokemon)
        })
    }, []);

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