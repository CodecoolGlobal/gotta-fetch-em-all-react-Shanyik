function Area (props) {
    console.log(props.selectedLocation)

    function setSelectedAreaFromLocation(area) {
        fetch(area.url)
          .then((res) => res.json())
          .then((data) => {
            props.setSelectedArea(data);
        })
          .then(() => {
            props.setActiveLink("#area")
          })
          props.setEnemyPokemon(null);
    }

    return (
        props.selectedLocation.areas.map((area,index) => (
            <>
                <div className="areaChoose">
                    <button className="btnArea" onClick={() => setSelectedAreaFromLocation(area)}><a href="#area">{area.name}</a></button>
                </div>
            </>
        ))
    )
}

export default Area