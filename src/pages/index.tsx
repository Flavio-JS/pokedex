import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import pokemonsData from "./api/pokemons.json";
import { css } from "../../styled-system/css/css";
import { TextField } from "./components/TextField/TextField";
import { useRouter } from "../../node_modules/next/router";
import { SortButton } from "./components/SortButton/SortButton";
export default function Home() {
  const router = useRouter();

  const filterValue = router.query.filter
    ? String(router.query.filter).toLowerCase()
    : undefined;

  const sortByNumberOrName =
    router.query.sort === undefined || router.query.sort === "number"
      ? "number"
      : "name";

  const filterByNumberOrName =
    router.query.filterBy === undefined || router.query.filterBy === "name"
      ? "name"
      : "number";

  const filteredPokemons = filterValue
    ? pokemonsData.filter((pokemonData) => {
        if (filterByNumberOrName === "number") {
          return pokemonData.id.toString().includes(filterValue);
        } else {
          const pokemonName = pokemonData.name.toLowerCase();
          return pokemonName.includes(filterValue.toLowerCase());
        }
      })
    : pokemonsData;

  let sortedPokemons = [];

  if (sortByNumberOrName === "number") {
    sortedPokemons = filteredPokemons.slice().sort((a, b) => a.id - b.id);
  } else {
    sortedPokemons = filteredPokemons.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

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
