import React, { useState } from "react";
import ModelWindow from "./Modal";
import "./price.css";

function Price(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <article className="price">
      <img src={require("../../Assets/Price.png").default} alt="price" />
      <button onClick={() => setModalShow(true)}>
        {props.toggleValue ? "View Pricing" : "Ver precios"}
      </button>
      <ModelWindow
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={props.item}
      />
    </article>
  );
}

export default Price;
