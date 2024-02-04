import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedVariable, setSelectedVariable ] = useState("All");
  const addSelect = (event) => {
    setSelectedVariable(event.target.value)
  };

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={addSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          (selectedVariable === "All" || selectedVariable === item.category) ? <Item key={item.id} name={item.name} category={item.category} /> : ""
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
