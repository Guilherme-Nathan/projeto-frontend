import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lupaIcon from '../assets/lupa.svg';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/products?filter=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div 
      className="search-box" 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        background: 'var(--light-gray-3)', 
        borderRadius: '8px', 
        padding: '0 16px', 
        width: '100%', 
        maxWidth: '559px', 
        height: '60px' 
      }}
    >
      <input 
        type="text" 
        placeholder="Pesquisar produto..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ 
          border: 'none', 
          background: 'transparent', 
          outline: 'none', 
          width: '100%', 
          fontSize: '16px', 
          color: 'var(--dark-gray)' 
        }}
      />
      <button 
        type="button"
        onClick={handleSearch}
        style={{ 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src={lupaIcon} 
          alt="Pesquisar" 
          style={{ width: '24px', height: '24px' }} 
        />
      </button>
    </div>
  );
};

export default SearchBox;