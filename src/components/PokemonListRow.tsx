import React from 'react';

import { ListPokemon } from './PokemonList';
import { capitaliseWords } from '../utils/stringFunctions';

const PokemonListRow: React.FC<ListPokemon> = (pokemon: ListPokemon) => {
    const { id, name } = pokemon;
    return (
        <div className='PokemonList__row'>

            <div className='PokemonList__row__text'>{`#${id}: ${capitaliseWords(name)}`}</div>
        </div>
    )
}

export default PokemonListRow;