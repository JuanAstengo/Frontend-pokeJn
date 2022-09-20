import React from 'react'
import Type from './Type'

const TypeList = (props) => {
  return (
    <div className="flex">
        {props.selectedPokemon?.tipos?.map((types, key) => 
            <Type
                type={types}
                key={key}
            />
            )}

    </div>
  )
}

export default TypeList