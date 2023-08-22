import React, { useState, useEffect } from 'react';

import PokemonTile from './PokemonTile';
import PokemonDisplayNavBorder from './PokemonDisplayNavBorder';

import { getPokemonEvolutionChainByPokemonId } from '../api';

export interface EvolutionChain {
    id: string;
    name: string;
    sprite: string;
    variations: EvolutionChain[];
}

const PokemonDisplay
    : React.FC<{ activePokemonId: number | null }> = ({ activePokemonId }) => {
        const [evolutionChain, setEvolutionChain] = useState<EvolutionChain | null>(null);

        useEffect(() => {
            activePokemonId && getPokemonEvolutionChainByPokemonId(activePokemonId, true, true).then((evolutionChain) => {
                setEvolutionChain(evolutionChain);
            })
        }, [activePokemonId]);

        return (
            <div className='PokemonDisplay'>
                <PokemonDisplayNavBorder children={evolutionChain &&
                    <PokemonTile
                        pokemonTile={evolutionChain}
                    />} />

            </div>
        )
    }

export default PokemonDisplay;