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
        props.setActiveLink("#battleScreen");
    }


    
    return (
        props.selectedArea ? (
            <>
                <button onClick={() => {getRandomPokemon()}}>Something approaches...</button>
                {props.enemyPokemon ? (
                    <>
                        <ShowPokemon pokemon={props.enemyPokemon} />
                        <button className="btnLocation" onClick={() => startBattleScreen()} > <a href="#battleScreen">Encounter!</a></button>
                    </>
                ) : ("")}           
            </>
            
        ) : ("")
    )
}

export default RandomPokemon;