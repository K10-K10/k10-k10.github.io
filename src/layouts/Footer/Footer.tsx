import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer_info">
        <p>&copy; {new Date().getFullYear()} K10-K10</p>
        <p>Powered by React, Vite &amp; GitHub Pages</p>
      </div>
    </footer>
  );
}
