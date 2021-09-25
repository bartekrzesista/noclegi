import React, { useState, useContext, useEffect, useRef } from "react";
import ThemeContext from "../../../context/themeContext";
import { withRouter } from 'react-router';

function Searchbar(props) {
  const [term, setTerm] = useState("");
  const themeContext = useContext(ThemeContext);
  const inputRef = useRef();

  const search = () => {
    props.history.push(`/search/${term}`);
  };

  // const onKeyDownHandler = (e) => {
  //     if(e.key === 'Enter') {
  //         search();
  //     }
  // }

  const inputFocus = () => {
    inputRef.current.focus();
  }

  useEffect(inputFocus, []);

  return (
    <div className="d-flex">
      <input
        ref={inputRef}
        type="text"
        placeholder="Szukaj..."
        className="form-control"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && search();
        }}
      />
      <button className={`btn btn-${themeContext.theme} ms-1`} onClick={search}>
        Szukaj
      </button>
    </div>
  );
}

export default withRouter(Searchbar);
