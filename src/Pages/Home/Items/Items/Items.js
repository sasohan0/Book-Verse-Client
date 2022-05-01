import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className=" d-flex justify-content-center mb-5 text-success">
        Demo Books
      </h1>
      <div className=" row g-5">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
