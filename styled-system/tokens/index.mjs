const tokens = {
  "fonts.body": {
    "value": "system-ui, sans-serif",
    "variable": "var(--fonts-body)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "colors.pokemonType.bug": {
    "value": "var(--colors-pokemon-type-bug)",
    "variable": "var(--colors-pokemon-type-bug)"
  },
  "colors.pokemonType.dark": {
    "value": "var(--colors-pokemon-type-dark)",
    "variable": "var(--colors-pokemon-type-dark)"
  },
  "colors.pokemonType.dragon": {
    "value": "var(--colors-pokemon-type-dragon)",
    "variable": "var(--colors-pokemon-type-dragon)"
  },
  "colors.pokemonType.electric": {
    "value": "var(--colors-pokemon-type-electric)",
    "variable": "var(--colors-pokemon-type-electric)"
  },
  "colors.pokemonType.fairy": {
    "value": "var(--colors-pokemon-type-fairy)",
    "variable": "var(--colors-pokemon-type-fairy)"
  },
  "colors.pokemonType.fighting": {
    "value": "var(--colors-pokemon-type-fighting)",
    "variable": "var(--colors-pokemon-type-fighting)"
  },
  "colors.pokemonType.fire": {
    "value": "var(--colors-pokemon-type-fire)",
    "variable": "var(--colors-pokemon-type-fire)"
  },
  "colors.pokemonType.flying": {
    "value": "var(--colors-pokemon-type-flying)",
    "variable": "var(--colors-pokemon-type-flying)"
  },
  "colors.pokemonType.ghost": {
    "value": "var(--colors-pokemon-type-ghost)",
    "variable": "var(--colors-pokemon-type-ghost)"
  },
  "colors.pokemonType.normal": {
    "value": "var(--colors-pokemon-type-normal)",
    "variable": "var(--colors-pokemon-type-normal)"
  },
  "colors.pokemonType.grass": {
    "value": "var(--colors-pokemon-type-grass)",
    "variable": "var(--colors-pokemon-type-grass)"
  },
  "colors.pokemonType.ground": {
    "value": "var(--colors-pokemon-type-ground)",
    "variable": "var(--colors-pokemon-type-ground)"
  },
  "colors.pokemonType.ice": {
    "value": "var(--colors-pokemon-type-ice)",
    "variable": "var(--colors-pokemon-type-ice)"
  },
  "colors.pokemonType.poison": {
    "value": "var(--colors-pokemon-type-poison)",
    "variable": "var(--colors-pokemon-type-poison)"
  },
  "colors.pokemonType.psychic": {
    "value": "var(--colors-pokemon-type-psychic)",
    "variable": "var(--colors-pokemon-type-psychic)"
  },
  "colors.pokemonType.rock": {
    "value": "var(--colors-pokemon-type-rock)",
    "variable": "var(--colors-pokemon-type-rock)"
  },
  "colors.pokemonType.steel": {
    "value": "var(--colors-pokemon-type-steel)",
    "variable": "var(--colors-pokemon-type-steel)"
  },
  "colors.pokemonType.water": {
    "value": "var(--colors-pokemon-type-water)",
    "variable": "var(--colors-pokemon-type-water)"
  },
  "colors.identity.primary": {
    "value": "var(--colors-identity-primary)",
    "variable": "var(--colors-identity-primary)"
  },
  "colors.grayscale.dark": {
    "value": "var(--colors-grayscale-dark)",
    "variable": "var(--colors-grayscale-dark)"
  },
  "colors.grayscale.medium": {
    "value": "var(--colors-grayscale-medium)",
    "variable": "var(--colors-grayscale-medium)"
  },
  "colors.grayscale.light": {
    "value": "var(--colors-grayscale-light)",
    "variable": "var(--colors-grayscale-light)"
  },
  "colors.grayscale.background": {
    "value": "var(--colors-grayscale-background)",
    "variable": "var(--colors-grayscale-background)"
  },
  "colors.grayscale.white": {
    "value": "var(--colors-grayscale-white)",
    "variable": "var(--colors-grayscale-white)"
  },
  "colors.colorPalette.bug": {
    "value": "var(--colors-color-palette-bug)",
    "variable": "var(--colors-color-palette-bug)"
  },
  "colors.colorPalette.dark": {
    "value": "var(--colors-color-palette-dark)",
    "variable": "var(--colors-color-palette-dark)"
  },
  "colors.colorPalette.dragon": {
    "value": "var(--colors-color-palette-dragon)",
    "variable": "var(--colors-color-palette-dragon)"
  },
  "colors.colorPalette.electric": {
    "value": "var(--colors-color-palette-electric)",
    "variable": "var(--colors-color-palette-electric)"
  },
  "colors.colorPalette.fairy": {
    "value": "var(--colors-color-palette-fairy)",
    "variable": "var(--colors-color-palette-fairy)"
  },
  "colors.colorPalette.fighting": {
    "value": "var(--colors-color-palette-fighting)",
    "variable": "var(--colors-color-palette-fighting)"
  },
  "colors.colorPalette.fire": {
    "value": "var(--colors-color-palette-fire)",
    "variable": "var(--colors-color-palette-fire)"
  },
  "colors.colorPalette.flying": {
    "value": "var(--colors-color-palette-flying)",
    "variable": "var(--colors-color-palette-flying)"
  },
  "colors.colorPalette.ghost": {
    "value": "var(--colors-color-palette-ghost)",
    "variable": "var(--colors-color-palette-ghost)"
  },
  "colors.colorPalette.normal": {
    "value": "var(--colors-color-palette-normal)",
    "variable": "var(--colors-color-palette-normal)"
  },
  "colors.colorPalette.grass": {
    "value": "var(--colors-color-palette-grass)",
    "variable": "var(--colors-color-palette-grass)"
  },
  "colors.colorPalette.ground": {
    "value": "var(--colors-color-palette-ground)",
    "variable": "var(--colors-color-palette-ground)"
  },
  "colors.colorPalette.ice": {
    "value": "var(--colors-color-palette-ice)",
    "variable": "var(--colors-color-palette-ice)"
  },
  "colors.colorPalette.poison": {
    "value": "var(--colors-color-palette-poison)",
    "variable": "var(--colors-color-palette-poison)"
  },
  "colors.colorPalette.psychic": {
    "value": "var(--colors-color-palette-psychic)",
    "variable": "var(--colors-color-palette-psychic)"
  },
  "colors.colorPalette.rock": {
    "value": "var(--colors-color-palette-rock)",
    "variable": "var(--colors-color-palette-rock)"
  },
  "colors.colorPalette.steel": {
    "value": "var(--colors-color-palette-steel)",
    "variable": "var(--colors-color-palette-steel)"
  },
  "colors.colorPalette.water": {
    "value": "var(--colors-color-palette-water)",
    "variable": "var(--colors-color-palette-water)"
  },
  "colors.colorPalette.primary": {
    "value": "var(--colors-color-palette-primary)",
    "variable": "var(--colors-color-palette-primary)"
  },
  "colors.colorPalette.medium": {
    "value": "var(--colors-color-palette-medium)",
    "variable": "var(--colors-color-palette-medium)"
  },
  "colors.colorPalette.light": {
    "value": "var(--colors-color-palette-light)",
    "variable": "var(--colors-color-palette-light)"
  },
  "colors.colorPalette.background": {
    "value": "var(--colors-color-palette-background)",
    "variable": "var(--colors-color-palette-background)"
  },
  "colors.colorPalette.white": {
    "value": "var(--colors-color-palette-white)",
    "variable": "var(--colors-color-palette-white)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar