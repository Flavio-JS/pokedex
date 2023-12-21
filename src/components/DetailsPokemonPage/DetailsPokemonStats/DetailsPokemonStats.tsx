import { PokemonTypeBadge } from "@/components/PokemonTypeBadge/PokemonTypeBadge";
import { detailsPokemonStatsStyles } from "./DetailsPokemonStats.styles";
import { DetailsPokemonStatsTypes } from "./DetailsPokemonStats.types";

export const DetailsPokemonStats = ({
  types,
  abilities,
  height,
  stats,
  weight,
}: DetailsPokemonStatsTypes) => {
  const styles = detailsPokemonStatsStyles();
  return (
    <div className={styles.detailsPokemonStatsWrapper}>
      <div className={styles.detailsPokemonStatsTypesWrapper}>
        {types.map((type) => (
          <PokemonTypeBadge key={type} pokemonType={type} />
        ))}
      </div>
      <div className={styles.detailsPokemonStatsPhysicalInformationWrapper}>
        <div></div>
      </div>
    </div>
  );
};
