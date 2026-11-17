import React from "react";

const Section = ({ title, titleAlign = "left", link, children }) => {
  if (!title && !link) {
    return <section style={{ width: "100%", margin: "40px 0" }}>{children}</section>;
  }

  return (
    <section style={{ width: "100%", margin: "40px 0" }}>
      <div 
        style={{
          display: "flex",
          justifyContent: titleAlign === "center" ? "space-between" : "space-between",
          alignItems: "center",
          marginBottom: "25px",
          position: "relative",
        }}
      >
    
        {titleAlign === "center" && link ? <div style={{ width: "80px" }} /> : null}

        {title && (
          <h2 
            style={{
              color: "var(--dark-gray-2)",
              fontSize: "24px",
              fontWeight: "700",
              textAlign: titleAlign,
              margin: 0,
              flex: titleAlign === "center" ? "1" : "unset",
            }}
          >
            {title}
          </h2>
        )}

        {link && (
          <a 
            href={link.href} 
            style={{
              color: "var(--primary)",
              fontSize: "18px",
              textDecoration: "none",
              fontWeight: "500",
              marginLeft: titleAlign === "center" ? "auto" : "0",
            }}
          >
            {link.text}
          </a>
        )}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;