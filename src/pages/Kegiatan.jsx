import { motion } from 'framer-motion';

const KEGIATAN = [
  { date: "20 Mei 2026", title: "Sidang Paripurna Semester Genap", category: "BERITA", excerpt: "Membahas evaluasi program kerja dan penetapan ketetapan baru untuk semester genap." },
  { date: "15 Mei 2026", title: "Forum Aspirasi Siswa Terbuka", category: "KEGIATAN", excerpt: "Menyerap aspirasi dari seluruh perwakilan kelas mengenai fasilitas sekolah." },
  { date: "02 Mei 2026", title: "Studi Banding Organisasi ke Luar Kota", category: "KEGIATAN", excerpt: "Kunjungan ke SMA unggulan untuk mempelajari sistem manajerial organisasi siswa." },
  { date: "28 Apr 2026", title: "Rapat Pleno Komisi", category: "BERITA", excerpt: "Pembahasan detail per komisi mengenai target kuartal kedua." }
];

export default function Kegiatan() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase">Kegiatan & Berita</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
        <p className="text-lg opacity-80">Informasi terbaru mengenai aktivitas dan kebijakan MPK.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {KEGIATAN.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-black tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                {item.category}
              </span>
              <span className="text-sm font-bold opacity-50">{item.date}</span>
            </div>
            <h3 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:text-brand-orange transition-colors">
              {item.title}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed mb-8 flex-grow">
              {item.excerpt}
            </p>
            <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all opacity-80 group-hover:opacity-100">
              Baca Selengkapnya <span>→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
