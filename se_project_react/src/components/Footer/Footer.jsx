import react from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear(); // automatically gets current year
  return (
    <footer className="footer">
      <span className="footer-left">Matt Geary</span>
      <span className="footer-right">&copy; {year}</span>
    </footer>
  );
};

export default Footer;
