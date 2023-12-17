import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import pokemonsData from "./api/pokemons.json";
import { css } from "../../styled-system/css/css";
import { TextField } from "./components/TextField/TextField";
import { useRouter } from "../../node_modules/next/router";
export default function Home() {
  const router = useRouter();

  const filterValue = router.query.filtro
    ? String(router.query.filtro).toLowerCase()
    : undefined;
  const filteredPokemons = filterValue
    ? pokemonsData.filter((pokemonData) => {
        const pokemonName = pokemonData.name.toLowerCase();

        return pokemonName.includes(filterValue);
      })
    : pokemonsData;
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
        {filteredPokemons.map((pokemonData) => (
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
