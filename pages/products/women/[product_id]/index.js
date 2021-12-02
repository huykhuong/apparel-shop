import React from "react";
import ProductImageArea from "../../../../components/Pages/ProductDetailPage/ProductImageArea";
import ProductDetailArea from "../../../../components/Pages/ProductDetailPage/ProductDetailArea";
import styles from "../../../../styles/ProductDetailPage.module.css";

const ProductDetail = (props) => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <ProductImageArea images={props.productDetail.images} />
        <ProductDetailArea
          category={props.productDetail.category}
          name={props.productDetail.name}
          price={props.productDetail.price}
          description={props.productDetail.description}
          sizes={props.productDetail.sizes}
        />
      </div>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/get_products");
  const data = await response.json();

  return {
    fallback: false,
    paths: data.map((product) => ({
      params: { product_id: product.id },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.product_id;

  const response = await fetch(
    "http://localhost:3000/api/get_product_details/" + productId
  );

  const data = await response.json();

  return {
    props: {
      productDetail: {
        id: data.id,
        images: data.images,
        name: data.name,
        description: data.description,
        price: data.price,
        sizes: data.sizes,
        category: data.category,
      },
    },
  };
}

export default ProductDetail;
