import { usePokemonById } from "@/hooks/api/usePokemon";
import { useRouter } from "next/router";

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: pokemonData, isError, isLoading } = usePokemonById(Number(id));

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
    <div>
      {pokemonData && (
        <>
          <h1>Pokemon: {pokemonData.name}</h1>
          <h1>HP:{pokemonData.stats.hp}/max 255</h1>
          <h1>ATK:{pokemonData.stats.atk}/max 255</h1>
          <h1>DEF:{pokemonData.stats.def}/max 255</h1>
          <h1>SATK:{pokemonData.stats.satk}/max 255</h1>
          <h1>SDEF:{pokemonData.stats.sdef}/max 255</h1>
          <h1>SPD:{pokemonData.stats.spd}/max 255</h1>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
