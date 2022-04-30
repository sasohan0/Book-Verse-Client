import React from "react";

const InventoryItem = ({ item }) => {
  const { _id, img, name, supplierName, price, quantity } = item;
  const handleDelete = () => {
    fetch(`http://localhost:5000/inventory/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <tr className="">
      <td></td>
      <td>
        <img style={{ width: "150px", height: "200px" }} src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{supplierName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-dark">
          <img
            style={{ width: "32px", height: "32px" }}
            src="delete.png"
            alt=""
          />
        </button>
      </td>
    </tr>
  );
};

export default InventoryItem;
