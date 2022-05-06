import React from "react";
import ManageItemsLink from "../../Shared/ManageItemsLink/ManageItemsLink";
import Banner from "../Banner/Banner";
import Items from "../Items/Items/Items";
import Map from "../Map/Map";

const Home = (props) => {
  const parent = "home";
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Items>{parent} </Items>
        <ManageItemsLink></ManageItemsLink>
        <Map></Map>
      </div>
    </div>
  );
};

export default Home;
