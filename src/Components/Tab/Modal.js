import React from "react";
import "./Modal.css";

export default function ModelWindow(props) {
  const { show, onHide, item } = props;

  return (
    <>
      {console.log(show)}
      <article className={`overlay ${show ? "show" : "hide"}`}></article>
      <article className={`modal effect`}>
        <article className="modal-header">
          <img
            src={require("../../Assets/" + item.image).default}
            alt="modalImage"
          />
          <div className="modal-header-text">
            <h2>{item.name}</h2>
            <span>{item.region}</span>
          </div>
        </article>
        <div className="modal-body">
          <h1>Pricing: </h1>
          <div className="modal-price">
            <span>1 Week - 1Month</span>
            <span className="bold">{`$ ${parseFloat(item.price).toFixed(2)}`}</span>
          </div>
          <div className="modal-price">
            <span>6 Months</span>
            <span className="bold">{`$ ${parseFloat(item.price * 5).toFixed(2)}`}</span>
          </div>
          <div className="modal-price">
            <span>1 Year</span>
            <span className="bold">{`$ ${parseFloat(item.price * 9).toFixed(2)}`}</span>
          </div>
        </div>
        <article className="modal-button">
          <button onClick={onHide}>Close</button>
        </article>
      </article>
    </>
  );
}
