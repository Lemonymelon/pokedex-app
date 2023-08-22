import React, { useState, useEffect } from 'react';

import PokemonTile from './PokemonTile';

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
        const [evolutionChainMaxDepth, setEvolutionChainMaxDepth] = useState(0);

        useEffect(() => {
            if (evolutionChain) {
                handleSetEvolutionChainMaxDepth(evolutionChain, 0)
            }
        }, [evolutionChain])

        useEffect(() => {
            activePokemonId && getPokemonEvolutionChainByPokemonId(activePokemonId, true, true).then((evolutionChain) => {
                setEvolutionChain(evolutionChain);
            })
        }, [activePokemonId]);

        const handleSetEvolutionChainMaxDepth = (evolutionChain: EvolutionChain, depth: number) => {
            if (depth > evolutionChainMaxDepth) {
                // create tier row container

                setEvolutionChainMaxDepth(depth);
            }

            if ((evolutionChain.variations.length > 0)) {
                // create variations container
                evolutionChain.variations.forEach((variation) => {
                    // add variations to variations container

                    return handleSetEvolutionChainMaxDepth(variation, depth + 1);
                })
                // add container to tier container
            }
        };

        const handleSetDiplayTiers = (numberOfTiers: number) => {
            if (numberOfTiers > 0) {

            }
        };


        return (
            <div className='PokemonDisplay'>
                POKEMON DISPLAY
                {[...Array(evolutionChainMaxDepth + 1).keys()].map((tier) => {
                    return <div id={`PokemonDisplay__tier--${tier}`}>{tier}</div>
                })}
                {evolutionChain &&
                    <PokemonTile
                        pokemonTile={evolutionChain}
                    />}
            </div>
        )
    }

export default PokemonDisplay;