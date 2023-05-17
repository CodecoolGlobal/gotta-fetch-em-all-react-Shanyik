function ShowPokemon (props) { 

    return (
        <>
        <div className={props.mainDiv}>
            {console.log(props.pokemon)}
            <img className="pokePic" src={props.pokemon.sprites.front_default}></img>
            <div className="statsDiv">
            <h3 className="header3">Name: {props.pokemon.name}</h3>
            {props.pokemon.stats.map((stat, index) => (
                <p className="stats">{stat.stat.name} : {stat.base_stat}</p>
            ))}
            </div>
        </div>
        </>
    )
} 

export default ShowPokemon