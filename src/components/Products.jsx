import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductDataContext } from "../App";

const Products = ({notify}) => {
  const productsData = useContext(ProductDataContext);

  return (
    <section className="grid grid-cols-2 gap-3">
      {productsData.map((product) => {
        return <ProductCard key={product.id} product={product} notify={notify}/>
      })};
    </section>
  );
};

export default Products;
