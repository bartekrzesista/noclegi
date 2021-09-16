function LastHotel(props) {
    if(!props) return null;

    return (
        <div className="card bg-light mb-2">
            <div className="card-header">Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?</div>
            <div className="card-body d-flex justify-content-between">
                <h5 className="card-title m-0">{props.name}</h5>
                <span className="badge bg-light text-dark">{props.city}</span>
            </div>
            <div className="d-flex justify-content-end mb-2 me-2">
                <button type="button" className="btn btn-sm btn-dark px-3 mx-2">Tak</button>
                <button type="button" className="btn btn-sm btn-dark px-3" onClick={props.removeLastHotel}>Nie</button>
            </div>
        </div>
    );
}

export default LastHotel;