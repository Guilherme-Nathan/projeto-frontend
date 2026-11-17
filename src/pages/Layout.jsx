import React from 'react';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Cabeçalho fixo no topo */}
      <Header />

      {/* Conteúdo das páginas */}
      <main>
        {children}
      </main>
      {/* Rodapé da página */}
      <Footer />
    </div>
  );
};

export default Layout;