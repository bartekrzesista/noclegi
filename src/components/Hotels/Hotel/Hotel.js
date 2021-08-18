import React from 'react';
import styles from './Hotel.module.css';
import img from '../../../assets/images/hotel.jpg';

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
              <div className="col">
                <p className={styles.title}>{props.hotel.name}</p>
                <span className="badge bg-dark mb-3">{props.hotel.city}</span>
              </div>
              <div className="col text-right">
                <h5>Ocena: {props.hotel.rating}</h5>
                <button className="btn btn-primary mt-2 px-4">Pokaż</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className={styles.description}>
            {props.hotel.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
