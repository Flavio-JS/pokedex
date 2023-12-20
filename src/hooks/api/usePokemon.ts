import axios from "axios";
import { useQuery } from "react-query";
import { formatIdPokemon } from "@/utils/formatIdPokemon";
import { PokemonTypes } from "@/components/PokemonTypeBadge/PokemonTypeBadge.types";
import { PokemonData, PokemonDataSummarized } from "./usePokemon.types";

const basePath = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (id: number): Promise<PokemonData> => {
  try {
    const response = await axios.get(`${basePath}${id}`);
    return response.data as PokemonData;
  } catch (error) {
    throw new Error(`Erro ao obter informações do Pokémon`);
  }
};

const usePokemonByIdQuery = "pokemonByIdQuery";

export const usePokemonById = (id: number) => {
  return useQuery({
    queryKey: [`${usePokemonByIdQuery}${id}`],
    queryFn: () => getPokemonById(id),
    select: (pokemonData: PokemonData): PokemonDataSummarized => {
      let abilities: string[] = [];
      for (let i = 0; i < pokemonData.abilities.length; i += 1) {
        abilities = [...abilities, pokemonData.abilities[i].ability.name];
      }

      let types: PokemonTypes[] = [];
      for (let i = 0; i < pokemonData.types.length; i += 1) {
        types = [...types, pokemonData.types[i].type.name];
      }

      const stats = {
        hp: pokemonData.stats[0].base_stat,
        atk: pokemonData.stats[1].base_stat,
        def: pokemonData.stats[2].base_stat,
        satk: pokemonData.stats[3].base_stat,
        sdef: pokemonData.stats[4].base_stat,
        spd: pokemonData.stats[5].base_stat,
      };

      const name =
        pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

      const imgUrl = `/imagens_pokemon/${formatIdPokemon(pokemonData.id)}.png`;

      const number = formatIdPokemon(pokemonData.id);

      const pokemonDataSummarized: PokemonDataSummarized = {
        abilities,
        height: pokemonData.height,
        id: pokemonData.id,
        number,
        name,
        stats,
        types,
        weight: pokemonData.weight,
        imgUrl,
      };

      return pokemonDataSummarized;
    },
  });
};
