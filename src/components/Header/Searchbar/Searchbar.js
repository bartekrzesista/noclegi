import React from 'react';

function Searchbar() {
    return (
        <div className="d-flex">
            <input 
                type="text"
                placeholder="Szukaj..."
                style={{
                    width: 'calc(100% - 20px)'
                }}
                className="form-control"
            />
            <button className="btn btn-secondary ms-1">Szukaj</button>
        </div>
    )
}

export default Searchbar;