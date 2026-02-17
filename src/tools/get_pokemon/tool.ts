import z from "zod";
import { findPokemonByName } from "../../data/pokemon-repository";

export const getPokemonTool = {
  name: "get_pokemon",
  config: {
    description: "Get information about a Pokemon by name",
    inputSchema: {
      name: z.string().describe("The name of the Pokemon to search for"),
    },
  },
  handler: async ({ name }: { name: string }) => {
    const pokemon = findPokemonByName(name);

    if (!pokemon) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Pokemon "${name}" not found.`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(pokemon, null, 2),
        },
      ],
    };
  },
};
