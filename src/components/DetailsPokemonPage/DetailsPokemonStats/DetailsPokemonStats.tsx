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
      <h1>ABOUT</h1>
      <div className={styles.detailsPokemonStatsPhysicalInformationWrapper}>
        <div>{weight}</div>
        <div>{height}</div>
        <div>
          {abilities.map((abilitie) => (
            <>{abilitie}</>
          ))}
        </div>
      </div>
      <div>
        <h1>Base Stats</h1>
        <div>HP: {stats.hp} / 255</div>
        <div>ATK: {stats.atk} / 255</div>
        <div>DEF: {stats.def} / 255</div>
        <div>SATK: {stats.satk} / 255</div>
        <div>SDEF: {stats.sdef} / 255</div>
        <div>SPD: {stats.spd} / 255</div>
      </div>
    </div>
  );
};
