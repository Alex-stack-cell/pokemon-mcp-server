import type { Pokemon } from "../../types/pokemon";
import { getAllPokemons } from "../../data/pokemon-repository";

export const listPokemonsTool = {
  name: "list_pokemons",
  config: {
    description: "List all available Pokemon",
    inputSchema: {},
  },
  handler: async () => {
    const pokemons: Pokemon[] = getAllPokemons();

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(pokemons, null, 2),
        },
      ],
    };
  },
};
