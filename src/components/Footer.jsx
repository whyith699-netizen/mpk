import { Link } from 'react-router-dom';
import logoMpk from '../assets/logo-mpk.svg';

export default function Footer() {
  return (
    <footer className="bg-black/10 py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src={logoMpk} alt="Logo MPK" className="w-8 h-8 object-contain shrink-0 rounded bg-white p-0.5" />
          <span className="leading-tight">MPK SMAN 1 Klaten</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:opacity-80">HOME</Link>
          <Link to="/works" className="hover:opacity-80">WORKS</Link>
          <Link to="/about" className="hover:opacity-80">ABOUT</Link>
          <Link to="/berita" className="hover:opacity-80">BERITA</Link>
          <Link to="/contact" className="hover:opacity-80">CONTACT</Link>
        </div>
        <div className="text-xs opacity-50">
          © 2026 MPK SMAN 1 KLATEN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
