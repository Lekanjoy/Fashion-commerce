import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";
import { ProductDataContext } from "../App";

const Products = () => {
  const { productData, loading } = useContext(ProductDataContext);

  return (
    <section className="grid grid-cols-2 gap-3 overflow-hidden">
      {loading ? (
        <h1 className="font-bold grid place-items-center h-[20vh]  animate-ping">
          LOADING
        </h1>
      ) : (
        productData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      )}
    </section>
  );
};

export default Products;
