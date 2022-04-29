import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://blooming-wave-56097.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-5">Items</h1>
      <div className=" row g-5">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
