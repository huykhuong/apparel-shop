import React from "react";
import classes from "../../../../../styles/main.module.css";
import styles from "../../../../../styles/ProductPage.module.css";
import SideBar from "../../../../../components/Pages/ProductPage/SideBar/SideBar";
import MainSection from "../../../../../components/Pages/ProductPage/MainSection/MainSection";

const ProductPage = (props) => {
  const transformedString = props.collection.section.replace("-", " ");

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={styles.wrapper}>
          <div className={styles.sideBar}>
            <SideBar
              gender="Women"
              sidebarCategories={props.collection.sidebarCategories}
            />
          </div>
          <div className={styles.product_page_container}>
            <MainSection category={transformedString} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  const section = context.params.collection;
  let sidebarCategories = [];

  const response = await fetch(
    "https://apparel-shop-29c5b-default-rtdb.firebaseio.com/women-category.json"
  );

  if (!response.ok) {
    console.log("error");
  }

  const data = await response.json();

  for (const key in data) {
    let subCategories = [];

    for (let i = 0; i < data[key].length; i++) {
      subCategories.push(data[key][i]);
    }

    sidebarCategories.push({ key: key, subCategories: subCategories });
  }
  return {
    props: {
      collection: {
        section: section,
        sidebarCategories: sidebarCategories,
      },
    },
  };
}

export default ProductPage;
