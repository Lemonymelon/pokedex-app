import React, { useState, useEffect } from 'react';

import PokemonListRow from './PokemonListRow';

import { getPokemon } from '../api';

export interface ListPokemon {
    id: number,
    name: string
}

const PokemonList
    : React.FC = () => {
        const [pokemonList, setPokemonList] = useState<ListPokemon[]>([]);

        useEffect(() => {
            getPokemon().then((pokemonList) => {
                setPokemonList(pokemonList)
            })
        }, []);

        return (
            <div>POKEMON LIST
                {pokemonList.length > 0 && pokemonList.map((pokemon, index) => {
                    return <PokemonListRow {...pokemon} key={index} />
                })}
            </div>
        )
    }

export default PokemonList;