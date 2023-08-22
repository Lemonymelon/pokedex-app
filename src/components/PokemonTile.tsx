import React, { useState, useEffect } from 'react';

import { getPokemonDisplayDetailsById, getPokemonEvolutionChainByPokemonId } from '../api';

export interface PokemonTile {
    id: string;
    name: string;
    sprite: string;
}

interface PokemonTileProps {
    pokemonTile: PokemonTile;
}

const PokemonTile
    : React.FC<PokemonTileProps> = ({ pokemonTile }) => {

        const { id, name, sprite } = pokemonTile;
        return (
            <div className='PokemonTile'>
                <div>
                    {id}
                    {name}
                    <img src={sprite} />
                </div>
            </div>
        )
    }

export default PokemonTile;