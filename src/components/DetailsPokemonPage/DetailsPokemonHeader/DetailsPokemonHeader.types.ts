import { PokemonDataSummarized } from "@/hooks/api/usePokemon.types";

export type DetailsPokemonHeaderTypes = Pick<
  PokemonDataSummarized,
  "name" | "number"
>;
