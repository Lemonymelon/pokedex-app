import React from 'react';

import { ListPokemon } from './PokemonList';
import { capitaliseWords } from '../utils/stringFunctions';

const PokemonListRow: React.FC<ListPokemon> = (pokemon: ListPokemon) => {
    const { id, name } = pokemon;
    return (
        <div>
            {`#${id}: ${capitaliseWords(name)}`}
        </div>
    )
}

export default PokemonListRow;