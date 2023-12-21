import { useRouter } from "next/router";
import { Icon } from "@/components/Icon/Icon";
import { css } from "../../../../styled-system/css";
import { detailsPokemonHeaderStyles } from "./DetailsPokemonHeader.styles";
import { DetailsPokemonHeaderTypes } from "./DetailsPokemonHeader.types";

export const DetailsPokemonHeader = ({
  name,
  number,
}: DetailsPokemonHeaderTypes) => {
  const styles = detailsPokemonHeaderStyles();

  const router = useRouter();
  return (
    <div className={styles.detailsPokemonHeaderWrapper}>
      <button
        className={css({ "&:hover": { cursor: "pointer" } })}
        type="button"
        aria-label="voltar"
        onClick={() => router.push("/")}
      >
        <Icon iconName="ArrowLeftIcon" />
      </button>
      <h1 className={styles.detailsPokemonHeaderH1}>{name}</h1>
      <h2 className={styles.detailsPokemonHeaderH2}>#{number}</h2>
    </div>
  );
};
