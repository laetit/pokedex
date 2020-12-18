const pokeType = 'pokeType'

export const setPokeType = (type) => sessionStorage.setItem(pokeType, type)

export const getPokeType = () => sessionStorage.getItem(pokeType)