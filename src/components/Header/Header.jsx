import React from 'react';
import Logo from '../Logo/Logo';
import SearchBox from '../SearchBox';
import AuthLinks from '../AuthLinks';
import CartIcon from '../CartIcon';
import NavLinks from '../NavLinks';

const Header = () => {
  return (
    <header style={{ width: '100%', backgroundColor: 'var(--white)', borderBottom: '1px solid var(--light-gray-2)', padding: '30px 100px' }}>
      {/* Primeira linha: Logo, Campo de Busca, Área de Redirecionamento e Carrinho */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
        <Logo />
        <SearchBox />
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <AuthLinks />
          <CartIcon />
        </div>
      </div>

      {/* Segunda linha: Navegação Principal */}
      <div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;