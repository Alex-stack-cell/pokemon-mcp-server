import { z } from "zod";
import {
  findPokemonsByType,
  getAvailableTypes,
} from "../../data/pokemon-repository";

export const getTeamSuggestionTool = {
  name: "get_team_suggestion",
  config: {
    description: "Retourne les Pokémon correspondant à un type donné",
    inputSchema: {
      type: z
        .string()
        .describe(
          "Le type de Pokémon pour lequel on souhaite obtenir une équipe (par exemple, 'eau', 'feu', etc.)",
        ),
    },
  },
  handler: async (input: { type: string }) => {
    const types = getAvailableTypes();

    const pokemonsByType = findPokemonsByType(input.type);

    if (!pokemonsByType) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Le type ${input.type} n'existe pas. Les types disponibles sont : ${types.join(", ")}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(pokemonsByType, null, 2),
        },
      ],
    };
  },
};
