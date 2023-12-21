import { sva } from "../../../../styled-system/css";

export const detailsPokemonStatsStyles = sva({
  slots: [
    "detailsPokemonStatsWrapper",
    "detailsPokemonStatsTypesWrapper",
    "detailsPokemonStatsAboutTitle",
    "detailsPokemonStatsBaseStatsTitle",
  ],
  base: {
    detailsPokemonStatsWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 20px 20px 20px",
      height: "100%",
      width: "100%",
      backgroundColor: "grayscale.white",
      borderRadius: "8px",
      gap: "16px",
    },
    detailsPokemonStatsTypesWrapper: {
      display: "flex",
      gap: "16px",
    },
    detailsPokemonStatsAboutTitle: {
      fontSize: "14px",
      fontWeight: "700",
    },
    detailsPokemonStatsBaseStatsTitle: {
      fontSize: "14px",
      fontWeight: "700",
    },
  },
  variants: {
    typeColor: {
      bug: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.bug",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.bug",
        },
      },
      dark: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.dark",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.dark",
        },
      },
      dragon: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.dragon",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.dragon",
        },
      },
      electric: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.electric",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.electric",
        },
      },
      fairy: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.fairy",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.fairy",
        },
      },
      fighting: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.fighting",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.fighting",
        },
      },
      fire: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.fire",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.fire",
        },
      },
      flying: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.flying",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.flying",
        },
      },
      ghost: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.ghost",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.ghost",
        },
      },
      normal: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.normal",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.normal",
        },
      },
      grass: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.grass",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.grass",
        },
      },
      ground: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.ground",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.ground",
        },
      },
      ice: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.ice",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.ice",
        },
      },
      poison: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.poison",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.poison",
        },
      },
      psychic: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.psychic",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.psychic",
        },
      },
      rock: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.rock",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.rock",
        },
      },
      steel: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.steel",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.steel",
        },
      },
      water: {
        detailsPokemonStatsAboutTitle: {
          color: "pokemonType.water",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "pokemonType.water",
        },
      },
      type: {
        detailsPokemonStatsAboutTitle: {
          color: "grayscale.wireframe",
        },
        detailsPokemonStatsBaseStatsTitle: {
          color: "grayscale.wireframe",
        },
      },
    },
  },
});
