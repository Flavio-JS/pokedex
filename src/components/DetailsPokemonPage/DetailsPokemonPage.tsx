import { usePokemonById } from "@/hooks/api/usePokemon";
import { useRouter } from "next/router";
import { detailsPokemonPageStyles } from "./DetailsPokemonPage.styles";
import { DetailsPokemonHeader } from "./DetailsPokemonHeader/DetailsPokemonHeader";
import { DetailsPokemonImage } from "./DetailsPokemonImage/DetailsPokemonImage";
import { DetailsPokemonStats } from "./DetailsPokemonStats/DetailsPokemonStats";

export const DetailsPokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: pokemonData, isError, isLoading } = usePokemonById(Number(id));

  const styles = detailsPokemonPageStyles({
    backgroundTypeColor: pokemonData?.types[0],
  });

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
          <DetailsPokemonHeader
            name={pokemonData.name}
            number={pokemonData.number}
          />
          <DetailsPokemonImage
            id={pokemonData.id}
            imgUrl={pokemonData.imgUrl}
            name={pokemonData.name}
          />
          <DetailsPokemonStats
            abilities={pokemonData.abilities}
            height={pokemonData.height}
            stats={pokemonData.stats}
            types={pokemonData.types}
            weight={pokemonData.weight}
          />
        </div>
      )}
    </>
  );
};
