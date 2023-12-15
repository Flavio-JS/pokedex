import { css } from "../../styled-system/css";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { PokemonTypeBadge } from "./components/PokemonTypeBadge/PokemonTypeBadge";

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
        <PokemonCard
          PokemonNumber="0001"
          pokemonImgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          pokemonName="Bulbasaur"
          pokemonImgAlt="Bulbasaur"
        />
        <PokemonCard
          PokemonNumber="0004"
          pokemonImgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
          pokemonName="Charmander"
          pokemonImgAlt="Charmander"
        />
      </div>
    </div>
  );
}
