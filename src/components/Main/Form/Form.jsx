import React from 'react'

const Form = () => {
  return (
    <section>
      <h1>Create your own Pokemon!</h1>
      <form className="form-createPk">
        <label htmlFor="ID"> ID:</label>
        <input type="number"/>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" placeholder="Charmander" ></input>
        <label htmlFor="image">Image:</label>
        <input type="url" id="image" placeholder="Charmander image" name="image"/>
        <label htmlFor="type-one" >Type One:</label>
        <select name="typeOne" id="typeOne"></select>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>

        <label htmlFor="type-two">Type Two:</label>
        <select name="typeTwo" id="typeTwo"></select>
          <option value="none">None</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>

        <button>Create my Pokemon</button>
      </form>
    </section>
  )
}

export default Form