import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { css } from "../../styled-system/css/css";
import { useHomePage } from "./useHomePage";
import { PokedexList } from "./components/PokedexList/PokedexList";

export default function Home() {
  return <PokedexList />;
}
