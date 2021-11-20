import React from "react";
import classes from "./NewCollection.module.css";
import Link from "next/link";

const NewCollection = () => {
  return (
    <React.Fragment>
      <div className={classes.newCollection}>
        <h1 className={classes.title}>Winter Collection</h1>
        <div className={classes.anchor}>
          <Link href="/products/women/collection/winter-collection">
            Explore now
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewCollection;
