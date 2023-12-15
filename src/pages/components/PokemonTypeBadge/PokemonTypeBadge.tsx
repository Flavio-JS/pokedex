import { PokemonTypeBadgeStyles } from "./PokemonTypeBadge.styles";
import { pokemonTypeBadgeTypes } from "./PokemonTypeBadge.types";

const PokemonTypeBadge = ({ pokemonType }: pokemonTypeBadgeTypes) => {
  const styles = PokemonTypeBadgeStyles({ backgroundTypeColor: pokemonType });
  return (
    <div className={styles.pokemonTypeBadgeStylesWrapper}>{pokemonType}</div>
  );
};

export { PokemonTypeBadge };
