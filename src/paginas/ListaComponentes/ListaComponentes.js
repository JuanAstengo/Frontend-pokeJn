import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../../componentes/Header'
import DetallePokemon from '../DetallePokemon/DetallePokemon'
import TarjetaPokemon from '../../componentes/tarjetaPokemon/TarjetaPokemon'
import Search from '../../componentes/Search'
import ColeccionPokemones from '../../componentes/ColeccionPokemones'


const ListaComponentes = () => {
  const [search, setSearch] = useState('');
  const[allPokemons, setAllPokemons] = useState([])

 const getAllPokemons = async () => {
   const res = await fetch("http://localhost:4000/pokemon")
   const data = await res.json()
    setAllPokemons(data)
    console.log(allPokemons)
  }

useEffect(() => {
 getAllPokemons()
}, [])
const handleString = () => {
  const strAscending = [...allPokemons].sort((a,b) => 
    a.name < b.name ? -1 : 1
  );
  setAllPokemons(strAscending)
}

const handleNumeric = () => {
  const numAscending = [...allPokemons].sort((a,b) =>
    a.id - b.id
  );
  setAllPokemons(numAscending)
}



return (

<div className='bg-[#2d70b7] w-full h-screen'>
        <div className='flex justify-center items-center p-[20px] bg-[#2d70b7]'>
            <div className='px-[20px] pt-[40px] border-2 border-gray-600 shadow-xl md:w-3/5 rounded-xl bg-[#f7f7f7]'>



          <Header
            handleString={handleString}
            handleNumeric={handleNumeric}
            setSearch={setSearch}
          />
          
          
          <div className='flex flex-wrap justify-center items-center mt-[30px]'>
           <ColeccionPokemones
            allPokemons={allPokemons.filter((pokemon) => pokemon.nombre.toLowerCase().match(search.toLowerCase()))}

           />
          </div>    
             
          </div>
        </div>
</div>      

)

}
export default ListaComponentes;


