import { useEffect, useState } from "react"
import ShowPokemon from "./ShowPokemon"
import battleBG from "./pictures/battleBG.png"

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

    function getHP() {
        console.log(props.chosenPokemon)
        if (props.chosenPokemon) {
            setChosenPokemonHP(props.chosenPokemon.stats[0]["base_stat"])
        }
    
        if (props.enemyPokemon) {
            setEnemyPokemonHP(props.enemyPokemon.stats[0]["base_stat"])
        }   
    }


    useEffect(() => {
        getHP()
        console.log(chosenPokemonHP)
      }, []);

   
 return (
   !result ? (
        <div className="battle-container">
            <img src={battleBG} alt="Battle Background" className="battle-bg" />
            <div className="battle-enemy">
                <h1 className="enemyName">{props.enemyPokemon.name}</h1>
                <img className="enemyPic" src={props.enemyPokemon.sprites["front_default"]}></img>
                <h2 className="enemy-heart">{enemyPokemonHP}❤️</h2>
            </div>
            <div className="battle-player">
                <h1 className="playerName">{props.chosenPokemon.name}</h1>
                <img className="playerPic" src={props.chosenPokemon.sprites["back_default"]}></img>
                <h2 className="player-heart">{chosenPokemonHP}❤️</h2>
            </div>
            <button className="btnAttack" onClick={() => {battleMode()}}>Attack ⚔️</button>
        </div>
    ) : result === "win" ? (
        <div className="resultWin">
            <h1>Nice battle, You Won!</h1>
            <h2>Do you want to catch this Pokemon?</h2>
            <ShowPokemon pokemon={props.enemyPokemon}/>
            <button className="btnCatchPokemon" onClick={() => {props.setActiveLink("#locations"); props.ownedPokemons.push(props.enemyPokemon); setResult(null)}}>Absolutely!</button>
            <button className="btnReturn" onClick={() => {props.setActiveLink("#locations"); setResult(null)}}>Nope,Thanks!</button>
        </div>
    ) : result === "lose" ? (
        <div className="resultLose">
            <h1>Bummer! You lost!</h1>
            <button className="btnLose" onClick={() => {props.setActiveLink("#locations"); setResult(null)}}>Go Back!</button>
        </div>
    ) : ("")
 )
}

export default BattleScreen