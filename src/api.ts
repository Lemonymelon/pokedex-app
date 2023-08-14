import axios from "axios";

const baseUrls = {
    test: 'http://localhost:9090/api',
    development: 'http://localhost:9090/api',
    production: ''
};

const baseUrl = baseUrls[process.env.NODE_ENV];

export const getPokemonEvolutionChainByPokemonId = (pokemonId: number, includeId: boolean) => {
    const url = `${baseUrl}/evolutionChain/pokemonId/${pokemonId}?includeId=${includeId}`;

    axios.get(url)
        .then((evolutionChainData) => {
            return evolutionChainData;
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const getPokemonDisplayDetailsById = (pokemonId: number) => {
    const url = `${baseUrl}/pokemon/displayDetails/${pokemonId}`;

    axios.get(url)
        .then((displayDetailsData) => {
            return displayDetailsData;
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const getPokemon = (pokemonId: number, limit: number = 20, offset: number = 0) => {
    const url = `${baseUrl}/pokemon?limit=${limit}&offset=${offset}`;

    axios.get(url)
        .then((pokemonData) => {
            return pokemonData;
        })
        .catch((error) => {
            throw new Error(error);
        });
};
