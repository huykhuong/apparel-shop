import classes from "../styles/main.module.css";
import React from "react";
import NewCollection from "../components/Pages/HomePage/NewCollection/NewCollection";
import FeaturedSection from "../components/Pages/HomePage/FeaturedSection/FeaturedSection";
import WatchSection from "../components/Pages/HomePage/WatchSection/WatchSection";

export default function Home(props) {
  return (
    <React.Fragment>
      <NewCollection />
      <div className={classes.container}>
        <FeaturedSection items={props.items} />
        <WatchSection />
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/get_products");
  const data = await response.json();

  return {
    props: {
      items: data,
    },
    revalidate: 1,
  };
}
