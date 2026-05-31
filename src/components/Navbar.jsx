import { Link } from 'react-router-dom';
import { Facebook, Youtube } from 'lucide-react';
import logoMpk from '../assets/logo-mpk.svg';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-red/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold flex items-center gap-2">
        <img src={logoMpk} alt="Logo MPK" className="w-10 h-10 object-contain shrink-0 rounded-lg bg-white p-0.5" />
        <span className="leading-tight">Majelis Permusyawaratan Kelas</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:opacity-80 transition-opacity">HOME</Link>
        <Link to="/works" className="hover:opacity-80 transition-opacity">WORKS</Link>
        <Link to="/about" className="hover:opacity-80 transition-opacity">ABOUT</Link>
        <Link to="/berita" className="hover:opacity-80 transition-opacity">BERITA</Link>
        <Link to="/contact" className="hover:opacity-80 transition-opacity">CONTACT</Link>
      </div>
      <div className="flex gap-4">
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <Facebook size={16} />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <Youtube size={16} />
        </a>
      </div>
    </nav>
  );
}
