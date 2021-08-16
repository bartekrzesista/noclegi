import React, {useState} from 'react';

function Searchbar() {
    const [term, setTerm] = useState('');

    const search = () => {
        console.log(term);
    }

    return (
        <div className="d-flex">
            <input 
                type="text"
                placeholder="Szukaj..."
                value={term}
                onChange={e => {setTerm(e.target.value)}}
                className="form-control"
            />
            <button 
                className="btn btn-secondary ms-1"
                onClick={search}
            >Szukaj</button>
        </div>
    )
}

export default Searchbar;