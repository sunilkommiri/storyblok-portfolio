const Footer = ({ blok }) => (
  // The typo was likely on this line. Ensure it says className="footer"
  <footer className="footer">
    <p>{blok.copyright_text}</p>
  </footer>
);

export default Footer;