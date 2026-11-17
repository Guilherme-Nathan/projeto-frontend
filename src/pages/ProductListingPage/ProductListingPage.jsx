import React, { useState } from "react";
import Layout from "../Layout";
import ProductListing from "../../components/ProductListing/ProductListing";
import FilterGroup from "../../components/FilterGroup/FilterGroup";

const ProductListingPage = () => {
  // Lista de produtos inicial
  const allProducts = [
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-2.png", price: 200, priceDiscount: 150 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-3.png", price: 200, priceDiscount: 120 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-4.png", price: 200, priceDiscount: 90 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-5.png", price: 200, priceDiscount: 180 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 110 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-2.png", price: 200, priceDiscount: 130 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-3.png", price: 200, priceDiscount: 95 },
  ];

  // Estado para ordenação
  const [sortOrder, setSortOrder] = useState("");

  // Lógica de ordenação
  const sortedProducts = [...allProducts].sort((a, b) => {
    const priceA = a.priceDiscount || a.price;
    const priceB = b.priceDiscount || b.price;
    if (sortOrder === "lowest") return priceA - priceB;
    if (sortOrder === "highest") return priceB - priceA;
    return 0;
  });

  // Dados de exemplo para os grupos de filtro 
  const brandOptions = [
    { text: "Adidas", value: "adidas" },
    { text: "Balenciaga", value: "balenciaga" },
    { text: "K-Swiss", value: "k-swiss" },
    { text: "Nike", value: "nike" },
    { text: "Puma", value: "puma" },
  ];

  const categoryOptions = [
    { text: "Esporte e lazer", value: "esporte" },
    { text: "Casual", value: "casual" },
    { text: "Utilitário", value: "utilitario" },
    { text: "Corrida", value: "corrida" },
  ];

  const genderOptions = [
    { text: "Masculino", value: "masculino" },
    { text: "Feminino", value: "feminino" },
    { text: "Unisex", value: "unisex" },
  ];

  const stateOptions = [
    { text: "Novo", value: "novo" },
    { text: "Usado", value: "usado" },
  ];

  return (
    <Layout>
      <div style={{ maxWidth: "1440px", margin: "40px auto", padding: "0 20px" }}>
        
        {/* Cabeçalho superior da listagem + Ordenação */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "24px", color: "var(--dark-gray-2, #474747)", margin: 0 }}>
            Resultados para "Tênis" - <b>{allProducts.length} produtos</b>
          </h1>

          {/* Campo de Ordenação */}
          <div 
            style={{ 
              width: "308px", 
              height: "60px", 
              border: "1px solid #474747", 
              borderRadius: "4px", 
              display: "flex", 
              alignItems: "center", 
              padding: "0 16px",
              backgroundColor: "#FFFFFF",
              justifyContent: "space-between"
            }}
          >
            <span style={{ fontSize: "16px", color: "var(--dark-gray-2, #474747)" }}>
              <b>Ordenar por</b>
            </span>
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ 
                border: "none", 
                outline: "none", 
                fontSize: "14px", 
                color: "var(--dark-gray-2, #474747)", 
                backgroundColor: "transparent", 
                cursor: "pointer" 
              }}
            >
              <option value="">Selecione</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Layout principal: Lateral de Filtros + Grade de Produtos */}
        <div style={{ display: "flex", gap: "30px" }}>
          
          {/* Coluna da Esquerda: Filtros  */}
          <div 
            style={{ 
              width: "308px", 
              backgroundColor: "#FFFFFF", 
              padding: "30px", 
              borderRadius: "4px",
              height: "fit-content",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)"
            }}
          >
            <h3 style={{ fontSize: "16px", color: "var(--dark-gray-2, #474747)", margin: "0 0 20px 0" }}>
              Filtrar por
            </h3>
            
            {/* Linha horizontal de 1px na cor light-gray-2 */}
            <hr style={{ border: "none", borderTop: "1px solid #CCCCCC", marginBottom: "25px" }} />

            {/* Grupos de Filtros */}
            <FilterGroup title="Marka" inputType="checkbox" options={brandOptions} />
            <FilterGroup title="Categoria" inputType="checkbox" options={categoryOptions} />
            <FilterGroup title="Gênero" inputType="checkbox" options={genderOptions} />
            <FilterGroup title="Estado" inputType="radio" options={stateOptions} />
          </div>

          {/* Coluna da Direita: Listagem de Produtos */}
          <div style={{ flex: 1 }}>
            <ProductListing products={sortedProducts} />
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default ProductListingPage;