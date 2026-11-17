import React from "react";
import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";

const Logo = ({ isFooter }) => {
  return (
    <a href="/">
      <img 
        src={isFooter ? logoFooter : logoHeader} 
        alt="Digital Store Logo" 
      />
    </a>
  );
};

export default Logo;