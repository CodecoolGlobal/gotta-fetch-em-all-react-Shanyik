import { useEffect, useState } from "react"
import ShowPokemon from "./ShowPokemon"

function BattleScreen (props) {

    function battleMode () {
        
        setEnemyPokemonHP( (Math.floor(enemyPokemonHP -  ((((2/5+2)*props.enemyPokemon.stats[1]["base_stat"]*60/props.chosenPokemon.stats[2]["base_stat"])/50)+2)*Math.floor(Math.random() * (255 - 217 + 1) + 217)/255)) )
        if(enemyPokemonHP <= 0) {setResult("win")}
        setChosenPokemonHP( (Math.floor(chosenPokemonHP -  ((((2/5+2)*props.chosenPokemon.stats[1]["base_stat"]*60/props.enemyPokemon.stats[2]["base_stat"])/50)+2)*Math.floor(Math.random() * (255 - 217 + 1) + 217)/255)) )
        if(chosenPokemonHP <= 0) {setResult("lose")}
    }

    const [enemyPokemonHP, setEnemyPokemonHP] = useState(null)
    const [chosenPokemonHP, setChosenPokemonHP] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(()=>{
		if (props.chosenPokemon) {
            setChosenPokemonHP(props.chosenPokemon.stats[0]["base_stat"])
        }
    
        if (props.enemyPokemon) {
            setEnemyPokemonHP(props.enemyPokemon.stats[0]["base_stat"])
        }   
	}, [])

 return (
    !props.chosenPokemon ? (
    <>
        <div>
            <h1>Enemy Pokemon</h1>
            <ShowPokemon pokemon={props.enemyPokemon}/>
        </div>

        <div>
            <h1>Choose Your pokemon!</h1>
            {props.ownedPokemons.map((pokemon,index) => (
                <>
                    <ShowPokemon pokemon={pokemon}/>
                    <button onClick={() => props.setChosenPokemon(pokemon)} >I choose you, {pokemon.name}</button>
                </>
            ))}
        </div>
    </>
    ) : props.chosenPokemon && enemyPokemonHP && chosenPokemonHP && !result ? (
        <>
            <div>
                <h1>Enemy Pokemon</h1>
                <img src={props.enemyPokemon.sprites["front_default"]}></img>
                <h2>{props.enemyPokemon.name}</h2>
                <h2>{enemyPokemonHP}</h2>
            </div>
            <div>
                <h1>Your Pokemon</h1>
                <img src={props.chosenPokemon.sprites["back_default"]}></img>
                <h2>{props.chosenPokemon.name}</h2>
                <h2>{chosenPokemonHP}</h2>
                <button  onClick={() => {battleMode()}}>Attack</button>
            </div>
        </>
    ) : result === "win" ? (
        <>
            <h1>Nice battle, You Won!</h1>
            <h2>Do you want to catch this Pokemon?</h2>
            <ShowPokemon pokemon={props.enemyPokemon}/>
            <button onClick={() => {props.setActiveLink("#locations"); props.ownedPokemons.push(props.enemyPokemon); props.setChosenPokemon(null); setResult(null)}}>Absolutely!</button>
            <button onClick={() => {props.setActiveLink("#locations"); props.setChosenPokemon(null); setResult(null)}}>Nope,Thanks!</button>
        </>
    ) : result === "lose" ? (
        <>
            <h1>Bummer! You lost!</h1>
            <button onClick={() => {props.setActiveLink("#locations"); props.setChosenPokemon(null); setResult(null)}}>Go Back!</button>
        </>
    ) : ("")
 )
}

export default BattleScreen