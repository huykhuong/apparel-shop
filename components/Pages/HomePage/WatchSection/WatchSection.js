import React from "react";
import classes from "./WatchSection.module.css";

const WatchSection = () => {
  return (
    <React.Fragment>
      <h3 className={classes.header}>Something To Go With Your Wrist</h3>
      <div className={classes.container}>
        <div className={classes.banner1}>
          <img src="https://media.istockphoto.com/photos/close-up-young-fashion-blogger-wearing-a-floral-jacker-and-a-white-picture-id972187570?k=20&m=972187570&s=612x612&w=0&h=L9Xs0aTvO23MW_6SIHzB1L5umIAsG2UxmVvX2B20CzU=" />
          <p>Ladies</p>
        </div>
        <div className={classes.banner2}>
          <img src="https://media.istockphoto.com/photos/young-man-checking-time-on-his-elegant-wristwatch-picture-id1135934992?k=20&m=1135934992&s=612x612&w=0&h=P-WrmfsorZiXfh4-rZuRv6kTFOJJVjrka-4L23HWwZE=" />
          <p>Gentlemen</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WatchSection;
