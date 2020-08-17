export async function getAllPokemon() {
  return new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => {
        resolve(data)
      });
  })
}

export async function getPokemon(data) {
  return await new Promise((resolve, reject) => {
    fetch(data)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      });
  })

}
