import React from 'react';
import cartIcon from '../assets/mini-cart.svg';

const CartIcon = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'default' }}>
      <img src={cartIcon} alt="Carrinho de compras" style={{ width: '24px', height: '24px' }} />
    </div>
  );
};

export default CartIcon;