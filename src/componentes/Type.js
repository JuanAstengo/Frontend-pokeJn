import React from 'react'

const Type = ({type, index}) => {

  return (
    <div className="flex flex-row">
      <p className={`mr-[15px] h-[35px] w-[70px] background${type.nombre} rounded-full border-[1px] border-black
      text-center flex items-center justify-center m-[10px]`}>{type.nombre}</p>
    </div>
  )
}

export default Type;