import React, {useState} from 'react';

function Searchbar(props) {
    const [term, setTerm] = useState('');

    const search = () => {
        props.searchHandler(term);
    }

    // const onKeyDownHandler = (e) => {
    //     if(e.key === 'Enter') {
    //         search();
    //     }
    // }

    return (
        <div className="d-flex">
            <input 
                type="text"
                placeholder="Szukaj..."
                className="form-control"
                value={term}
                onChange={e => setTerm(e.target.value)}
                onKeyDown={e => {e.key === 'Enter' && search()}}
            />
            <button 
                className="btn btn-secondary ms-1"
                onClick={search}
            >Szukaj</button>
        </div>
    )
}

export default Searchbar;