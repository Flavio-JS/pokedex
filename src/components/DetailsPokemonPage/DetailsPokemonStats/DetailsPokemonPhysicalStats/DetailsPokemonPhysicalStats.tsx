import { Icon } from "@/components/Icon/Icon";
import { css } from "../../../../../styled-system/css";
import { detailsPokemonPhysicalStatsStyles } from "./DetailsPokemonPhysicalStats.styles";
import { DetailsPokemonPhysicalStatsTypes } from "./DetailsPokemonPhysicalStats.types";

export const DetailsPokemonPhysicalStats = ({
  abilities,
  height,
  weight,
}: DetailsPokemonPhysicalStatsTypes) => {
  const styles = detailsPokemonPhysicalStatsStyles();
  return (
    <div className={styles.detailsPokemonPhysicalStatsWrapper}>
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
        <span className={css({ fontSize: "8px", color: "#666" })}>Weight</span>
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
        <span className={css({ fontSize: "8px", color: "#666" })}>Height</span>
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
  );
};
