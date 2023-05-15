import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Location from "./components/Location";

function App() {


  const [allThePokemons, setAllThePokemons] = useState(null);
  const [allTheLocations, setAllTheLocations] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1281')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAllThePokemons(data)
      })
    fetch('https://pokeapi.co/api/v2/location?limit=20')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAllTheLocations(data)
      })
  }, [])


  return (
    <div className="App">

      <Header className="Poké-shiet" />
      {allTheLocations && allThePokemons ? (
        allTheLocations.results.map((location, index) => (
          <div>
            {console.log(location.name)}
          <Location locationName={location.name} locationURL={location.url}/>
          </div>
        ))
      ) : ("")}
    </div>
  );
}

export default App;
