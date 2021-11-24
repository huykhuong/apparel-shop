import React from "react";
import Backdrop from "../../../GeneralLayout/Backdrop";
import ProductList from "../../../Product/ProductList";
import classes from "./MainSection.module.css";

const MainSection = (props) => {
  const items = [
    {
      id: 1,
      product_name: "Contrast Color 3/4 Sleeve V-neck Maxi Dress For Women",
      product_gender: "man",
      product_description: "In sagittis dui vel nisl.",
      product_price: 13,
      product_size: "L",
      product_info: {
        material: "Vinyl",
        pattern: "Aureobasidium pullulans",
        season: "Beverley",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 2,
      product_name: "elit proin",
      product_gender: "woman",
      product_description: "Maecenas rhoncus aliquam lacus.",
      product_price: 20,
      product_size: "XL",
      product_info: {
        material: "Plexiglass",
        pattern: "Miracle Foot Repair Cream",
        season: "Adrienne",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 3,
      product_name: "etiam justo etiam pretium",
      product_gender: "woman",
      product_description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      product_price: 58,
      product_size: "M",
      product_info: {
        material: "Steel",
        pattern: "Letrozole",
        season: "Katlin",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 4,
      product_name: "rutrum",
      product_gender: "woman",
      product_description:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      product_price: 42,
      product_size: "M",
      product_info: {
        material: "Aluminum",
        pattern: "DiabetiDerm Antifungal",
        season: "Kaia",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 5,
      product_name: "quam a odio",
      product_gender: "woman",
      product_description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      product_price: 60,
      product_size: "XL",
      product_info: {
        material: "Plexiglass",
        pattern: "Muscle - Tendon",
        season: "Tobye",
        collection: null,
        product_category: "Polo Shirts",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 6,
      product_name: "convallis duis consequat dui nec",
      product_gender: "woman",
      product_description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      product_price: 14,
      product_size: "2XL",
      product_info: {
        material: "Steel",
        pattern: "Peter Island Continous sunscreen",
        season: "Arch",
        collection: null,
        product_category: "Polo Shirts",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 7,
      product_name: "sapien a libero",
      product_gender: "woman",
      product_description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      product_price: 60,
      product_size: "S",
      product_info: {
        material: "Plexiglass",
        pattern: "MINERALIZE",
        season: "Briano",
        collection: null,
        product_category: "Polo Shirts",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 8,
      product_name: "nisi at nibh",
      product_gender: "woman",
      product_description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
      product_price: 72,
      product_size: "L",
      product_info: {
        material: "Wood",
        pattern: "H-Balm",
        season: "Jule",
        collection: null,
        product_category: "Polo Shirts",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 9,
      product_name: "vestibulum ac est lacinia nisi",
      product_gender: "woman",
      product_description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      product_price: 16,
      product_size: "M",
      product_info: {
        material: "Wood",
        pattern: "kiwi crate Liquid Hand",
        season: "Brynna",
        collection: null,
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 10,
      product_name: "sed lacus morbi sem",
      product_gender: "woman",
      product_description:
        "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      product_price: 96,
      product_size: "3XL",
      product_info: {
        material: "Stone",
        pattern: "benzonatate",
        season: "Ewan",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 11,
      product_name: "tincidunt eu",
      product_gender: "woman",
      product_description:
        "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      product_price: 36,
      product_size: "M",
      product_info: {
        material: "Plexiglass",
        pattern: "Vancomycin Hydrochloride",
        season: "Marley",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 12,
      product_name: "convallis eget",
      product_gender: "woman",
      product_description:
        "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      product_price: 45,
      product_size: "S",
      product_info: {
        material: "Vinyl",
        pattern: "ALOE UP PRO 15",
        season: "Malia",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 13,
      product_name: "dolor sit amet",
      product_gender: "woman",
      product_description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      product_price: 20,
      product_size: "XL",
      product_info: {
        material: "Stone",
        pattern: "Good Neighbor Pharmacy Acid Reducer",
        season: "Filmore",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 14,
      product_name: "vel",
      product_gender: "woman",
      product_description:
        "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      product_price: 23,
      product_size: "2XL",
      product_info: {
        material: "Steel",
        pattern: "preferred plus arthritis pain",
        season: "Sybyl",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
    {
      id: 15,
      product_name: "condimentum id",
      product_gender: "woman",
      product_description:
        "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
      product_price: 14,
      product_size: "L",
      product_info: {
        material: "Vinyl",
        pattern: "Bactroban",
        season: "Angelico",
        collection: "Winter Collection",
        product_category: "Dresses",
      },
      product_image:
        "https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/17/21/efe4f12a-6807-4525-92f5-80e594303831.jpg?s=702x936",
      product_sub_images: [
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
        "https://imgaz1.chiccdn.com/thumb/wap/oaupload/newchic/images/E3/DA/08b77b1a-3968-4bda-bbb5-962b82ea049f.jpg?s=240x320",
      ],
    },
  ];
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <h1 className={classes.category_name}>{props.category}</h1>
        <ProductList items={items} />
      </div>
    </React.Fragment>
  );
};

export default MainSection;
