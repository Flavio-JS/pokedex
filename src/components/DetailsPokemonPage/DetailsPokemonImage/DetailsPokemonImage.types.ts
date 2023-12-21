import { PokemonDataSummarized } from "@/hooks/api/usePokemon.types";

export type DetailsPokemonImageTypes = Pick<
  PokemonDataSummarized,
  "name" | "id" | "imgUrl"
>;
