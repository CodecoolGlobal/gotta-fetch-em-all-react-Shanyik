import { useEffect, useState } from "react";

function Location (props) {   
    function setSelectedLocationFromButton(location) {
        fetch(location.url)
          .then((res) => res.json())
          .then((data) => {
            props.setSelectedLocation(data);
          })
          .then(() => {
            props.setActiveLink("#location")
          })
          console.log("click")
        
    }

    const [allTheLocations, setAllTheLocations] = useState(null);
   
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/location?limit=20")
          .then((res) => res.json())
          .then((data) => {
            setAllTheLocations(data);
          });
      }, []);
    
    return (
        <>
        {allTheLocations ? (
            allTheLocations.results.map((location, index) => (
                <>
                    <div>
                        <button className="btnLocation" onClick={() => setSelectedLocationFromButton(location)}><a href="#location">{location.name}</a></button>
                    </div>
                </>
            ))
        ) : ("")
        }
        </>
    )
} 
export default Location