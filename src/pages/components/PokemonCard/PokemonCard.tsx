import Image from "next/image";
import { pokemonCardDataTypes } from "./PokemonCard.types";
import { pokemonCardStyles } from "./PokemonCard.styles";

export const PokemonCard = ({
  PokemonNumber,
  pokemonImgUrl,
  pokemonImgAlt,
  pokemonName,
}: pokemonCardDataTypes) => {
  const styles = pokemonCardStyles();
  return (
    <div className={styles.pokemonCardWrapper}>
      <div className={styles.pokemonNumberWrapper}>#{PokemonNumber}</div>
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
