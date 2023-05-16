import React, { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import NavBar from "./components/NavBar";
import StarterPokemons from "./components/StarterPokemons"
import ShowPokemon from "./components/ShowPokemon"

function App() {
  const [allThePokemons, setAllThePokemons] = useState(null);
  const [allTheLocations, setAllTheLocations] = useState(null);
  const [activeLink, setActiveLink] = useState("#home");
  const [selectedStarterPokemon , setSelectedStarterPokemon] = useState(false);
  const [ownedPokemons , setOwndedPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1281")
      .then((res) => res.json())
      .then((data) => {
        setAllThePokemons(data);
      });
    fetch("https://pokeapi.co/api/v2/location?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setAllTheLocations(data);
      });
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);

  };

  return (
    <div className="App">
      <NavBar activeLink={activeLink} onLinkClick={handleLinkClick} />
      {
        allTheLocations && allThePokemons && activeLink === "#location" ? (
          allTheLocations.results.map((location, index) => (
            <div key={index}>     
              <Location locationName={location.name} locationURL={location.url} />
            </div>
          ))
        ) : activeLink === "#pokemons" ? (
          <div>
            { 
              !selectedStarterPokemon ? (
              <StarterPokemons setStarter = {setSelectedStarterPokemon} pushStarterPokemon = {ownedPokemons}  />
              ) : (
                <>
                  {ownedPokemons.map((pokemon,index) => (
                    <ShowPokemon pokemon={pokemon}/>
                  ))}
                </>
              )
            }
          </div>
        ) : activeLink === "#pokedex" ? (
          <div>
            <h1>pokédex</h1>
          </div>
        ) : activeLink === "#home" ? (
          <div>
            <h1>home</h1>
          </div>
        ) : ("")
      }
    </div>
  );
}
    
export default App;