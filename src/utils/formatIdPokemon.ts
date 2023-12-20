export const formatIdPokemon = (pokemonId: number): string => {
  let idFormatado = pokemonId.toString();
  while (idFormatado.length < 3) {
    idFormatado = `0${idFormatado}`;
  }
  return idFormatado;
};
