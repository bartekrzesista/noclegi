import React from "react";
import PropTypes from "prop-types";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";

function Hotels(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty ({props.hotels.length}):</h2>
      {props.hotels.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} onOpen={props.onOpen} />
      ))}
    </div>
  );
}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels;
};

export default React.memo(Hotels, areEqual);
