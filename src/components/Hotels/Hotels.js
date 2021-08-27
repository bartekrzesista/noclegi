import React from "react";
import PropTypes from "prop-types";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";

function Hotels(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty:</h2>
      {props.hotels.map((e) => (
        <Hotel key={e.id} hotel={e} />
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
