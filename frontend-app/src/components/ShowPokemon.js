function ShowPokemon (props) {     
    return (
        <>
        <div>
            {console.log(props.pokemon)}
            <img src={props.pokemon.sprites.front_default}></img>
            <h3>Name: {props.pokemon.name}</h3>
            {props.pokemon.stats.map((stat, index) => (
                <p>{stat.stat.name} : {stat.base_stat}</p>
            ))}
        </div>
        </>
    )
} 

export default ShowPokemon