import { useHomePage } from "@/hooks/Home/useHomePage";
import { PokemonCard } from "./PokemonCard/PokemonCard";
import { pokedexListStyles } from "./PokedexListHomePage.styles";
import { PokedexListHeader } from "./PokedexListHeader/PokedexListHeader";

export const PokedexListHomePage = () => {
  const styles = pokedexListStyles();
  const { sortedPokemons } = useHomePage();

  return (
    <div className={styles.pokedexListWrapper}>
      <PokedexListHeader />
      <div className={styles.pokedexListPokemonCardWrapper}>
        {sortedPokemons.map((pokemonData) => (
          <PokemonCard
            key={pokemonData.id}
            pokemonId={pokemonData.id}
            pokemonNumber={pokemonData.number}
            pokemonImgUrl={pokemonData.urlImage}
            pokemonName={pokemonData.name}
            pokemonImgAlt={pokemonData.name}
          />
        ))}
      </div>
    </div>
  );
};
