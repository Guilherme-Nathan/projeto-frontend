import React from "react";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "580px" }}>
      {/* Nome do Produto */}
      <h1 style={{ fontSize: "32px", color: "var(--dark-gray, #1F1F1F)", margin: 0, fontWeight: "bold" }}>
        {name}
      </h1>

      {/* Código de Referência */}
      <span style={{ fontSize: "12px", color: "var(--dark-gray-3, #666666)" }}>
        Casual | Ref: {reference}
      </span>

      {/* Avaliações e Estrelas */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {stars && (
          <div
            style={{
              backgroundColor: "var(--warning, #F6AA1C)",
              color: "#FFFFFF",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontWeight: "bold",
            }}
          >
            {stars} ★
          </div>
        )}
        {rating && (
          <span style={{ fontSize: "14px", color: "var(--light-gray, #8F8F8F)" }}>
            ({rating} avaliações)
          </span>
        )}
      </div>

      {/* Preços */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "15px" }}>
        {priceDiscount ? (
          <>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "var(--dark-gray-2, #474747)",
              }}
            >
              R$ {priceDiscount}
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "var(--light-gray-2, #CCCCCC)",
                textDecoration: "line-through",
              }}
            >
              R$ {price}
            </span>
          </>
        ) : (
          <span
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "var(--dark-gray-2, #474747)",
            }}
          >
            R$ {price}
          </span>
        )}
      </div>

      {/* Descrição */}
      <div>
        <h4 style={{ fontSize: "14px", color: "var(--light-gray, #8F8F8F)", margin: "0 0 8px 0" }}>
          Descrição
        </h4>
        <p style={{ fontSize: "14px", color: "var(--dark-gray-2, #474747)", lineHeight: "22px", margin: 0 }}>
          {description}
        </p>
      </div>

      {/* Elementos Filhos (Opções de Tamanho/Cor) */}
      <div>{children}</div>

      {/* Botão Comprar (Call to action) */}
      <button
        style={{
          backgroundColor: "var(--warning, #F6AA1C)",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "16px 32px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "220px",
          textTransform: "uppercase",
          transition: "opacity 0.2s",
        }}
        onClick={() => alert("Produto adicionado ao carrinho!")}
      >
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;