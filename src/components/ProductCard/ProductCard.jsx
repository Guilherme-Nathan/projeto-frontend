import React from "react";

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "292px", gap: "12px" }}>
      {/* Container da Imagem com as dimensões exigidas (292x321 pixels) */}
      <div 
        style={{ 
          width: "292px", 
          height: "321px", 
          backgroundColor: "#f5f5f5", // Cor de fundo caso a imagem demore a carregar
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "4px"
        }}
      >
        <img 
          src={image} 
          alt={name} 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </div>

      {/* Nome do Produto */}
      <h3 
        style={{ 
          fontSize: "16px", 
          color: "var(--dark-gray)", 
          margin: 0, 
          fontWeight: "normal" 
        }}
      >
        {name}
      </h3>

      {/* Preços */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {priceDiscount ? (
          <>
            {/* Preço original riscado e em cor light-gray */}
            <span 
              style={{ 
                fontSize: "24px", 
                color: "var(--light-gray)", 
                textDecoration: "line-through" 
              }}
            >
              R$ {price}
            </span>

            {/* Preço com desconto em dark-gray e 24px */}
            <span 
              style={{ 
                fontSize: "24px", 
                color: "var(--dark-gray)", 
                fontWeight: "bold" 
              }}
            >
              R$ {priceDiscount}
            </span>
          </>
        ) : (
          /* Preço normal quando não há desconto (cor dark-gray, 24px) */
          <span 
            style={{ 
              fontSize: "24px", 
              color: "var(--dark-gray)", 
              fontWeight: "bold" 
            }}
          >
            R$ {price}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;