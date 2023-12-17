import { useRouter } from "../../node_modules/next/router";
import pokemonsData from "./api/pokemons.json";

export const useHomePage = () => {
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
  return {
    filterValue,
    sortByNumberOrName,
    filterByNumberOrName,
    sortedPokemons,
  };
};
