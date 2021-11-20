import React from "react";
import { useSelector } from "react-redux";
import CartModal from "../Cart/CartModal";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  const cartModal = useSelector((state) => state.uiReducer.toggleOpenCart);

  return (
    <React.Fragment>
      {cartModal && <CartModal />}
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
