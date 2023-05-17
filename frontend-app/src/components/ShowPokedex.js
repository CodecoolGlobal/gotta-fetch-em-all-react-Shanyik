import { useEffect, useState } from "react"
import ShowPokemon from "./ShowPokemon";

function ShowPokedex (props) {    

    function showSelectedPokemon (pokemonURL) {
        fetch(pokemonURL)
          .then((res) => res.json())
          .then((data) => {
            setSelectedPokemon(data);
        });
      }
    
    const [allThePokemons, setAllThePokemons] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1281")
          .then((res) => res.json())
          .then((data) => {
            setAllThePokemons(data);
        });
      }, []);
    
    return (
      allThePokemons ? (
        <>
        <div className="pokedex">
          <div className="scrollDiv">
              {allThePokemons.results.map((pokemon,index) => (
                <div key={pokemon.name}>
                <label>{pokemon.name}</label>,
                <input type="radio" value={pokemon.name} name="selectPokemonRadioButton" onChange={() => showSelectedPokemon(pokemon.url)}/>
                </div>
              ))}
          </div>
            <div>
                {selectedPokemon ? (
                  <ShowPokemon pokemon={selectedPokemon} />
                ) :("")}
            </div>
        </div>
        </>
      ) : ("")
        
    )
} 

export default ShowPokedex