import React from 'react';
import Logo from '../Logo/Logo';
import facebookLogo from '../../assets/facebook.svg';
import instagramLogo from '../../assets/instagram.svg';
import twitterLogo from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#222222", color: "#ffffff", padding: "60px 100px 30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "40px", marginBottom: "40px" }}>
        
        {/* Coluna da Marca e Redes Sociais */}
        <div style={{ maxWidth: "300px", display: "flex", flexDirection: "column", gap: "25px" }}>
          <Logo isFooter={true} />
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterLogo} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Coluna de Links 1 */}
        <div>
          <h4 style={{ marginBottom: "20px" }}>Informação</h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Sobre a Drip Store</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Segurança</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Wishlist</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Blog</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Trabalhe conosco</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Meus Pedidos</a></li>
          </ul>
        </div>

        {/* Coluna de Links 2 */}
        <div>
          <h4 style={{ marginBottom: "20px" }}>Categorias</h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Camisetas</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Calças</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Bonés</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Headphones</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Tênis</a></li>
          </ul>
        </div>

        {/* Coluna de Contato */}
        <div>
          <h4 style={{ marginBottom: "20px" }}>Contato</h4>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161</li>
            <li>(85) 3051-3411</li>
          </ul>
        </div>
      </div>

      {/* Linha Divisória e Copyright */}
      <hr style={{ border: "none", borderTop: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "20px" }} />
      <div style={{ textAlign: "center", fontSize: "14px" }}>
        © 2026 Digital Store
      </div>
    </footer>
  );
};

export default Footer;