import { useEffect, useState } from "react"
import ShowPokemon from "./ShowPokemon"

function StarterPokemons(props) {

  const [starterBulbasaur, setStarterBulbasaur] = useState(null)
  const [starterCharmander, setStarterCharmander] = useState(null)
  const [starterSquirtle, setStarterSquirtle] = useState(null)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        setStarterBulbasaur(data);
      });
    fetch("https://pokeapi.co/api/v2/pokemon/4/")
      .then((res) => res.json())
      .then((data) => {
        setStarterCharmander(data);
      });
    fetch("https://pokeapi.co/api/v2/pokemon/7/")
      .then((res) => res.json())
      .then((data) => {
        setStarterSquirtle(data);
      });

  }, []);

  return (
    <>
      <div>
        <h1>Select Starter Pokemon</h1>
        {starterBulbasaur && starterCharmander && starterSquirtle ? (
          <>
            <ShowPokemon pokemon={starterBulbasaur} />
            <button className="btnLocation" id="starterBulbasaur" onClick={() => { props.pushStarterPokemon.push(starterBulbasaur); props.setStarter(true) }}>Select this Pokémon</button>
            <ShowPokemon pokemon={starterCharmander} />
            <button className="btnLocation" id="starterCharmander" onClick={() => { props.pushStarterPokemon.push(starterCharmander); props.setStarter(true) }}>Select this Pokémon</button>
            <ShowPokemon pokemon={starterSquirtle} />
            <button className="btnLocation" id="starterSquirtle" onClick={() => { props.pushStarterPokemon.push(starterSquirtle); props.setStarter(true) }}>Select this Pokémon</button>
          </>
        ) : ("")}

      </div>
    </>
  )
}

export default StarterPokemons