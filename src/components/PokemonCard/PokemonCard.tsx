import Image from "next/image";
import { PokemonCardDataTypes } from "./PokemonCard.types";
import { pokemonCardStyles } from "./PokemonCard.styles";

export const PokemonCard = ({
  pokemonNumber,
  pokemonImgUrl,
  pokemonImgAlt,
  pokemonName,
}: PokemonCardDataTypes) => {
  const styles = pokemonCardStyles();
  return (
    <div className={styles.pokemonCardWrapper}>
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
