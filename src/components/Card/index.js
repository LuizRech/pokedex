import React from 'react';

import './styles.css';

function Card({ data }){
  const pokemon = data;
  
  if(pokemon.length > 0){
    return(
      pokemon.map(poke => (
        <div className="cardContainer" key={poke.id}>
          <div className="imgPoke">
            IMAGEM
          </div>

          <div className="typePoke">
            TIPOS
          </div>

          <div className="dataPoke">
            <span>Height: </span>
            <span>Width: {poke.weight}</span>
          </div>
        </div>
      ))
    )
  }else{
    return <p>Loading...</p>
  }
}

export default Card;