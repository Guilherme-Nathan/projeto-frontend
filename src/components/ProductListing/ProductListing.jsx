import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductListing = ({ products }) => {
  return (
    <div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", // Cria 4 colunas como no modelo
        gap: "24px", 
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;