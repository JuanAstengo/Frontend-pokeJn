function Search({setSearch}){



    return (
      <div className='flex justify-center w-full'>
          <div className='flex items-center justify-center mt-[30px] hover:border-gray-400 border-2 border-[#E0E0E0] rounded-full w-full'>
            <i class="fa-solid fa-magnifying-glass mr-[10px] text-gray-400"></i>
            <input type='text'  placeholder='Buscar'  className='h-[35px] bg-[#f7f7f7]' onChange={(event => {setSearch(event.target.value)})}/>
          </div>
      </div>
    )
  
  }
  
  export default Search