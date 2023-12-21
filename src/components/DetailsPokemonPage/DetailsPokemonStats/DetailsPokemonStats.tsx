import { PokemonTypeBadge } from "@/components/PokemonTypeBadge/PokemonTypeBadge";
import { detailsPokemonStatsStyles } from "./DetailsPokemonStats.styles";
import { DetailsPokemonStatsTypes } from "./DetailsPokemonStats.types";
import { DetailsPokemonStatsBar } from "./DetailsPokemonStatsBar/DetailsPokemonStatsBar";
import { DetailsPokemonPhysicalStats } from "./DetailsPokemonPhysicalStats/DetailsPokemonPhysicalStats";

export const DetailsPokemonStats = ({
  types,
  abilities,
  height,
  stats,
  weight,
}: DetailsPokemonStatsTypes) => {
  const styles = detailsPokemonStatsStyles({ typeColor: types[0] });

  return (
    <div className={styles.detailsPokemonStatsWrapper}>
      <div className={styles.detailsPokemonStatsTypesWrapper}>
        {types.map((type) => (
          <PokemonTypeBadge key={type} pokemonType={type} />
        ))}
      </div>
      <h1 className={styles.detailsPokemonStatsAboutTitle}>About</h1>
      <DetailsPokemonPhysicalStats
        abilities={abilities}
        height={height}
        weight={weight}
      />
      <DetailsPokemonStatsBar stats={stats} types={types} />
    </div>
  );
};
