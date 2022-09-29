import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

  const [type, setType] = useState("type") //tipo de pokemon
  const [tp, setTp] = useState("")  //para manejar el cambio de estado del tipo de pokemon
  const [active, setActive] = useState(false) //estado del menú

  //necesarios:
  const {register,
    handleSubmit, 
    formState: { errors },} = useForm();


    //manejamos el State del menú desplegable:
    const menuDesplegable = () =>{
      active ? setActive(false) : setActive(true)
    }

    //manejamos el type:
    const chooseType = (type) =>{
      setType(type);
      menuDesplegable();// una vez cambie el estado, se cierra
    }


    useEffect(() => {
    
      setTp(type)
    
    }, [type])
    

  return (
    <section>
      <h1>Create your own Pokemon!</h1>
      <form onSubmit={handleSubmit( data=>console.log(data))} className="form-createPk">
        <label htmlFor="ID"> ID:</label>
        <input {...register("id")} label="Id" type="number" name="id" required />

        <label htmlFor="name">Name:</label>
        <input {...register("name")} type="text" label="Name" name="name" required minlenght="3" />

        <label htmlFor="image">Image:</label>
        <input {...register("image")} label="image" type="text" name="sprite" required />

        <div class = "menu-desplegable">
          <label htmlFor="typeOne">Type One: </label>
          <button onClick={menuDesplegable} type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {type}
          </button>
        </div>
        {
          active
          ?<div role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div>
              <p onClick={()=>chooseType("dark")}>Dark</p>
              <p onClick={()=>chooseType("dragon")}>Dragon</p>
              <p onClick={()=>chooseType("electric")}>Electric</p>
              <p onClick={()=>chooseType("fairy")}>Fairy</p>
              <p onClick={()=>chooseType("fire")}>Fire</p>
              <p onClick={()=>chooseType("fighting")}>Fighting</p>
              <p onClick={()=>chooseType("flying")}>Flying</p>
              <p onClick={()=>chooseType("ghost")}>Ghost</p>
              <p onClick={()=>chooseType("grass")}>Grass</p>
              <p onClick={()=>chooseType("ground")}>Ground</p>
              <p onClick={()=>chooseType("ice")}>Ice</p>
              <p onClick={()=>chooseType("normal")}>Normal</p>
              <p onClick={()=>chooseType("poison")}>Poison</p>
              <p onClick={()=>chooseType("psychic")}>Psychic</p>
              <p onClick={()=>chooseType("rock")}>Rock</p>
              <p onClick={()=>chooseType("steel")}>Steel</p>
              <p onClick={()=>chooseType("water")}>Water</p>
              
            </div>
          </div>
          :""
        }

<div class = "menu-desplegable">
          <label htmlFor="typeOne">Type Two: </label>
          <button onClick={menuDesplegable} type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {type}
          </button>
        </div>
        {
          active
          ?<div role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div>
              <p onClick={()=>chooseType("dark")}>Dark</p>
              <p onClick={()=>chooseType("dragon")}>Dragon</p>
              <p onClick={()=>chooseType("electric")}>Electric</p>
              <p onClick={()=>chooseType("fairy")}>Fairy</p>
              <p onClick={()=>chooseType("fire")}>Fire</p>
              <p onClick={()=>chooseType("fighting")}>Fighting</p>
              <p onClick={()=>chooseType("flying")}>Flying</p>
              <p onClick={()=>chooseType("ghost")}>Ghost</p>
              <p onClick={()=>chooseType("grass")}>Grass</p>
              <p onClick={()=>chooseType("ground")}>Ground</p>
              <p onClick={()=>chooseType("ice")}>Ice</p>
              <p onClick={()=>chooseType("normal")}>Normal</p>
              <p onClick={()=>chooseType("poison")}>Poison</p>
              <p onClick={()=>chooseType("psychic")}>Psychic</p>
              <p onClick={()=>chooseType("rock")}>Rock</p>
              <p onClick={()=>chooseType("steel")}>Steel</p>
              <p onClick={()=>chooseType("water")}>Water</p>
              
            </div>
          </div>
          :""
        }

        <button type="submit">Create</button>
        <input {...register("type")} label="type" type="text" name="type" value={tp} className="hidden"/>

      </form>
    </section>
  )
}

export default Form