import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./Hotel.module.css";
import img from "../../../assets/images/hotel.jpg";
import ThemeContext from "../../../context/themeContext";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

function Hotel(props) {
  const [auth] = useAuth();
  const theme = useContext(ThemeContext);

  const clickHandler = (e) => {
    props.onOpen(props);
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
                <p className={styles.title}>{props.name}</p>
                <span className="badge bg-dark mb-3">{props.city}</span>
              </div>
              <div className="col text-right px-2">
                <h5>Ocena: {props.rating}</h5>
                <Link
                  to={`/hotels/${props.id}`}
                  className={`btn btn-${theme.theme} mt-2 px-4`}
                  onClick={clickHandler}
                >
                  Pokaż
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className={styles.description}>{props.description}</p>
        </div>
        {auth ? (
          <p className="mt-2">Dostępne pokoje: 4</p>
        ) : (
          <p className="mt-2">Dostępne pokoje: Zaloguj</p>
        )}
      </div>
    </div>
  );
}

export default Hotel;
