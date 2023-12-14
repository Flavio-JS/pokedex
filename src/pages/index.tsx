import { css } from "../../styled-system/css";
import { PokemonTypeBadge } from "./components/PokemonTypeBadge/PokemonTypeBadge";

export default function Home() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
      `}
    >
      <PokemonTypeBadge pokemonType="bug" />
      <PokemonTypeBadge pokemonType="dark" />
      <PokemonTypeBadge pokemonType="dragon" />
      <PokemonTypeBadge pokemonType="electric" />
      <PokemonTypeBadge pokemonType="fairy" />
      <PokemonTypeBadge pokemonType="fighting" />
      <PokemonTypeBadge pokemonType="fire" />
      <PokemonTypeBadge pokemonType="flying" />
      <PokemonTypeBadge pokemonType="ghost" />
      <PokemonTypeBadge pokemonType="grass" />
      <PokemonTypeBadge pokemonType="ground" />
      <PokemonTypeBadge pokemonType="ice" />
      <PokemonTypeBadge pokemonType="normal" />
      <PokemonTypeBadge pokemonType="poison" />
      <PokemonTypeBadge pokemonType="psychic" />
      <PokemonTypeBadge pokemonType="rock" />
      <PokemonTypeBadge pokemonType="steel" />
      <PokemonTypeBadge pokemonType="water" />
    </div>
  );
}
