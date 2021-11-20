import React from "react";
import Product from "./Product";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const items = [
    {
      id: "1",
      title: "Contrast Color 3/4 Sleeve V-neck Maxi Dress For Women",
      price: "100,99$",
      img: "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
    },
    {
      id: "2",
      title: "PRINTED SHIRT DRESS",
      price: "10",
      img: "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/C1/73/e55d3278-6d46-454f-b733-e2a233a44ac1.jpg?s=702x936",
    },
    {
      id: "3",
      title: "PRINTED SHIRT DRESS",
      price: "10",
      img: "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/F6/C1/bd08f7fc-22e4-4a84-aa6c-c679cfde114d.jpg?s=702x936",
    },
    {
      id: "4",
      title: "PRINTED SHIRT DRESS",
      price: "10",
      img: "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
    },
    {
      id: "5",
      title: "PRINTED SHIRT DRESS",
      price: "10",
      img: "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/5D/70/16a15c7f-a104-4b4c-9718-38debc0de29d.jpg?s=702x936",
    },
    {
      id: "6",
      title: "PRINTED SHIRT DRESS",
      price: "10",
      img: "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/42/BB/cb4a45d8-237c-44b2-b9c6-f0b8d4f8b5ae.jpg?s=702x936",
    },
  ];

  return (
    <React.Fragment>
      <div className={classes.container}>
        {items.map((item) => (
          <Product img={item.img} price={item.price} title={item.title} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
