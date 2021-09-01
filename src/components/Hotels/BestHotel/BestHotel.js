function BestHotel(props) {
    const best = props.getBestHotel();

    if(!best) return null;

    return (
        <div className="card bg-success text-white">
            <div className="card-header">Najlepsza oferta!</div>
            <div className="card-body d-flex justify-content-between">
                <h5>{best.name}</h5>
                <div>Ocena: {best.rating}</div>
                <button type="button" className="btn btn-sm btn-light">Pokaż</button>
            </div>
        </div>
    );
}

export default BestHotel;