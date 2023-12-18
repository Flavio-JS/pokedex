import { useHomePage } from "@/pages/useHomePage";
import { css } from "../../../../styled-system/css/css";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { pokedexListStyles } from "./PokedexList.styles";
import { PokedexListHeader } from "./PokedexListHeader/PokedexListHeader";

export const PokedexList = () => {
  const styles = pokedexListStyles();
  const { sortedPokemons } = useHomePage();
  return (
    <div className={styles.pokedexListWrapper}>
      <PokedexListHeader />
      <div className={styles.pokedexListPokemonCardWrapper}>
        {sortedPokemons.map((pokemonData) => (
          <PokemonCard
            key={pokemonData.name}
            PokemonNumber={pokemonData.number}
            pokemonImgUrl={pokemonData.urlImage}
            pokemonName={pokemonData.name}
            pokemonImgAlt={pokemonData.name}
          />
        ))}
      </div>
    </div>
  );
};
