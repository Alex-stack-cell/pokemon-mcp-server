import { POKEMONS } from "./index";
import type { Pokemon } from "../types/pokemon";

export const findPokemonByName = (name: string): Pokemon | undefined =>
  POKEMONS.find((p) => p.name === name.toLowerCase());

export const getAllPokemons = (): Pokemon[] => POKEMONS;
