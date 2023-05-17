import React, { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import NavBar from "./components/NavBar";
import StarterPokemons from "./components/StarterPokemons";
import ShowPokemon from "./components/ShowPokemon";
import ShowPokedex from "./components/ShowPokedex";
import Area from "./components/Area"
import RandomPokemon from "./components/RandomPokemon";
import BattleScreen from "./components/BattleScreen";
import StartBattleScreen from "./components/StartBattleScreen";

function App() {
  const [activeLink, setActiveLink] = useState("#home");
  const [selectedStarterPokemon, setSelectedStarterPokemon] = useState(false);
  const [ownedPokemons, setOwnedPokemons] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState(null)
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
          <Area selectedLocation = {selectedLocation} setSelectedArea = {setSelectedArea} setActiveLink = {setActiveLink} setEnemyPokemon = {setEnemyPokemon}/>
        ) : activeLink === "#area"  && selectedArea && !enemyPokemon ?  (
          <RandomPokemon selectedArea = {selectedArea} setActiveLink = {setActiveLink} setEnemyPokemon = {setEnemyPokemon} enemyPokemon = {enemyPokemon}/>
        ) : enemyPokemon && activeLink === "#area" ? (
          <RandomPokemon selectedArea = {selectedArea} setActiveLink = {setActiveLink} setEnemyPokemon = {setEnemyPokemon} enemyPokemon = {enemyPokemon}/>
        ) : activeLink === "#startBattleScreen" ? (
          <StartBattleScreen enemyPokemon = {enemyPokemon} ownedPokemons = {ownedPokemons} setActiveLink = {setActiveLink} setChosenPokemon = {setChosenPokemon}/>
        ) : activeLink === "#battleScreen" ? (
          <BattleScreen enemyPokemon = {enemyPokemon} ownedPokemons = {ownedPokemons} chosenPokemon = {chosenPokemon} setActiveLink = {setActiveLink}/>
        ) : activeLink === "#pokemons" ? (
          <div className="chosenPokemons">
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
            <h1>Home</h1>
          </div>
        ) : ("")
      }
    </div>
  );
}
    
export default App;