import { usePokemonById } from "@/hooks/api/usePokemon";
import { useRouter } from "next/router";
import Image from "next/image";
import { detailsPokemonPage } from "./DetailsPokemonPage.styles";
import { Icon } from "../Icon/Icon";
import { PokemonTypeBadge } from "../PokemonTypeBadge/PokemonTypeBadge";

export const DetailsPokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: pokemonData, isError, isLoading } = usePokemonById(Number(id));

  const styles = detailsPokemonPage();

  const returnPreviousPage = () => {
    router.back();
  };

  const handlePreviousPokemonClick = () => {
    if (pokemonData) {
      if (pokemonData.id === 1) return void router.push(`/pokemon/1010`);

      return void router.push(`/pokemon/${pokemonData.id - 1}`);
    }
    return undefined;
  };

  const handleNextPokemonClick = () => {
    if (pokemonData) {
      if (pokemonData.id === 1010) return void router.push(`/pokemon/1`);

      return void router.push(`/pokemon/${pokemonData.id + 1}`);
    }
    return undefined;
  };

  if (isError)
    return (
      <div>
        <h1>Houve um erro</h1>
      </div>
    );

  if (isLoading)
    return (
      <div>
        <h1>CARREGANDO DOIDO</h1>
      </div>
    );

  return (
    <>
      {pokemonData && (
        <div className={styles.detailsPokemonWrapper}>
          <div className={styles.detailsPokemonHeader}>
            <button
              type="button"
              aria-label="voltar"
              onClick={() => returnPreviousPage()}
            >
              <Icon iconName="ArrowLeftIcon" />
            </button>
            <h1 className={styles.detailsPokemonTitleH1}>{pokemonData.name}</h1>
            <h2 className={styles.detailsPokemonTitleH2}>
              #{pokemonData.number}
            </h2>
          </div>
          <div
            className={styles.detailsPokemonImageWrapper}
            style={{
              height: 124 - 56,
            }}
          >
            <button
              className={styles.detailsPokemonPreviousAndNextButton}
              type="button"
              aria-label="Pokemon anterior"
              onClick={() => handlePreviousPokemonClick()}
            >
              <Icon iconName="ChevronLeftIcon" />
            </button>
            <div className={styles.detailsPokemonImage}>
              <Image
                alt={pokemonData.name}
                width={180}
                height={180}
                src={pokemonData.imgUrl}
              />
              <div className={styles.detailsPokemonTypesWrapper}>
                {pokemonData.types.map((type) => (
                  <PokemonTypeBadge key={type} pokemonType={type} />
                ))}
              </div>
            </div>

            <button
              className={styles.detailsPokemonPreviousAndNextButton}
              type="button"
              aria-label="Próximo pokemon"
              onClick={() => handleNextPokemonClick()}
            >
              <Icon iconName="ChevronRightIcon" />
            </button>
          </div>
          <div className={styles.detailsPokemonStatsWrapper} />
        </div>
      )}
    </>
  );
};

// <h1>Pokemon: {pokemonData.name}</h1>
// <h1>HP:{pokemonData.stats.hp}/max 255</h1>
// <h1>ATK:{pokemonData.stats.atk}/max 255</h1>
// <h1>DEF:{pokemonData.stats.def}/max 255</h1>
// <h1>SATK:{pokemonData.stats.satk}/max 255</h1>
// <h1>SDEF:{pokemonData.stats.sdef}/max 255</h1>
// <h1>SPD:{pokemonData.stats.spd}/max 255</h1>
