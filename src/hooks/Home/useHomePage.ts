import { useRouter } from "next/router";
import pokemonsData from "../api/pokemons.json";

export const useHomePage = () => {
  const router = useRouter();

  const filterValue = router.query.filter
    ? String(router.query.filter).toLowerCase()
    : undefined;

  const sortByNumberOrName =
    router.query.sort === undefined || router.query.sort === "number"
      ? "number"
      : "name";

  const filteredPokemons = filterValue
    ? pokemonsData.filter((pokemonData) => {
        const pokemonName = pokemonData.name.toLowerCase();
        const filterLower = filterValue.toLowerCase();
        const matchesId = pokemonData.id.toString().includes(filterLower);
        const matchesName = pokemonName.includes(filterLower);

        return matchesId || matchesName;
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
    sortedPokemons,
  };
};
