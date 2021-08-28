import React, {useMemo} from "react";
import PropTypes from "prop-types";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";

const slowFunction = (count) => {
  for (let i=0; i<1200000000; i++) {
  }
  return count;
};

function Hotels(props) {
  const count = useMemo(() => {
    return slowFunction(props.hotels.length);
  }, [props.hotels.length]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty ({count}):</h2>
      {props.hotels.map((e) => (
        <Hotel key={e.id} hotel={e} />
      ))}
    </div>
  );
}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired,
};

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.hotels === nextProps.hotels;
// };

export default Hotels;
// export default React.memo(Hotels, areEqual);
