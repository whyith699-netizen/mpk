import { motion } from 'framer-motion';

const AWARDS = [
  { year: "2026", title: "Organisasi Terbaik Tingkat Provinsi", category: "KATEGORI: ORGANISASI" },
  { year: "2025", title: "Juara 1 Lomba Karya Tulis Ilmiah", category: "KATEGORI: AKADEMIK" },
  { year: "2025", title: "Penerima Penghargaan Inovasi Sekolah", category: "KATEGORI: INOVASI" },
  { year: "2024", title: "MPK Paling Aktif Nasional", category: "KATEGORI: NASIONAL" },
  { year: "2023", title: "Duta Aspirasi Siswa Terpilih", category: "KATEGORI: SOSIAL" },
];

export default function Awards() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase">Prestasi & Penghargaan</h2>
        <p className="text-lg opacity-80">Kebanggaan dan pencapaian yang telah kami raih.</p>
      </div>

      <div className="space-y-6">
        {AWARDS.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/10 hover:bg-white/20 p-8 rounded-3xl transition-all border border-white/5"
          >
            <div className="text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {award.year}
            </div>
            <div className="flex-grow">
              <p className="text-[10px] font-black tracking-widest text-brand-orange mb-1">
                {award.category}
              </p>
              <h3 className="text-2xl font-black uppercase leading-tight group-hover:translate-x-2 transition-transform">
                {award.title}
              </h3>
            </div>
            <div className="w-12 h-12 bg-white text-brand-red rounded-full flex items-center justify-center font-black group-hover:scale-110 transition-transform shadow-lg">
              ★
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
