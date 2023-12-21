import { PokemonTypeBadge } from "@/components/PokemonTypeBadge/PokemonTypeBadge";
import { Icon } from "@/components/Icon/Icon";
import { detailsPokemonStatsStyles } from "./DetailsPokemonStats.styles";
import { DetailsPokemonStatsTypes } from "./DetailsPokemonStats.types";
import { css } from "../../../../styled-system/css";

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
      <div className={styles.detailsPokemonStatsPhysicalInformationWrapper}>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2px 0",
          })}
        >
          <div
            className={css({
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: "10px",
            })}
          >
            <Icon iconName="WeightIcon" />
            {weight / 10} kg
          </div>
          <span className={css({ fontSize: "8px", color: "#666" })}>
            Weight
          </span>
        </div>

        <div
          className={css({
            borderLeft: "1px solid #E0E0E0",
            height: "48px",
            width: "1px",
          })}
        />
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2px 0",
          })}
        >
          <div
            className={css({
              display: "flex",
              gap: "8px",
              alignItems: "center",
              fontSize: "10px",
            })}
          >
            <Icon iconName="RulerIcon" />
            {height / 10} m
          </div>
          <span className={css({ fontSize: "8px", color: "#666" })}>
            Height
          </span>
        </div>

        <div
          className={css({
            borderLeft: "1px solid #E0E0E0",
            height: "48px",
            width: "1px",
          })}
        />
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2px 0",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "10px",
            })}
          >
            {abilities.map((abilitie, i) => (
              <span key={`${abilitie + i}`}>{abilitie}</span>
            ))}
          </div>
          <span className={css({ fontSize: "8px", color: "#666" })}>Moves</span>
        </div>
      </div>
      <div>
        <h1 className={styles.detailsPokemonStatsBaseStatsTitle}>Base Stats</h1>
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
