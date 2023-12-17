import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import pokemonsData from "./api/pokemons.json";
import { css } from "../../styled-system/css/css";
import { TextField } from "./components/TextField/TextField";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      })}
    >
      <TextField />
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
