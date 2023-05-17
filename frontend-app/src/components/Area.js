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
        
    }

    return (
        props.selectedLocation.areas.map((area,index) => (
            <>
                <div>
                    <button className="btnLocation" onClick={() => setSelectedAreaFromLocation(area)}><a href="#area">{area.name}</a></button>
                </div>
            </>
        ))
    )
}

export default Area