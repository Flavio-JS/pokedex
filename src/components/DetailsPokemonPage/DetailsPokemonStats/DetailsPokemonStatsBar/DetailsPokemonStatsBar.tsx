import { css } from "../../../../../styled-system/css";
import { DetailsPokemonStatsBarTypes } from "./DetailPokemonStatsBar.types";
import { detailsPokemonStatsBarStyles } from "./DetailsPokemonStatsBar.styles";

export const DetailsPokemonStatsBar = ({
  stats,
  types,
}: DetailsPokemonStatsBarTypes) => {
  const styles = detailsPokemonStatsBarStyles({ typeColor: types[0] });
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        width: "100%",
      })}
    >
      <h1 className={styles.detailsPokemonStatsBarTitle}>Base Stats</h1>
      <div className={styles.detailsPokemonStatsBarWrapper}>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          })}
        >
          <span className={styles.detailsPokemonStatsBarTitle}>HP</span>
          <span className={styles.detailsPokemonStatsBarTitle}>ATK</span>
          <span className={styles.detailsPokemonStatsBarTitle}>DEF</span>
          <span className={styles.detailsPokemonStatsBarTitle}>SATK</span>
          <span className={styles.detailsPokemonStatsBarTitle}>SDEF</span>
          <span className={styles.detailsPokemonStatsBarTitle}>SPD</span>
        </div>
        <div
          className={css({
            borderLeft: "1px solid #E0E0E0",
            height: "96px",
            width: "1px",
          })}
        />
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          })}
        >
          <span className={css({ fontSize: "10px" })}>{stats.hp}</span>
          <span className={css({ fontSize: "10px" })}>{stats.atk}</span>
          <span className={css({ fontSize: "10px" })}>{stats.def}</span>
          <span className={css({ fontSize: "10px" })}>{stats.satk}</span>
          <span className={css({ fontSize: "10px" })}>{stats.sdef}</span>
          <span className={css({ fontSize: "10px" })}>{stats.spd}</span>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
          })}
        >
          <div className={css({ display: "flex" })}>
            <div
              className={styles.detailsPokemonStatsBarRow}
              style={{ minWidth: `${(stats.hp * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull} />
          </div>

          <div className={css({ display: "flex" })}>
            <div
              className={styles.detailsPokemonStatsBarRow}
              style={{ minWidth: `${(stats.atk * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull} />
          </div>

          <div className={css({ display: "flex" })}>
            <div
              className={styles.detailsPokemonStatsBarRow}
              style={{ minWidth: `${(stats.def * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull} />
          </div>

          <div className={css({ display: "flex" })}>
            <div
              className={styles.detailsPokemonStatsBarRow}
              style={{ minWidth: `${(stats.satk * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull} />
          </div>

          <div className={css({ display: "flex" })}>
            <div
              className={styles.detailsPokemonStatsBarRow}
              style={{ minWidth: `${(stats.sdef * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull} />
          </div>

          <div className={css({ display: "flex" })}>
            <div
              className={styles.detailsPokemonStatsBarRow}
              style={{ minWidth: `${(stats.spd * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull} />
          </div>
        </div>
      </div>
    </div>
  );
};
