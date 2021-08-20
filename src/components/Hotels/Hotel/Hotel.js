import React from "react";
import PropTypes from "prop-types";
import styles from "./Hotel.module.css";
import img from "../../../assets/images/hotel.jpg";
import ThemeContext from "../../../context/themeContext";

Hotel.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

function Hotel(props) {
  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img src={img} alt="hotel 1" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col px-2">
                <p className={styles.title}>{props.hotel.name}</p>
                <span className="badge bg-dark mb-3">{props.hotel.city}</span>
              </div>
              <div className="col text-right px-2">
                <h5>Ocena: {props.hotel.rating}</h5>
                <ThemeContext.Consumer>
                  {({theme}) => (
                    <button className={`btn btn-${theme} mt-2 px-4`}>
                      Pokaż
                    </button>
                  )}
                </ThemeContext.Consumer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className={styles.description}>{props.hotel.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
