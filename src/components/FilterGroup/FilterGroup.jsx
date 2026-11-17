import React from "react";

const FilterGroup = ({ title, inputType = "checkbox", options = [], name }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
      {/* Título do Grupo de Filtros (14px, dark-gray-2) */}
      {title && (
        <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--dark-gray-2, #474747)", margin: 0 }}>
          {title}
        </h4>
      )}

      {/* Opções de Filtro */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {options.map((option, index) => (
          <label 
            key={index} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "12px", 
              fontSize: "14px", 
              color: "var(--dark-gray-2, #474747)", 
              cursor: "pointer" 
            }}
          >
            <input 
              type={inputType} 
              name={name || title} 
              value={option.value || option.text}
              style={{ 
                width: "22px", 
                height: "22px", 
                accentColor: "var(--primary)", 
                cursor: "pointer" 
              }} 
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;