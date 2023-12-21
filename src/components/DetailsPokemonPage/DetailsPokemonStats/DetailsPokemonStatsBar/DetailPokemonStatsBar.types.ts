import { PokemonDataSummarized } from "@/hooks/api/usePokemon.types";

export type DetailsPokemonStatsBarTypes = Pick<
  PokemonDataSummarized,
  "stats" | "types"
>;
