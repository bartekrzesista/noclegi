import React from "react";
import PropTypes from "prop-types";
import styles from "./Hotel.module.css";
import img from "../../../assets/images/hotel.jpg";
import ThemeContext from "../../../context/themeContext";
import useAuth from "../../../hooks/useAuth";

Hotel.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

function Hotel(props) {
  const [auth] = useAuth();
  
  const clickHandler = (e) => {
    props.onOpen(props.hotel);
  };

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
                    <button type="button" className={`btn btn-${theme} mt-2 px-4`} onClick={clickHandler}>
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
        {auth
        ? <p className="mt-2">Dostępne pokoje: 4</p>
        : <p className="mt-2">Dostępne pokoje: Zaloguj</p>
      }
      </div>
    </div>
  );
}

export default Hotel;
