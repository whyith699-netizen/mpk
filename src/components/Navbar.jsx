import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-red/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <div className="w-10 h-10 bg-white text-brand-red flex items-center justify-center rounded-lg font-black">OK</div>
        <span>MPK</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:opacity-80 transition-opacity">WORKS</Link>
        <Link to="/about" className="hover:opacity-80 transition-opacity">ABOUT</Link>
        <Link to="/berita" className="hover:opacity-80 transition-opacity">BERITA</Link>
        <Link to="/contact" className="hover:opacity-80 transition-opacity">CONTACT</Link>
      </div>
      <div className="flex gap-4">
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">f</a>
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">y</a>
      </div>
    </nav>
  );
}
