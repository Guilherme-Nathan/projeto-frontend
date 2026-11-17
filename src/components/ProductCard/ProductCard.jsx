import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id = 1, image, name, price, priceDiscount, category }) => {
  const navigate = useNavigate();
  const hasDiscount = priceDiscount && priceDiscount < price;

  const handleClick = () => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0); 
  };

  return (
    <div 
      onClick={handleClick}
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        width: "292px", 
        gap: "10px", 
        position: "relative",
        cursor: "pointer" 
      }}
    >
      {/* Container da Imagem */}
      <div 
        style={{ 
          width: "292px", 
          height: "321px", 
          backgroundColor: "#f5f5f5", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "4px",
          position: "relative"
        }}
      >
        {hasDiscount && (
          <span 
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              backgroundColor: "#E7FF86",
              color: "#474747",
              fontSize: "12px",
              fontWeight: "bold",
              padding: "6px 14px",
              borderRadius: "20px",
              zIndex: 2
            }}
          >
            30% OFF
          </span>
        )}

        <img 
          src={image} 
          alt={name || "Produto"} 
          style={{ 
            width: "80%", 
            height: "80%", 
            objectFit: "contain" 
          }} 
        />
      </div>

      {/* Categoria do Produto */}
      <span style={{ fontSize: "12px", color: "#8F8F8F", fontWeight: "700", textTransform: "uppercase" }}>
        {category || "Tênis"}
      </span>

      {/* Nome do Produto */}
      <h3 
        style={{ 
          fontSize: "24px", 
          color: "#474747", 
          margin: 0, 
          fontWeight: "normal",
          lineHeight: "38px"
        }}
      >
        {name}
      </h3>

      {/* Preços */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {hasDiscount ? (
          <>
            <span style={{ fontSize: "24px", color: "#8F8F8F", textDecoration: "line-through" }}>
              ${price}
            </span>
            <span style={{ fontSize: "24px", color: "#1F1F1F", fontWeight: "bold" }}>
              ${priceDiscount}
            </span>
          </>
        ) : (
          <span style={{ fontSize: "24px", color: "#1F1F1F", fontWeight: "bold" }}>
            ${price}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;