import React, { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import NavBar from "./components/NavBar";
import StarterPokemons from "./components/StarterPokemons";
import ShowPokemon from "./components/ShowPokemon";
import ShowPokedex from "./components/ShowPokedex";
import Area from "./components/Area"
import RandomPokemon from "./components/RandomPokemon";

function App() {
  const [activeLink, setActiveLink] = useState("#home");
  const [selectedStarterPokemon , setSelectedStarterPokemon] = useState(false);
  const [ownedPokemons , setOwnedPokemons] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="App">
      <NavBar activeLink={activeLink} onLinkClick={handleLinkClick} />
      {
        activeLink === "#locations" ? (
          <Location setSelectedLocation = {setSelectedLocation} setActiveLink = {setActiveLink}/>
        ) : activeLink === "#location"  && selectedLocation ? (
          <Area selectedLocation = {selectedLocation} setSelectedArea = {setSelectedArea} setActiveLink = {setActiveLink}/>
        ) : activeLink === "#area"  && selectedArea && !enemyPokemon ?  (
          <RandomPokemon selectedArea = {selectedArea} setActiveLink = {setActiveLink} setEnemyPokemon = {setEnemyPokemon} enemyPokemon = {enemyPokemon}/>
        ) : enemyPokemon ? (
          <RandomPokemon selectedArea = {selectedArea} setActiveLink = {setActiveLink} setEnemyPokemon = {setEnemyPokemon} enemyPokemon = {enemyPokemon}/>
        ) :  activeLink === "#pokemons" ? (
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
            <ShowPokedex/>
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
