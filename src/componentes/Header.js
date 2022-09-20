import React from 'react'
import Pokedeximage from '../Pokedeximage.png'
import { useState } from 'react'
import Search from './Search'

const Header = ({handleString,handleNumeric,setSearch}) => {
  const [sortByNumber, setSortByNumber] = useState(true)
  const handleChange = () => {
    if(sortByNumber) {
      handleNumeric()
    } else {
      handleString()
    }
    setSortByNumber(!sortByNumber)
  }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-row items-center'>
          <img
                className="w-[60%] mb-[30px]" 
                src={Pokedeximage}
            />
          <button
              className='w-[150px] h-[150px] ml-[150px]'
              onClick={() => handleChange()}
              >

                {sortByNumber ? <i className='fa-solid fa-arrow-down-a-z'></i> :  <i className='fa-solid fa-arrow-down-1-9'></i>}




            </button>
          </div>
        <div className='flex flex-col items-center justify-end'>
            
          <Search setSearch={setSearch}/>
        </div>   
    </div>
  )
}

export default Header