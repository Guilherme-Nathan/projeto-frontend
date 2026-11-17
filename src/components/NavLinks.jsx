import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const getLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    fontSize: '16px',
    color: isActive ? 'var(--primary)' : 'var(--dark-gray-2)',
    fontWeight: isActive ? 'bold' : 'normal',
    paddingBottom: '4px',
    borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
    transition: 'all 0.2s ease-in-out'
  });

  return (
    <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <NavLink to="/" style={getLinkStyle}>
        Home
      </NavLink>
      
      <NavLink to="/products" style={getLinkStyle}>
        Produtos
      </NavLink>
      
      <NavLink to="/categories" style={getLinkStyle}>
        Categorias
      </NavLink>
      
      <NavLink to="/orders" style={getLinkStyle}>
        Meus Pedidos
      </NavLink>
    </nav>
  );
};

export default NavLinks;