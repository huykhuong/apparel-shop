import React from "react";
import { useSelector } from "react-redux";
import CartModal from "../Cart/CartModal";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import MobileSearchBar from "./MobileSearchBar";

const Layout = (props) => {
  const cartModal = useSelector((state) => state.uiReducer.toggleOpenCart);
  const mobileSearchBar = useSelector(
    (state) => state.uiReducer.toggleOpenMobileSearchBar
  );

  return (
    <React.Fragment>
      {cartModal && <CartModal />}
      {mobileSearchBar && <MobileSearchBar />}
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
