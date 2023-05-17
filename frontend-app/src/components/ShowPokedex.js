import { useEffect, useState } from "react"
import ShowPokemon from "./ShowPokemon";
import PokePic from "./pictures/pokedex.jpg"
import PokeBG from "./pictures/pokeBG.jpg"

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
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1281")
          .then((res) => res.json())
          .then((data) => {
            setAllThePokemons(data);
        });
      }, []);

      const handleSearch = (e) => {
        const query = e.target.value.toLowerCase().trim();
        setSearchQuery(query);
      };

      const filteredPokemons = allThePokemons
      ? allThePokemons.results.filter((pokemon) => 
      pokemon.name.toLowerCase().includes(searchQuery)
      )
      : [];
    
      return (
        allThePokemons ? (
          <>
            <div className="pokedex">
              <div className="searchBox">
                <input
                  id="pokemonName"
                  type="text"
                  placeholder="Search for a Pokemon"
                  onChange={handleSearch}
                />
                <button id="search">🔍</button>
              </div>
              <img className="pokePhone" src={PokePic} alt="PokePhone" />
              <div className="scrollDiv">
                {filteredPokemons.map((pokemon, index) => (
                  <div key={pokemon.name} className="radioContainer">
                    <input
                      type="radio"
                      id={`pokemon-${index}`}
                      value={pokemon.name}
                      name="selectPokemonRadioButton"
                      onChange={() => showSelectedPokemon(pokemon.url)}
                    />
                    <label htmlFor={`pokemon-${index}`}>{pokemon.name}</label>
                  </div>
                ))}
              </div>
              <div>
                {selectedPokemon ? (
                  <ShowPokemon pokemon={selectedPokemon} mainDiv="pokeDiv" />
                ) : (
                  ""
                )}
                <img
                  className="pokebackground"
                  src={PokeBG}
                  alt="PokePhone"
                ></img>
              </div>
            </div>
          </>
        ) : (
          ""
        )
      );
    }
    
    export default ShowPokedex;