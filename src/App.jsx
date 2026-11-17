import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Página Home</h1>} />
          <Route path="/products" element={<h1>Página Produtos</h1>} />
          <Route path="/categories" element={<h1>Página Categorias</h1>} />
          <Route path="/orders" element={<h1>Meus Pedidos</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;