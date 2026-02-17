export type PokemonType = "electric" | "fire" | "water" | "grass" | "fairy" | "rock" | "normal";

export interface Pokemon {
  name: string;
  type: PokemonType;
  hp: number;
  attack: number;
  defense: number;
}
