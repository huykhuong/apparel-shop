import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Backdrop from "./Backdrop";
import styles from "./MobileSearchBar.module.css";

const MobileSearchBar = () => {
  const dispatch = useDispatch();
  const closeMobileSearchBar = () => {
    dispatch(uiActions.toggleOpenMobileSearchBar());
  };
  return (
    <React.Fragment>
      <div className={styles.overall_wrapper}>
        <Backdrop closeBackdrop={closeMobileSearchBar} />
        <div className={styles.search_wrapper}>
          <input placeholder="Search" className={styles.search_bar}></input>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileSearchBar;
