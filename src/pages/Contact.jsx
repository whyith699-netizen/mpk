import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const SOCIAL_LINKS = [
  { id: 'facebook', icon: <Facebook size={24} /> },
  { id: 'twitter', icon: <Twitter size={24} /> },
  { id: 'instagram', icon: <Instagram size={24} /> },
  { id: 'youtube', icon: <Youtube size={24} /> }
];

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-5xl font-black mb-8 uppercase leading-none">Hubungi<br />Kami</h2>
        <p className="text-lg opacity-80 mb-12">
          Punya aspirasi, kritik, atau saran untuk kemajuan sekolah? Sampaikan melalui formulir di samping atau hubungi kontak kami di bawah.
        </p>
        
        <div className="space-y-8">
          <div>
            <p className="text-xs font-black tracking-widest text-brand-orange mb-2 uppercase">Lokasi Kami</p>
            <p className="text-2xl font-black uppercase">Jl. Merbabu No. 13,<br />Gayamprit, Klaten</p>
          </div>
          <div>
            <p className="text-xs font-black tracking-widest text-brand-orange mb-2 uppercase">Email</p>
            <p className="text-2xl font-black uppercase underline">mpk@sman1klaten.sch.id</p>
          </div>
          <div className="flex gap-4 pt-4">
            {SOCIAL_LINKS.map(({ id, icon }) => (
              <div key={id} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer text-xl font-black">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[40px] p-10 shadow-2xl text-brand-red"
      >
        <h3 className="text-2xl font-black mb-8 uppercase">Kirim Aspirasi</h3>
        <form className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Nama Lengkap</label>
            <input type="text" className="w-full bg-gray-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="Budi Santoso" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Kelas</label>
            <input type="text" className="w-full bg-gray-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all" placeholder="XI MIPA 3" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Pesan / Aspirasi</label>
            <textarea className="w-full bg-gray-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-red transition-all h-32" placeholder="Tuliskan aspirasimu di sini..."></textarea>
          </div>
          <button className="w-full bg-brand-red text-white py-5 rounded-3xl font-black uppercase tracking-widest shadow-xl hover:bg-brand-orange transition-all transform hover:-translate-y-1">
            Kirim Sekarang
          </button>
        </form>
      </motion.div>
    </div>
  );
}
