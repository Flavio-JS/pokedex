import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { css } from "../../styled-system/css/css";
import { TextField } from "./components/TextField/TextField";
import { SortButton } from "./components/SortButton/SortButton";
import { useHomePage } from "./useHomePage";

export default function Home() {
  const { sortedPokemons } = useHomePage();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      })}
    >
      <TextField />
      <SortButton />
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        })}
      >
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
}
