import React, { useState } from "react";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

const Gallery = ({ className, width, height, radius, showThumbs, images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div 
      className={className} 
      style={{ display: "flex", flexDirection: "column", gap: "20px", width: width ? `${width}px` : "100%" }}
    >
      {/* Container Principal do Slide */}
      <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          height: height ? `${height}px` : "500px", 
          borderRadius: radius || "0px", 
          overflow: "hidden",
          backgroundColor: "#f0f2f5"
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
              pointerEvents: index === currentIndex ? "auto" : "none"
            }}
          >
            <img 
              src={img.src} 
              alt={`Slide ${index + 1}`} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        ))}

        {/* Botão Seta Esquerda */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            opacity: currentIndex === 0 ? 0.4 : 1,
            zIndex: 10
          }}
        >
          <img src={arrowLeftIcon} alt="Anterior" style={{ width: "20px", height: "20px" }} />
        </button>

        {/* Botão Seta Direita */}
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: currentIndex === images.length - 1 ? "not-allowed" : "pointer",
            opacity: currentIndex === images.length - 1 ? 0.4 : 1,
            zIndex: 10
          }}
        >
          <img src={arrowRightIcon} alt="Próxima" style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      {/* Renderização condicional das Miniaturas (Thumbnails) */}
      {showThumbs !== undefined && (
        <div style={{ display: "flex", gap: "15px", overflowX: "auto" }}>
          {images.map((img, index) => {
            const isSelected = index === currentIndex;
            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: "117px",
                  height: "95px",
                  borderRadius: radius || "0px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isSelected ? "2px solid var(--primary)" : "2px solid transparent",
                  transition: "border 0.2s ease",
                  flexShrink: 0
                }}
              >
                <img 
                  src={img.src} 
                  alt={`Thumbnail ${index + 1}`} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;