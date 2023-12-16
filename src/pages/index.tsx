import { css } from "../../styled-system/css";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import pokemonsData from "./api/pokemons.json";
import { TextField } from "../../node_modules/@mui/material/index";

export default function Home() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      })}
    >
      <TextField label="Meu Texto" variant="outlined" />
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        })}
      >
        {pokemonsData.map((pokemonData) => (
          <PokemonCard
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
