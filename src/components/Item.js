import React from "react";
import { useState } from "react";


function Item({ name, category }) {
  const [ cart, setCart ] = useState(false);
  const isCart = (cart === true) ? "in-cart" : "";
  function changeCart() {setCart(!cart)};
  const buttonText = (cart === true) ? "Add to Cart" : "Remove from Cart";
  
  return (
    <li className={isCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCart}>{buttonText}</button>
    </li>
  );
};

export default Item;
