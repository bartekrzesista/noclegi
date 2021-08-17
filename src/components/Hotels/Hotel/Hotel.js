import React from 'react';
import styles from './Hotel.module.css';
import img from '../../../assets/images/hotel.jpg';

function Hotel() {
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
                <p className={styles.title}>Pensjonat</p>
                <span className="badge bg-dark mb-3">Warszawa</span>
              </div>
              <div className="col text-right">
                <h5>Ocena: 8.3</h5>
                <button className="btn btn-primary mt-2 px-4">Pokaż</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            consequat id lorem vitae accumsan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
