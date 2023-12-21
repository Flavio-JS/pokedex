import { PokemonTypes } from "@/components/PokemonTypeBadge/PokemonTypeBadge.types";

export type PokemonData = {
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type PokemonDataSummarized = {
  abilities: string[];
  height: number;
  id: number;
  number: string;
  name: string;
  stats: Stats;
  types: PokemonTypes[];
  weight: number;
  imgUrl: string;
};

export type Stats = {
  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;
};

export type Type = {
  slot: number;
  type: Ability;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Ability;
};

export type Sprites = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: Other;
  versions: Versions;
};

export type Versions = {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
};

export type Generationviii = {
  icons: Dreamworld;
};

export type Generationvii = {
  icons: Dreamworld;
  "ultra-sun-ultra-moon": Home;
};

export type Generationvi = {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
};

export type Generationv = {
  "black-white": Blackwhite;
};

export type Blackwhite = {
  animated: Diamondpearl;
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

export type Generationiv = {
  "diamond-pearl": Diamondpearl;
  "heartgold-soulsilver": Diamondpearl;
  platinum: Diamondpearl;
};

export type Diamondpearl = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

export type Generationiii = {
  emerald: Officialartwork;
  "firered-leafgreen": Fireredleafgreen;
  "ruby-sapphire": Fireredleafgreen;
};

export type Fireredleafgreen = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

export type Generationii = {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
};

export type Gold = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
};

export type Crystal = {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
};

export type Generationi = {
  "red-blue": Redblue;
  yellow: Redblue;
};

export type Redblue = {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
};

export type Other = {
  dream_world: Dreamworld;
  home: Home;
  "official-artwork": Officialartwork;
};

export type Officialartwork = {
  front_default: string;
  front_shiny: string;
};

export type Home = {
  front_default: string;
  front_shiny: string;
};

export type Dreamworld = {
  front_default: string;
};

export type Move = {
  move: Ability;
  version_group_details: Versiongroupdetail[];
};

export type Versiongroupdetail = {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
};

export type Gameindex = {
  game_index: number;
  version: Ability;
};

export type Ability2 = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

export type Ability = {
  name: PokemonTypes;
  url: string;
};
