import Image from "next/image";
import { useRouter } from "next/router";
import { Icon } from "@/components/Icon/Icon";
import { detailsPokemonImageStyles } from "./DetailsPokemonImage.styles";
import { DetailsPokemonImageTypes } from "./DetailsPokemonImage.types";

export const DetailsPokemonImage = ({
  id,
  imgUrl,
  name,
}: DetailsPokemonImageTypes) => {
  const styles = detailsPokemonImageStyles();

  const router = useRouter();

  const handlePreviousPokemonClick = (pokemonId: number) => {
    if (pokemonId === 1) return void router.push(`/pokemon/1010`);

    return void router.push(`/pokemon/${pokemonId - 1}`);
  };

  const handleNextPokemonClick = (pokemonId: number) => {
    if (pokemonId === 1010) return void router.push(`/pokemon/1`);

    return void router.push(`/pokemon/${pokemonId + 1}`);
  };
  return (
    <div className={styles.detailsPokemonImageWrapper}>
      <button
        className={styles.detailsPokemonImagePreviousAndNextButton}
        type="button"
        aria-label="Pokemon anterior"
        onClick={() => handlePreviousPokemonClick(id)}
      >
        <Icon iconName="ChevronLeftIcon" />
      </button>

      <Image
        className={styles.detailsPokemonImage}
        alt={name}
        width={180}
        height={180}
        src={imgUrl}
        priority
      />

      <button
        className={styles.detailsPokemonImagePreviousAndNextButton}
        type="button"
        aria-label="Próximo pokemon"
        onClick={() => handleNextPokemonClick(id)}
      >
        <Icon iconName="ChevronRightIcon" />
      </button>
    </div>
  );
};
