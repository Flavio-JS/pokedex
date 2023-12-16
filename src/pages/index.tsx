import { css } from "../../styled-system/css";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { PokemonTypeBadge } from "./components/PokemonTypeBadge/PokemonTypeBadge";
import pokemonsData from "./api/pokemons.json";

export default function Home() {
  const pokemonTypes = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        })}
      >
        {pokemonTypes.map((pokemonType) => (
          <PokemonTypeBadge pokemonType={pokemonType} key={pokemonType} />
        ))}
      </div>
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
            pokemonImgUrl={pokemonData.ThumbnailImage}
            pokemonName={pokemonData.name}
            pokemonImgAlt={pokemonData.name}
          />
        ))}
      </div>
    </div>
  );
}
