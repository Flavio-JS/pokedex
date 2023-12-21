import { PokemonDataSummarized } from "@/hooks/api/usePokemon.types";

export type DetailsPokemonStatsTypes = Omit<
  PokemonDataSummarized,
  "name" | "number" | "imgUrl" | "id"
>;
