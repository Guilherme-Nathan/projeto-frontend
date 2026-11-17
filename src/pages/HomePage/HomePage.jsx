import React from "react";
import Layout from "../Layout";
import Gallery from "../../components/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing"; 

const HomePage = () => {
  const homeImages = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
  ];

  const collections = [
    { src: "/collection-1.svg", alt: "Coleção 1" },
    { src: "/collection-2.svg", alt: "Coleção 2" },
    { src: "/collection-3.svg", alt: "Coleção 3" },
  ];

  // Array com os 8 produtos listados
  const productList = [
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-2.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-3.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-4.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-5.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-2.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-3.png", price: 200, priceDiscount: 100 },
  ];

  return (
    <Layout>
      <div>
        {/* 1. Banner Principal / Galeria */}
        <Gallery 
          width="1440"
          height="681"
          images={homeImages}
        />

        {/* 2. Seção 5.2 - Coleções em destaque */}
        <Section title="Coleções em destaque" titleAlign="left">
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              gap: "20px", 
              maxWidth: "1440px", 
              margin: "0 auto"
            }}
          >
            {collections.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  flex: "1", 
                  maxWidth: "405px", 
                  height: "265px", 
                  borderRadius: "4px", 
                  overflow: "hidden"
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    borderRadius: "4px",
                    display: "block"
                  }} 
                />
              </div>
            ))}
          </div>
        </Section>

        {/* 3. Seção 5.3 - Produtos em alta */}
        <Section 
          title="Produtos em alta" 
          titleAlign="left"
          link={{ text: "Ver todos →", href: "/products" }}
        >
          <ProductListing products={productList} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;