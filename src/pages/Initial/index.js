import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../../services/pokemon';
import Card from '../../components/Card';

import './styles.css';

function Initial() {

  const [urlToFetch, setUrlToFetch] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [nextPage, setNextPage ] = useState('');    
  const [prevPage, setPrevPage ] = useState('');    

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function searchPokemonList(){
      let response = await getAllPokemon(urlToFetch);
      setNextPage(response.next);
      setPrevPage(response.previous);
      
      await getPokemonDetail(response.results)
    };

    searchPokemonList();
  },[urlToFetch]);

  const getPokemonDetail = async (allUrlPokemons) => {
    const _pokemons = await Promise.all(
      allUrlPokemons.map(async data => {
        let returnedDataPokemon = await getPokemon(data.url);
        return returnedDataPokemon;
      })
    );

    setPokemonData(_pokemons);
  }

  return (
    <>
      <button onClick={() => {prevPage ? setUrlToFetch(prevPage) : alert("Isn't possible!")}}>Previous</button>
      <button onClick={() => {nextPage ? setUrlToFetch(nextPage) : alert("Isn't possible!")}}>Next</button>
      
      <div className="Initial">
        <Card
          data={pokemonData}
          className="card"
        />
      </div>
    
      <button onClick={() => {prevPage ? setUrlToFetch(prevPage) : alert("Isn't possible!")}}>Previous</button>
      <button onClick={() => {nextPage ? setUrlToFetch(nextPage) : alert("Isn't possible!")}}>Next</button>  
    </>
  );
}

export default Initial;
