export default function Footer() {
  return (
    <footer className="bg-black/10 py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 bg-white text-brand-red flex items-center justify-center rounded font-black text-sm">OK</div>
          <span>MPK</span>
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:opacity-80">WORKS</a>
          <a href="#" className="hover:opacity-80">ABOUT</a>
          <a href="#" className="hover:opacity-80">AWARDS</a>
          <a href="#" className="hover:opacity-80">CONTACTS</a>
        </div>
        <div className="text-xs opacity-50">
          © 2026 MPK PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
