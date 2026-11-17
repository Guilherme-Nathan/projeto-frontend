import React from 'react';

const AuthLinks = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      {/* Link Cadastre-se (sem redirecionamento) */}
      <a 
        href="#s" 
        onClick={(e) => e.preventDefault()}
        style={{ 
          fontSize: '16px', 
          color: 'var(--dark-gray-2)', 
          textDecoration: 'underline',
          textDecorationColor: 'var(--dark-gray-2)',
          cursor: 'pointer'
        }}
      >
        Cadastre-se
      </a>

      {/* Botão Entrar (sem redirecionamento) */}
      <a 
        href="#" 
        onClick={(e) => e.preventDefault()}
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '114px',
          height: '40px',
          backgroundColor: 'var(--primary)',
          color: 'var(--white)',
          fontSize: '14px',
          fontWeight: 'bold',
          borderRadius: '4px',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        Entrar
      </a>
    </div>
  );
};

export default AuthLinks;