import axios from "axios";
import { ListPokemon } from "./components/PokemonListScreen";

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

export const getPokemon = async (limit: number = 20, offset: number = 0) => {
    const url = `${baseUrl}/pokemon?limit=${limit}&offset=${offset}`;

    const result = await axios.get(url);
    const pokemonData: ListPokemon[] = result.data;

    return pokemonData;
};
