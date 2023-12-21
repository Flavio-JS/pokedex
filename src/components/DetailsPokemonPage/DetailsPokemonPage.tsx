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
      <div className={styles.detailsPokemonWrapper}>
        <DetailsPokemonHeader name="Error" number="000" />
        <DetailsPokemonImage
          id={0}
          imgUrl="/pokemonSilhouette.png"
          name="Error"
        />
        <DetailsPokemonStats
          abilities={["Error"]}
          height={0}
          stats={{
            hp: 0,
            atk: 0,
            def: 0,
            satk: 0,
            sdef: 0,
            spd: 0,
          }}
          types={["type"]}
          weight={0}
        />
      </div>
    );

  if (isLoading)
    return (
      <div className={styles.detailsPokemonWrapper}>
        <DetailsPokemonHeader name="Loading..." number="000" />
        <DetailsPokemonImage
          id={0}
          imgUrl="/pokemonSilhouette.png"
          name="Loading..."
        />
        <DetailsPokemonStats
          abilities={["Loading..."]}
          height={0}
          stats={{
            hp: 0,
            atk: 0,
            def: 0,
            satk: 0,
            sdef: 0,
            spd: 0,
          }}
          types={["type"]}
          weight={0}
        />
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
