export async function getAllPokemon(urlToFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlToFetch)
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
