import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export default function MainNavigation(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [navBar, setNavBar] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  const toggleOpenCart = () => {
    dispatch(uiActions.toggleOpenCart());
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [router.pathname]);

  const changeNavBarAppearance = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBarAppearance);
  }

  return (
    <React.Fragment>
      <header
        className={
          navBar
            ? `${classes.header} ${classes.navbar_header}`
            : `${classes.header}`
        }
      >
        <div
          className={
            isHomePage || navBar
              ? `${classes.brand}`
              : `${classes.brand} ${classes.black_color_text}`
          }
        >
          <Link href="/">Ecovani</Link>
        </div>

        <nav
          className={
            isHomePage || navBar
              ? `${classes.nav}`
              : `${classes.nav} ${classes.black_color_text}`
          }
        >
          <ul className={classes.icons_list}>
            <li className={classes.search_wrapper}>
              <div className={classes.search}>
                <input
                  type="text"
                  className={classes.search_input}
                  aria-label="search"
                  placeholder="Search"
                />
                <div className={classes.search_submit}>
                  <AiOutlineSearch fontSize="1.5em" />
                </div>
              </div>
            </li>
            <li onClick={toggleOpenCart}>
              <BsCart fontSize="1.5em" />
            </li>
            <li>
              <BiUser fontSize="1.5em" />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
