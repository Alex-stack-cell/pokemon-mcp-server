import type { Pokemon } from "../../types/pokemon";
import { getAllPokemons } from "../../data/pokemon-repository";

export const listPokemonsTool = {
  name: "list_pokemons",
  config: {
    description: "List all available Pokemon",
    inputSchema: {},
  },
  handler: async () => {
    return {
      content: getAllPokemons().map((pokemon: Pokemon) => ({
        type: "text" as const,
        text: JSON.stringify(pokemon, null, 2),
      })),
    };
  },
};
