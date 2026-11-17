import React, { useState } from "react";

const ProductOptions = ({ options = [], radius = "4px", shape = "square", type = "text" }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const isSquare = shape === "square";
  const isColor = type === "color";

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "15px 0" }}>
      {options.map((option, index) => {
        const isSelected = selectedOption === index;

        const baseStyle = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          border: isSelected ? "2px solid var(--primary, #C92071)" : "1px solid var(--light-gray-2, #CCCCCC)",
          backgroundColor: isColor ? option : (isSquare ? "#FFFFFF" : "#FFFFFF"),
        };

        const shapeStyle = isSquare
          ? {
              width: "46px",
              height: "46px",
              borderRadius: radius,
              fontSize: isColor ? "0px" : "24px",
              color: "var(--dark-gray-2, #474747)",
              fontWeight: "bold",
            }
          : {
              width: "31px",
              height: "31px",
              borderRadius: "50%",
              fontSize: isColor ? "0px" : "14px",
              color: "var(--dark-gray-2, #474747)",
              fontWeight: "bold",
            };

        return (
          <div
            key={index}
            onClick={() => setSelectedOption(index)}
            style={{ ...baseStyle, ...shapeStyle }}
          >
            {!isColor && option}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;