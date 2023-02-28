import React, {useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";
import { ProductDataContext } from "../App";

const Products = () => {
  const {productData} = useContext(ProductDataContext)

  return (
    <section className="grid grid-cols-2 gap-3">
      {productData.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </section>
  );
};

export default Products;
