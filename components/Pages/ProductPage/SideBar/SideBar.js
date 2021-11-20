import React, { useState } from "react";
import classes from "./SideBar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const SideBar = (props) => {
  const [selected, setSelected] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const toggleAccordion = (index) => {
    if (selected === index) {
      setSelected(null);
    }
    if (selected !== index) {
      setSelected(index);
    }
    setSelectedSubCategory(null);
  };

  const chooseSubCategory = (index) => {
    if (selectedSubCategory === index) {
      setSelectedSubCategory(null);
    }
    if (selectedSubCategory !== index) {
      setSelectedSubCategory(index);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <h3>{props.gender}</h3>

        <div className={classes.accordion}>
          {props.sidebarCategories.map((category, index) => (
            <div className={classes.item}>
              <div
                className={
                  selected === index
                    ? `${classes.title} ${classes.selected}`
                    : classes.title
                }
                onClick={() => toggleAccordion(index)}
              >
                <h4>{category.key}</h4>
                <span>{selected === index ? <IoIosArrowDown /> : ""}</span>
              </div>
              <div
                className={
                  selected === index
                    ? `${classes.content} ${classes.show}`
                    : classes.content
                }
              >
                <ul className={classes.sub_category_list}>
                  {category.subCategories.map((sub, i) => (
                    <li
                      className={
                        selectedSubCategory === i
                          ? `${classes.link} ${classes.selected}`
                          : classes.link
                      }
                      onClick={() => chooseSubCategory(i)}
                    >
                      <p>
                        <Link
                          href={`${category.key
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^\w-]+/g, "")}/${sub.name
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^\w-]+/g, "")}`}
                        >
                          {sub.name}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2>Filter</h2>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
