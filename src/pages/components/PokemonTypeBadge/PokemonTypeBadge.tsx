import { token } from "../../../../styled-system/tokens";
import * as S from "./PokemonTypeBadge.styles";
import { pokemonTypeBadgeTypes } from "./PokemonTypeBadge.types";

const PokemonTypeBadge = ({ pokemonType }: pokemonTypeBadgeTypes) => {
  return (
    <div
      className={S.PokemonTypeBadgeStyle}
      style={{ backgroundColor: token(`colors.pokemonType.${pokemonType}`) }}
    >
      {pokemonType}
    </div>
  );
};

export { PokemonTypeBadge };
