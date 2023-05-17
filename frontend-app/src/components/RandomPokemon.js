import { useState } from "react";
import ShowPokemon from "./ShowPokemon";

function RandomPokemon (props) {

    function getRandomPokemon () {
        console.log(props)
        let randomNumber = Math.floor(Math.random() * (props.selectedArea["pokemon_encounters"].length - 1))
        fetch(props.selectedArea["pokemon_encounters"][randomNumber].pokemon.url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            props.setEnemyPokemon(data);
        });
    }

    function startBattleScreen () {
        props.setActiveLink("#startBattleScreen");
    }


    
    return (
        props.selectedArea ? (
            <>
                <button className="btnApproach" onClick={() => {getRandomPokemon()}}>Something approaches...</button>
                {props.enemyPokemon ? (
                    <div className="appearedPokemon">
                        <ShowPokemon pokemon={props.enemyPokemon} />
                        <button className="btnEncounter" onClick={() => startBattleScreen()} > <a href="#battleScreen">Encounter!</a></button>
                    </div>
                ) : ("")}           
            </>
            
        ) : ("")
    )
}

export default RandomPokemon;