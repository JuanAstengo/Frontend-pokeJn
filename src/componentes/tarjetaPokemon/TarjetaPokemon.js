import React from 'react'
import { Link } from 'react-router-dom'
import './colores.css' 

const TarjetaPokemon = ({id, image, name, type, allPokemons}) => {

return (
    <Link to={`/pokemon/${id}`}>
        <div className={`w-[200px] h-[200px] border-2 rounded-2xl m-[10px] flex flex-col justify-between border${type}`}>
           
            <div className='flex justify-end pr-[10px] pt-[5px]'>
          {(() => {
            if (id<10) {
              return (
                <p className={`id${type} font-bold`}>#00{id}</p>
              )
            } else {
              return (
                <p className={`id${type} font-bold`}>#0{id}</p>
              )
            }
          })()}
            </div>
            <div className="flex items-center justify-center">
                <img src={image} className='w-[100px] h-[100px]'/>
            </div>
            <div className={`text-white flex items-center justify-center h-[35px] capitalize card background${type}`}>
                <p>{name}</p>
            </div>
        </div>
    </Link>
     )
 }


export default TarjetaPokemon

