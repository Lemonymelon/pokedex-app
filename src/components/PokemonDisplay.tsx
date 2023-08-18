import React, { useState, useEffect } from 'react';

import { getPokemonDisplayDetailsById, getPokemonEvolutionChainByPokemonId } from '../api';

export interface DisplayPokemon {
    id: string;
    name: string;
    sprite: string;
}

export interface EvolutionChain {
    name: string;
    sprite: string;
    variations: EvolutionChain[];
}

const PokemonDisplay
    : React.FC<{ activePokemonId: number | null }> = ({ activePokemonId }) => {
        const [evolutionChain, setEvolutionChain] = useState<EvolutionChain | null>(null);

        console.log(evolutionChain)

        useEffect(() => {
            activePokemonId && getPokemonEvolutionChainByPokemonId(activePokemonId, true, true).then((evolutionChain) => {
                setEvolutionChain(evolutionChain);
            })
        }, [activePokemonId]);


        // const { id, name, spriteUrl } = pokemon;
        return (
            <div>
                {/* {name} */}
            </div>
        )
    }

export default PokemonDisplay;