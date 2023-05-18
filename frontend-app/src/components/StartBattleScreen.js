import ShowPokemon from "./ShowPokemon"

function StartBattleScreen (props) {

 return (
    <>
        <div className="enemyPokemon">
            <h1 className="enemyTitle">Enemy Pokemon</h1>
            <ShowPokemon pokemon={props.enemyPokemon}/>
        </div>

        <div className="playerPokemon">
            <h1 className="playerTitle">Your chosen Pokemon</h1>
            {props.ownedPokemons.map((pokemon,index) => (
                <>
                    <ShowPokemon pokemon={pokemon}/>
                    <button className="btnStart" onClick={() => {props.setChosenPokemon(index); props.setActiveLink("#battleScreen")}} >Fight!</button>
                </>
            ))}
        </div>
    </>
 )
}

export default StartBattleScreen