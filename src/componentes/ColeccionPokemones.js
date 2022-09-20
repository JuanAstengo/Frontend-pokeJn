import React from 'react'
import TarjetaPokemon from './tarjetaPokemon/TarjetaPokemon'

const ColeccionPokemones = (props) => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-[30px]'>
    {props.allPokemons.map((pokemon, index) =>             
      <TarjetaPokemon
        
        id={pokemon.id}
        image={pokemon.img}
        name={pokemon.nombre}
        type={pokemon.types[0]?.nombre}
        key={index}
      />              
      )}
    </div> 
  )
}

export default ColeccionPokemones