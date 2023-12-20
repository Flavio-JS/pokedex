import Image from "next/image";
import { useRouter } from "next/router";
import { KeyboardEvent } from "react";
import { PokemonCardDataTypes } from "./PokemonCard.types";
import { pokemonCardStyles } from "./PokemonCard.styles";

export const PokemonCard = ({
  pokemonId,
  pokemonNumber,
  pokemonImgUrl,
  pokemonImgAlt,
  pokemonName,
}: PokemonCardDataTypes) => {
  const styles = pokemonCardStyles();
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      void router.push(`/pokemon/${pokemonId}`);
    }
  };

  return (
    <div
      className={styles.pokemonCardWrapper}
      onClick={() => router.push(`/pokemon/${pokemonId}`)}
      onKeyDown={(e) => handleKeyDown(e)}
      role="button"
      tabIndex={0}
    >
      <div className={styles.pokemonNumberWrapper}>#{pokemonNumber}</div>
      <div className={styles.pokemonImageWrapper}>
        <Image
          className={styles.pokemonImage}
          alt={pokemonImgAlt}
          width={72}
          height={72}
          src={pokemonImgUrl}
        />
      </div>

      <div className={styles.pokemonNameWrapper}>{pokemonName}</div>
    </div>
  );
};
