import React from 'react';

import './styles.css';

function Card({ data }){
  const pokemon = data;
  
  if(pokemon.length > 0){
    console.log(data);
    return(
      pokemon.map(poke => (
        <div className="cardContainer" key={poke.id}>
          <div className="imgPoke">
            <img src={poke.sprites.front_default} alt="Image" />
          </div>

          <div className="namePoke">
            {poke.name}
          </div>

          <div className="typePoke">
            {poke.types.map(types => {
              return(
                <p className="type" key={types.type.name}>{types.type.name}</p>
              )
            })}
          </div>

          <div className="dataPoke">
            <span>Ability: {poke.abilities[0].ability.name} </span>
            <span>Weight: {poke.weight}</span>
            <span >Height: {poke.height}</span>
          </div>
        </div>
      ))
    )
  }else{
    return <p>Loading...</p>
  }
}

export default Card;