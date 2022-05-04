import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  const path = window.location.pathname;
  console.log(path);
  useEffect(() => {
    fetch("https://fast-meadow-45185.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (path === "/" || "/home") {
    const homeItems = items.slice(0, 6);
    return (
      <div className="container mt-5">
        <h1 className=" d-flex justify-content-center mb-5 text-success">
          Demo Books
        </h1>
        <div className=" row g-5">
          {homeItems.map((item) => (
            <Item key={item._id} item={item} parent="home"></Item>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-5">
        <h1 className=" d-flex justify-content-center mb-5 text-success">
          Demo Books
        </h1>
        <div className=" row g-5">
          {items.map((item) => (
            <Item key={item._id} item={item} parent="home"></Item>
          ))}
        </div>
      </div>
    );
  }
};

export default Items;
