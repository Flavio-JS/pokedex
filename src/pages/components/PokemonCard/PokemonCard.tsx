import Image from "next/image";
import { pokemonCardDataTypes } from "./PokemonCard.types";
import { pokemonCardStyles } from "./PokemonCard.styles";
import { useRouter } from "../../../../node_modules/next/router";

export const PokemonCard = ({
  pokemonNumber,
  pokemonImgUrl,
  pokemonImgAlt,
  pokemonName,
}: pokemonCardDataTypes) => {
  const styles = pokemonCardStyles();
  const router = useRouter();
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
