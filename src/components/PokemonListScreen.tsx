import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPokemon } from '../api';
import PokemonListRow from './PokemonListRow';

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
            {pokemon.map((pokemon, index) => {
                return <PokemonListRow {...pokemon} key={index} />
            })}
        </div>
    )
}

export default PokemonListScreen;