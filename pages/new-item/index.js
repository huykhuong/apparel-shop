import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import classes from "../../styles/main.module.css";
import styles from "./index.module.css";
import { app } from "../../firebase";
import useInput from "../../hooks/use-input";

const NewItem = (props) => {
  const [sizes, setSizes] = useState([]);
  const { sendRequest } = useHttp();
  const [fileUrl, setFileUrl] = useState([]);
  // const [progress, setProgress] = useState(0);
  const [loadingState, setLoadingState] = useState({
    isDone: false,
    uploading: false,
  });
  const [categoryName, setCategory] = useState({
    categoryName: "",
    subCategoryName: "",
  });

  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    inputFieldInValid: nameInputFieldIsInvalid,
    inputBlur: nameInputBlur,
    resetField: resetName,
    getInputHandler: getName,
  } = useInput((value) => value !== "");

  const {
    value: descriptionValue,
    valueIsValid: descriptionIsValid,
    inputFieldInValid: descriptionInputFieldIsInvalid,
    inputBlur: descriptionInputBlur,
    resetField: resetDescription,
    getInputHandler: getDescription,
  } = useInput((value) => value !== "");

  const {
    value: priceValue,
    valueIsValid: priceIsValid,
    inputFieldInValid: priceInputFieldIsInvalid,
    inputBlur: priceInputBlur,
    resetField: resetPrice,
    getInputHandler: getPrice,
  } = useInput((value) => value);

  //Submit Image and Download Image Url
  const submitImage = async (e) => {
    e.preventDefault();
    const promises = [];
    let counter = 0;
    setLoadingState({ uploading: false, isDone: false });
    setFileUrl([]);
    setLoadingState((prevValue) => ({ ...prevValue, uploading: true }));
    //Converting FileList to an Array
    const imagesArray = Array.from(e.target.files);
    imagesArray.map((imageFile) => {
      const uploadTask = app
        .storage()
        .ref(`images/`)
        .child(imageFile.name)
        .put(imageFile);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          console.log(error);
        },
        async () => {
          console.log(imageFile.name);
          await app
            .storage()
            .ref(`images/`)
            .child(imageFile.name)
            .getDownloadURL()
            .then((imageUrl) => {
              setFileUrl((prevValue) => [...prevValue, imageUrl]);
              counter++;
              if (counter === e.target.files.length) {
                setLoadingState((prevValue) => ({
                  ...prevValue,
                  isDone: true,
                }));
              }
            });
        }
      );
    });
    Promise.all(promises)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  console.log(fileUrl.sort());

  //Add new product
  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: nameValue,
      description: descriptionValue,
      price: priceValue,
      category: categoryName.categoryName,
      sub_category: categoryName.subCategoryName,
      images: fileUrl,
      sizes: sizes,
    };
    sendRequest("/api/add_new_item", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    });
    setFileUrl([]);
    setSizes([]);
    resetName();
    resetPrice();
    resetDescription();
    setLoadingState({ uploading: false, isDone: false });
    document.getElementById("XS").checked = false;
    document.getElementById("S").checked = false;
    document.getElementById("M").checked = false;
    document.getElementById("L").checked = false;
    document.getElementById("images").value = "";
    document.getElementById("category").value = "";
    document.getElementById("sub_category").value = "";
  };

  //select size function
  const selectSize = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter((s) => s !== size));
      return;
    }
    setSizes((prevValue) => [...prevValue, size]);
  };

  //Overall form validation
  let formIsValid = false;
  if (
    nameIsValid &&
    priceIsValid &&
    descriptionIsValid &&
    sizes.length !== 0 &&
    loadingState.isDone
  ) {
    formIsValid = true;
  }

  //select category function
  const selectCategory = (value) => {
    setCategory((prevValue) => ({ ...prevValue, categoryName: value }));
  };

  //select sub_category function
  const selectSubCategory = (value) => {
    setCategory((prevValue) => ({ ...prevValue, subCategoryName: value }));
  };

  return (
    <div className={classes.container}>
      <form className={styles.add_new_item_form} onSubmit={addNewProduct}>
        <label for="name">Name</label>
        <input type="text" id="name" value={nameValue} onChange={getName} />
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          value={descriptionValue}
          onChange={getDescription}
        />
        <label for="price">Price</label>
        <input
          type="number"
          id="price"
          value={priceValue}
          onChange={getPrice}
        />
        <label for="category">Category</label>
        <select
          id="category"
          name="category"
          onChange={(e) => selectCategory(e.target.value)}
        >
          <option value="">--Select a Category--</option>
          {props.categories.map((category) => (
            <option value={category.name}>{category.name}</option>
          ))}
        </select>
        <label for="sub_cat">Sub Category</label>
        <select
          id="sub_category"
          name="sub_category"
          onChange={(e) => selectSubCategory(e.target.value)}
        >
          <option value="">--Select a Category--</option>
          {props.categories.map(
            (category) =>
              category.name === categoryName.categoryName &&
              category.sub_categories.map((value) => (
                <option value={value}>{value}</option>
              ))
          )}
        </select>
        <label for="images">Images</label>
        <input onChange={submitImage} type="file" id="images" multiple />
        {!loadingState.isDone && loadingState.uploading && (
          <div className={classes.loading_spinner}></div>
        )}
        <label for="sizes">Sizes:</label>
        <div className={styles.sizes}>
          <label for="XS">XS</label>
          <input onChange={() => selectSize("XS")} type="checkbox" id="XS" />
          <label for="S">S</label>
          <input onChange={() => selectSize("S")} type="checkbox" id="S" />
          <label for="M">M</label>
          <input onChange={() => selectSize("M")} type="checkbox" id="M" />
          <label for="L">L</label>
          <input onChange={() => selectSize("L")} type="checkbox" id="L" />
        </div>

        <button disabled={!formIsValid} type="submit" class="button">
          Add
        </button>
      </form>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/get_categories");
  const data = await response.json();

  return {
    props: {
      categories: data.map((i) => ({
        name: i.name,
        sub_categories: i.sub_categories,
      })),
    },
    revalidate: 1,
  };
}

export default NewItem;
