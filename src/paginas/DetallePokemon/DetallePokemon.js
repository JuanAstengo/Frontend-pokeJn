import React from 'react'
import { Link , useParams} from 'react-router-dom'
import Arrow from "../../imagenes/arrow.png"
import { useEffect, useState } from 'react'
import TypeList from '../../componentes/TypeList'
import Pokeball from "../../imagenes/Pokeball.png"
import Weight from "../../imagenes/Weight.svg"
import Height from "../../imagenes/Height.svg"


const DetallePokemon = (props) => {
    const {id}=useParams()
    const [detalles, setDetalles] = useState()
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({})
    const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
    const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
    const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
    const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
    const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
    const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
    const [pokemonTypes, setPokemonTypes] = useState ("")
    const [pokemonType, setPokemonType] = useState('')
    const [pokemonText, setPokemonText] = useState("")
    const [selectedPokemon, setSelectedPokemon]= useState({})
    
    const getPokemonDetails = async () => {
        const result = await fetch(`http://localhost:4000/pokemon/${id}`)
        const fetchedPokemon = await result.json();
            setSelectedPokemonDetails(fetchedPokemon);
            setSelectedPokemon(fetchedPokemon)
            setSelectedPokemonHP(fetchedPokemon.stats[0].base_stat)
            setSelectedPokemonATK(fetchedPokemon.stats[1].base_stat)
            setSelectedPokemonDEF(fetchedPokemon.stats[2].base_stat)
            setSelectedPokemonSATK(fetchedPokemon.stats[3].base_stat)
            setSelectedPokemonSDEF(fetchedPokemon.stats[4].base_stat)
            setSelectedPokemonSPD(fetchedPokemon.stats[5].base_stat)
            console.log(pokemonType)
    }

    const getPokemonText = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => res.json())
        .then((fetchedPokemon) => {
            setPokemonText(fetchedPokemon.flavor_text_entries[5].flavor_text)
        })
        .catch ((error) => {
            console.log(error)
        })
    }

    console.log(props)
    useEffect(() => {
        fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
          .then((response) => response.json())
          .then((resultado) => {
            console.log('resultado:', resultado)
            setDetalles(resultado)
          })
          getPokemonDetails();
          getPokemonText();
    
      }, [id]);
      console.log(detalles)
  const siguientePokemon = parseInt(id)+1;
  const anteriorPokemon = parseInt(id)-1;
  
  return detalles?.types && (
    <div className={`bg-gray-300 flex justify-center w-full h-full border-[3px] border${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""}`}>
        <div className='w-2/4 h-full'>
            <img className="absolute top-[10%] m-auto left-0 right-0 w-[250px] h-[250px]" src={selectedPokemon?.datos_pokemon?.img}/>
            <img src={Pokeball} className="z-10 absolute mr-14 top-10 left-[700px] opacity-5"/>
            <div className={`background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-full h-[33%] p-[20px] flex flex-col justify-between`}>
                <div className=" flex justify-between">
                    <div className=" flex items-center">
                        <Link to='/'>
                            <img src={Arrow} className="w-[40px] h-[40px] mr-[20px]"alt="Go back"/>
                        </Link>

                    
                        <p className="text-white font-bold text-[25px] capitalize">{selectedPokemon?.datos_pokemon?.nombre}</p>
                    </div>

                    <div className="flex items-center">
                    <p className="text-[25px] font-semibold text-white">#{String(selectedPokemon?.datos_pokemon?.id).padStart(3,'0')}</p>
                    </div>
            </div>
                
            <div className="flex flex-col items-end">
                    
    
                    {
                        (id < 2) ? 
    
                        <Link to={`/pokemon/${siguientePokemon}`} replace>
                            <i className="mt-[150px] fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right "></i>
                        </Link> : 
    
                        <div className="flex justify-between w-full items-end">
    
                            <Link to={`/pokemon/${anteriorPokemon}`} replace>
                                <i className="mt-[150px] fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-left"></i>
                            </Link> 
    
                            <Link to={`/pokemon/${siguientePokemon}`} replace> 
                                <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right"></i>
                            </Link> 
    
                        </div>
                    }
    
            </div>

        </div>

        <div className="w-full h-[67%]">
            <div className="bg-white w-full h-full rounded-[5px] flex flex-col">
                <div className="mt-[40px] flex w-full justify-center rounded-[10px] text-white capitalize">
                        <TypeList
                            selectedPokemon={selectedPokemon}
                        />
                </div>

                <div>
                    <div className="flex justify-center mt-[20px]">
                        <h3>About</h3>
                    </div>

                    <div className="flex flex-row justify-around mt-[25px]">
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <img className="mr-2" src={Weight}/>
                                <p>{(selectedPokemon?.datos_pokemon.peso/10)} kg</p>
                            </div>
                            
                            <p>Weight</p>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <img className="mr-2" src={Height}/>
                                <p>{(selectedPokemon?.datos_pokemon.altura/10)} m</p>
                            </div>
                            
                            <p>Height</p>
                        </div>

                        <div className='capitalize'>
                            <p>{selectedPokemon?.movimientos[0]?.nombre}</p>
                            <p>{selectedPokemon?.movimientos[1]?.nombre}</p>
                            <p>Moves</p>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <p className="text-center">{selectedPokemon?.datos_pokemon.descripcion}</p>
                    </div>
 
                    <div className="flex flex-col mt-[20px]">
                            <p className={`id${pokemonType} text-center font-bold`}>Base Stats</p>
    
                            <div className="uppercase px-[40px] w-full mt-[25px]">
                                <div className='w-full'>
                                    <div className="flex items-center w-full justify-between">
                                        <div className="w-[20%] flex justify-between">
                                            <p>HP</p>
                                            <p>{selectedPokemon?.datos_pokemon.hp}</p>
                                        </div>
                                        <div className={`w-[70%] bg-slate-300 rounded-[10px]`}>
                                            <div className={`h-[0.8rem] background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-[${selectedPokemon?.datos_pokemon.hp / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                        </div>
                                    </div>
    
                                    <div className="flex items-center w-full justify-between">
                                        <div className="w-[20%] flex justify-between">
                                            <p>ATK</p>
                                            <p>{selectedPokemon?.datos_pokemon.atk}</p>
                                        </div>
                                        <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                            <div className={`h-[0.8rem]  background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-[${selectedPokemon?.datos_pokemon.atk / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                        </div>
                                    </div>
    
                                    <div className="flex items-center w-full justify-between">
                                        <div className="w-[20%] flex justify-between">
                                            <p>DEF</p>
                                            <p>{selectedPokemon?.datos_pokemon.def}</p>
                                        </div>
                                        <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                            <div className={`h-[0.8rem]  background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-[${selectedPokemon?.datos_pokemon.def / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                        </div>
                                    </div>
    
                                    <div className="flex items-center w-full justify-between">
                                        <div className="w-[20%] flex justify-between">
                                            <p>SATK</p>
                                            <p>{selectedPokemon?.datos_pokemon.satk}</p>
                                        </div>
                                        <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                            <div className={`h-[0.8rem]  background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-[${selectedPokemon?.datos_pokemon.satk / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                        </div>
                                    </div>
    
                                    <div className="flex items-center w-full justify-between">
                                        <div className="w-[20%] flex justify-between">
                                            <p>SDEF</p>
                                            <p>{selectedPokemon?.datos_pokemon.sdef}</p>
                                        </div>
                                        <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                            <div className={`h-[0.8rem]  background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-[${selectedPokemon?.datos_pokemon.sdef / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center w-full justify-between">
                                        <div className="w-[20%] flex justify-between">
                                            <p>SPD</p>
                                            <p>{selectedPokemon?.datos_pokemon.spd}</p>
                                        </div>
                                        <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                            <div className={`h-[0.8rem]  background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : ""} w-[${selectedPokemon?.datos_pokemon.spd / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      )
    }
    
export default DetallePokemon