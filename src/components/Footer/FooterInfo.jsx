import React from "react";
import { Link } from "react-router-dom";

const FooterInfo = ({ title, informations }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "var(--white)", margin: 0 }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
        {informations.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.link} 
              style={{ color: "var(--white)", textDecoration: "none", fontSize: "14px", opacity: 0.85 }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;