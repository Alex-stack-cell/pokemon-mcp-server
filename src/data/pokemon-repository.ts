import { POKEMONS } from "./index";
import type { Pokemon } from "../types/pokemon";

export const findPokemonByName = (name: string): Pokemon | undefined =>
  POKEMONS.find((p) => p.name === name.toLowerCase());

export const getAllPokemons = (): Pokemon[] => POKEMONS;

export const findPokemonsByType = (type: string): Pokemon[] =>
  POKEMONS.filter((p) => p.type === type.toLowerCase());

export const getAvailableTypes = (): string[] => [
  ...new Set(POKEMONS.map((p) => p.type)),
];

export const getPokemonsByStats = (stats: string): Pokemon[] => {
  const [stat, value] = stats.split(":");
  if (!value) return [];
  return POKEMONS.filter((p) => {
    const statValue = p[stat as keyof Pokemon];
    return typeof statValue === "number" && statValue >= Number.parseInt(value);
  });
};
