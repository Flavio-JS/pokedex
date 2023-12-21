import { sva } from "../../../styled-system/css";

export const detailsPokemonPageStyles = sva({
  slots: ["detailsPokemonWrapper"],
  base: {
    detailsPokemonWrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      padding: "4px",
      width: "100vw",
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.20)",
      backgroundColor: "grayscale.wireframe",
    },
  },
  variants: {
    backgroundTypeColor: {
      bug: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.bug",
        },
      },
      dark: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.dark",
        },
      },
      dragon: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.dragon",
        },
      },
      electric: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.electric",
        },
      },
      fairy: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.fairy",
        },
      },
      fighting: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.fighting",
        },
      },
      fire: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.fire",
        },
      },
      flying: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.flying",
        },
      },
      ghost: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.ghost",
        },
      },
      normal: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.normal",
        },
      },
      grass: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.grass",
        },
      },
      ground: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.ground",
        },
      },
      ice: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.ice",
        },
      },
      poison: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.poison",
        },
      },
      psychic: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.psychic",
        },
      },
      rock: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.rock",
        },
      },
      steel: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.steel",
        },
      },
      water: {
        detailsPokemonWrapper: {
          backgroundColor: "pokemonType.water",
        },
      },
      type: {
        detailsPokemonWrapper: {
          backgroundColor: "grayscale.wireframe",
        },
      },
    },
  },
});
