import classes from "../styles/main.module.css";
import React from "react";
import NewCollection from "../components/Pages/HomePage/NewCollection/NewCollection";
import FeaturedSection from "../components/Pages/HomePage/FeaturedSection/FeaturedSection";
import WatchSection from "../components/Pages/HomePage/WatchSection/WatchSection";

export default function Home() {
  return (
    <React.Fragment>
      <NewCollection />
      <div className={classes.container}>
        <FeaturedSection />
        <WatchSection />
      </div>
    </React.Fragment>
  );
}
