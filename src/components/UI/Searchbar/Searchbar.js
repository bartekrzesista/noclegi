import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../../context/themeContext";

const propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

function Searchbar(props) {
  const [term, setTerm] = useState("");
  const themeContext = useContext(ThemeContext);

  const search = () => {
    props.searchHandler(term);
  };

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

Searchbar.propTypes = propTypes;

export default Searchbar;
