import { sva } from "../../../styled-system/css";

export const pokemonTypeBadgeStyles = sva({
  slots: ["pokemonTypeBadgeStylesWrapper"],
  base: {
    pokemonTypeBadgeStylesWrapper: {
      height: "20px",
      width: "min-content",
      padding: " 2px 8px",
      fontSize: "10px",
      fontWeight: "700",
      borderRadius: "10px",
    },
  },
  variants: {
    backgroundTypeColor: {
      bug: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.bug",
        },
      },
      dark: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.dark",
        },
      },
      dragon: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.dragon",
        },
      },
      electric: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.electric",
        },
      },
      fairy: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.fairy",
        },
      },
      fighting: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.fighting",
        },
      },
      fire: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.fire",
        },
      },
      flying: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.flying",
        },
      },
      ghost: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.ghost",
        },
      },
      normal: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.normal",
        },
      },
      grass: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.grass",
        },
      },
      ground: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.ground",
        },
      },
      ice: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.ice",
        },
      },
      poison: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.poison",
        },
      },
      psychic: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.psychic",
        },
      },
      rock: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.rock",
        },
      },
      steel: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.steel",
        },
      },
      water: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "pokemonType.water",
        },
      },
      type: {
        pokemonTypeBadgeStylesWrapper: {
          backgroundColor: "grayscale.medium",
        },
      },
    },
  },
});
