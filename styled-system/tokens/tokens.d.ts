/* eslint-disable */
export type Token = "fonts.body" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.pokemonType.bug" | "colors.pokemonType.dark" | "colors.pokemonType.dragon" | "colors.pokemonType.electric" | "colors.pokemonType.fairy" | "colors.pokemonType.fighting" | "colors.pokemonType.fire" | "colors.pokemonType.flying" | "colors.pokemonType.ghost" | "colors.pokemonType.normal" | "colors.pokemonType.grass" | "colors.pokemonType.ground" | "colors.pokemonType.ice" | "colors.pokemonType.poison" | "colors.pokemonType.psychic" | "colors.pokemonType.rock" | "colors.pokemonType.steel" | "colors.pokemonType.water" | "colors.identity.primary" | "colors.grayscale.dark" | "colors.grayscale.medium" | "colors.grayscale.light" | "colors.grayscale.background" | "colors.grayscale.white" | "colors.grayscale.wireframe" | "colors.colorPalette.bug" | "colors.colorPalette.dark" | "colors.colorPalette.dragon" | "colors.colorPalette.electric" | "colors.colorPalette.fairy" | "colors.colorPalette.fighting" | "colors.colorPalette.fire" | "colors.colorPalette.flying" | "colors.colorPalette.ghost" | "colors.colorPalette.normal" | "colors.colorPalette.grass" | "colors.colorPalette.ground" | "colors.colorPalette.ice" | "colors.colorPalette.poison" | "colors.colorPalette.psychic" | "colors.colorPalette.rock" | "colors.colorPalette.steel" | "colors.colorPalette.water" | "colors.colorPalette.primary" | "colors.colorPalette.medium" | "colors.colorPalette.light" | "colors.colorPalette.background" | "colors.colorPalette.white" | "colors.colorPalette.wireframe"

export type ColorPalette = "pokemonType" | "identity" | "grayscale"

export type FontToken = "body"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type ColorToken = "pokemonType.bug" | "pokemonType.dark" | "pokemonType.dragon" | "pokemonType.electric" | "pokemonType.fairy" | "pokemonType.fighting" | "pokemonType.fire" | "pokemonType.flying" | "pokemonType.ghost" | "pokemonType.normal" | "pokemonType.grass" | "pokemonType.ground" | "pokemonType.ice" | "pokemonType.poison" | "pokemonType.psychic" | "pokemonType.rock" | "pokemonType.steel" | "pokemonType.water" | "identity.primary" | "grayscale.dark" | "grayscale.medium" | "grayscale.light" | "grayscale.background" | "grayscale.white" | "grayscale.wireframe" | "colorPalette.bug" | "colorPalette.dark" | "colorPalette.dragon" | "colorPalette.electric" | "colorPalette.fairy" | "colorPalette.fighting" | "colorPalette.fire" | "colorPalette.flying" | "colorPalette.ghost" | "colorPalette.normal" | "colorPalette.grass" | "colorPalette.ground" | "colorPalette.ice" | "colorPalette.poison" | "colorPalette.psychic" | "colorPalette.rock" | "colorPalette.steel" | "colorPalette.water" | "colorPalette.primary" | "colorPalette.medium" | "colorPalette.light" | "colorPalette.background" | "colorPalette.white" | "colorPalette.wireframe"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		colors: ColorToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"