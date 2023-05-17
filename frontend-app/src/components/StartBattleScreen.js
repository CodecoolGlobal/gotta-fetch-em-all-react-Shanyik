import ShowPokemon from "./ShowPokemon"

function StartBattleScreen (props) {

 return (
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
                    <button onClick={() => {props.setChosenPokemon(pokemon); props.setActiveLink("#battleScreen")}} >I choose you, {pokemon.name}</button>
                </>
            ))}
        </div>
    </>
 )
}

export default StartBattleScreen