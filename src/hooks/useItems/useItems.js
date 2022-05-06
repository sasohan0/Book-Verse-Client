import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fast-meadow-45185.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  return [items, setItems];
};

export default useItems;
