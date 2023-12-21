import { sva } from "../../../../../styled-system/css";

export const detailsPokemonStatsBarStyles = sva({
  slots: [
    "detailsPokemonStatsBarTitle",
    "detailsPokemonStatsBarWrapper",
    "detailsPokemonStatsBarRowFull",
    "detailsPokemonStatsBarRow",
  ],
  base: {
    detailsPokemonStatsBarTitle: {
      fontSize: "10px",
      fontWeight: "700",
    },
    detailsPokemonStatsBarWrapper: {
      display: "flex",
      gap: "8px",
      width: "100%",
      maxWidth: "312px",
    },
    detailsPokemonStatsBarRowFull: {
      width: "100%",
      height: "4px",
      opacity: "0.2",
      backgroundColor: "grayscale.wireframe",
    },
    detailsPokemonStatsBarRow: {
      height: "4px",
      backgroundColor: "grayscale.wireframe",
    },
  },
  variants: {
    typeColor: {
      bug: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.bug",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.bug",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.bug",
        },
      },
      dark: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.dark",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.dark",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.dark",
        },
      },
      dragon: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.dragon",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.dragon",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.dragon",
        },
      },
      electric: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.electric",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.electric",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.electric",
        },
      },
      fairy: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.fairy",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.fairy",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.fairy",
        },
      },
      fighting: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.fighting",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.fighting",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.fighting",
        },
      },
      fire: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.fire",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.fire",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.fire",
        },
      },
      flying: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.flying",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.flying",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.flying",
        },
      },
      ghost: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.ghost",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.ghost",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.ghost",
        },
      },
      normal: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.normal",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.normal",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.normal",
        },
      },
      grass: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.grass",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.grass",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.grass",
        },
      },
      ground: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.ground",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.ground",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.ground",
        },
      },
      ice: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.ice",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.ice",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.ice",
        },
      },
      poison: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.poison",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.poison",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.poison",
        },
      },
      psychic: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.psychic",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.psychic",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.psychic",
        },
      },
      rock: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.rock",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.rock",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.rock",
        },
      },
      steel: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.steel",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.steel",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.steel",
        },
      },
      water: {
        detailsPokemonStatsBarTitle: {
          color: "pokemonType.water",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "pokemonType.water",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "pokemonType.water",
        },
      },
      type: {
        detailsPokemonStatsBarTitle: {
          color: "grayscale.wireframe",
        },
        detailsPokemonStatsBarRowFull: {
          backgroundColor: "grayscale.wireframe",
        },
        detailsPokemonStatsBarRow: {
          backgroundColor: "grayscale.wireframe",
        },
      },
    },
  },
});
