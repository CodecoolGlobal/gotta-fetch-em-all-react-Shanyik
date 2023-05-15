import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import NavBar from "./components/NavBar";

function App() {
  const [allThePokemons, setAllThePokemons] = useState(null);
  const [allTheLocations, setAllTheLocations] = useState(null);
  const [activeLink, setActiveLink] = useState("#home");
  const [encounteredPokemon, setEncounteredPokemon] = useState(null);
  const [showEncounter, setShowEncounter] = useState(false);

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
    setEncounteredPokemon(null);
    setShowEncounter(false);
  };

  const handleLocationClick = (locationURL) => {
    fetch(locationURL)
      .then((res) => res.json())
      .then((data) => {
        const encounterCount = data.pokemon_encounters.length;
        if (encounterCount > 0) {
          const randomIndex = Math.floor(Math.random() * encounterCount);
          const randomPokemon = data.pokemon_encounters[randomIndex].pokemon;
          setEncounteredPokemon(randomPokemon);
        } else {
          setEncounteredPokemon(null);
        }
        setShowEncounter(true);
      });
  };

  const handleReturnToLocations = () => {
    setShowEncounter(false);
  };

  return (
    <div className="App">
      <NavBar activeLink={activeLink} onLinkClick={handleLinkClick} />
      <Header />
      {showEncounter ? (
        <div>
          {encounteredPokemon ? (
            <>
              <h2>Encountered Pokémon:</h2>
              <img src={encounteredPokemon.sprites.front_default} alt={encounteredPokemon.name} />
              <p>Name: {encounteredPokemon.name}</p>
            </>
          ) : (
            <>
              <p>This location doesn't seem to have any Pokémon.</p>
              <button onClick={handleReturnToLocations}>Return to Locations</button>
            </>
          )}
        </div>
      ) : (
        allTheLocations &&
        allThePokemons &&
            allTheLocations.results.map((location, index) => (
              <div key={index}>
                {activeLink === "#location" && (
                  <Location
                    locationName={location.name}
                    locationURL={location.url}
                    onLocationClick={handleLocationClick}
                  />
                )}
              </div>
            ))
          )}
        </div>
      );
    }
    
    export default App;