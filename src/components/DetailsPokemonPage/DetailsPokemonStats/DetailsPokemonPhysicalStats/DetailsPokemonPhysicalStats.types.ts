import { PokemonDataSummarized } from "@/hooks/api/usePokemon.types";

export type DetailsPokemonPhysicalStatsTypes = Pick<
  PokemonDataSummarized,
  "abilities" | "height" | "weight"
>;
