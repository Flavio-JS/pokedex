import { pokemonTypeBadgeStyles } from "./PokemonTypeBadge.styles";
import { PokemonTypeBadgeTypes } from "./PokemonTypeBadge.types";

export const PokemonTypeBadge = ({ pokemonType }: PokemonTypeBadgeTypes) => {
  const styles = pokemonTypeBadgeStyles({ backgroundTypeColor: pokemonType });
  return (
    <div className={styles.pokemonTypeBadgeStylesWrapper}>{pokemonType}</div>
  );
};
