import React from "react";

import ItemDetail from "../component/ItemDetail/ItemDetail";
import ItemDescription from "../component/ItemDescription/ItemDescription";
import Recommend from "../component/Recommnend/Recommend";
import Policy from "../component/Policy/Policy";
import Modal from "../component/Modal/Modal";

const ItemDetailPage = () => {
  return (
    <React.Fragment>
      <ItemDetail />
      <ItemDescription />
      <Recommend title="You may also like" />
      <h1 style={{ fontSize: "40px", textAlign: "center", marginTop: "10rem" }}>
        Why Choose Us
      </h1>
      <Policy />
    </React.Fragment>
  );
};

export default ItemDetailPage;
