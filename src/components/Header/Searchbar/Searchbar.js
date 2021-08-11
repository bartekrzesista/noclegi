import React from 'react';

function Searchbar() {
    return (
        <div>
            <input 
                type="text"
                placeholder="Szukaj..."
                style={{
                    width: 'calc(100% - 20px)'
                }}
                className="input-text"
            />
            <button>Szukaj</button>
        </div>
    )
}

export default Searchbar;