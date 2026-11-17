import React from "react";
import Layout from "../Layout";
import Gallery from "../../components/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";

const ProductViewPage = () => {
  // Imagens para a galeria do produto
  const productImages = [
    { src: "/product-thumb-1.png" },
    { src: "/product-thumb-2.png" },
    { src: "/product-thumb-3.png" },
    { src: "/product-thumb-4.png" },
    { src: "/product-thumb-5.png" },
  ];

  // Produtos recomendados 
  const recommendedProducts = [
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-2.png", price: 49.9 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-3.png", price: 200, priceDiscount: 120 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-4.png", price: 200, priceDiscount: 90 },
  ];

  return (
    <Layout>
      <div style={{ maxWidth: "1440px", margin: "40px auto", padding: "0 20px" }}>
        
        {/* Seção Superior: Galeria + BuyBox (Lado a lado) */}
        <div style={{ display: "flex", gap: "50px", alignItems: "flex-start", marginBottom: "80px" }}>
          
          {/* Galeria do Produto */}
          <Gallery 
            images={productImages} 
            showThumbs 
            width="700" 
            height="570" 
            radius="4px" 
          />

          {/* Buy Box e Variações  */}
          <BuyBox
            name="Tênis K-Swiss V8 - Masculino"
            reference="38416711"
            stars="4.7"
            rating="90"
            price={200}
            priceDiscount={100}
            description="Sapato casual com design moderno e confortável. Ideal para o dia a dia e momentos de lazer, oferecendo durabilidade e estilo."
          >
            {/* Variações de Tamanho */}
            <div style={{ marginBottom: "15px" }}>
              <span style={{ fontSize: "14px", color: "var(--light-gray, #8F8F8F)", fontWeight: "bold" }}>
                Tamanho
              </span>
              <ProductOptions options={["39", "40", "41", "42", "43"]} shape="square" radius="4px" type="text" />
            </div>

            {/* Variações de Cor */}
            <div>
              <span style={{ fontSize: "14px", color: "var(--light-gray, #8F8F8F)", fontWeight: "bold" }}>
                Cor
              </span>
              <ProductOptions options={["#6CB2EB", "#4A5568", "#ED8936", "#48BB78"]} shape="circle" type="color" />
            </div>
          </BuyBox>

        </div>

        {/* Seção Inferior: Produtos Recomendados */}
        <Section 
          title="Produtos recomendados" 
          titleAlign="left" 
          link={{ text: "Ver todos", href: "/produtos" }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>

      </div>
    </Layout>
  );
};

export default ProductViewPage;