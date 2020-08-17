import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../../services/pokemon';
import Card from '../../components/Card';

import './styles.css';

function Initial() {

  const [nextPage, setNextPage ] = useState('');    
  const [prevPage, setPrevPage ] = useState('');    

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function searchPokemonList(){
      let response = await getAllPokemon();  
      setNextPage(response.next);
      setPrevPage(response.previous);
      
      await getPokemonDetail(response.results)
    };

    searchPokemonList();
  },[]);

  const getPokemonDetail = async (allUrlPokemons) => {

    const _pokemons = await Promise.all(
      allUrlPokemons.map(async data => {
        let returnedDataPokemon = await getPokemon(data.url);
        return returnedDataPokemon;
      })
    );
    

    setPokemonData(_pokemons);
  }

  if(pokemonData.length > 0){
    pokemonData.map(data => {
      console.log(data.name)
    })
  }
  return (
    <div className="Initial">
      <Card
        data={pokemonData}
        className="card"
      />
    </div>

    
  );
}

export default Initial;
