import "bootstrap/dist/css/bootstrap.css"

const Personajes = (props) => {
    return (<div>
        <div className="text-end mt-2">
            <button className="btn btn-primary" onClick={() => { props.levantarPersonajes() }}>Levantar Personajes</button>
        </div>
        <h3 className="display-3">Lista de Personajes</h3>
        <div className="row">
            {
                props.personajes.map((personaje, index) => (
                    <div key={index} className="col-sm-2 mb-3 shadow">
                        <div className="card w-100 h-100">
                            <img className="card-img-top" src={personaje.image} alt={personaje.character} style={{maxHeight: "45em"}}/>
                            <div className="card-body">
                                <h6 className="card-title">{personaje.character}</h6>
                                <p className="card-text">
                                    {personaje.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>);
}

export default Personajes;