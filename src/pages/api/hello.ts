// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type PokemonData = {
  abilities: string[];
  detailPageURL?: string;
  weight: number;
  weakness: string[];
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  ThumbnailAltText: string;
  ThumbnailImage: string;
  id: number;
  type: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonData[]>
) {
  res.status(200).json([{
    abilities: ["Overgrow"],
    weight: 6.9,
    weakness: ["Fire", "Psychic", "Flying", "Ice"],
    number: "0001",
    height: 0.7,
    collectibles_slug: "bulbasaur",
    featured: "true",
    slug: "bulbasaur",
    name: "Bulbasaur",
    ThumbnailAltText: "Bulbasaur",
    ThumbnailImage:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    id: 1,
    type: ["grass", "poison"],
  },]);
}
