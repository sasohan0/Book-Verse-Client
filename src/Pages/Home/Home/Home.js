import React from "react";
import ManageItemsLink from "../../Shared/ManageItemsLink/ManageItemsLink";
import Banner from "../Banner/Banner";
import Items from "../Items/Items/Items";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Items></Items>
        <ManageItemsLink></ManageItemsLink>
      </div>
    </div>
  );
};

export default Home;
