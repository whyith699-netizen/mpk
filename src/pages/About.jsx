import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Megaphone, Scale, ChevronRight } from 'lucide-react';

const MPK_CONTENT = {
  description: "Majelis Permusyawaratan Kelas atau yang lebih akrab dikenal MPK merupakan organisasi yang bergerak dalam bidang legislatif yaitu menjalankan fungsi aspirasi, pengawasan, dan legislasi.",
  tugas: [
    "Mewakili kelasnya dalam kegiatan MPK",
    "Melaksanakan program kerja sesuai dengan AD/ART dan matriks program kerja MPK",
    "Bersama-sama dengan pengurus OSIS menyelenggarakan seleksi pengurus OSIS yang baru",
    "Mengevaluasi OSIS melalui laporan pertanggungjawaban pada akhir jabatan",
    "Mempertanggungjawabkan segala tugas kepada kepala sekolah selaku ketua dewan pembina",
    "Membuat produk hukum untuk mengatur ekstrakurikuler, organisasi, dan komunitas di SMA Negeri 1 Klaten",
    "Mengubah dan menetapkan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART)",
    "Mendirikan panitia khusus guna menyelenggarakan kegiatan tertentu berkaitan dengan MPK"
  ],
  struktur: {
    bph: ["Ketua Umum", "Wakil Ketua I & II", "Sekretaris I & II", "Bendahara I & II"],
    komisi: [
      { id: 1, name: "Aspirasi", icon: "MessageSquare" },
      { id: 2, name: "Pengawasan", icon: "ShieldCheck" },
      { id: 3, name: "Publikasi", icon: "Megaphone" },
      { id: 4, name: "Hukum", icon: "Scale" }
    ]
  },
  proker: ["Sidang Paripurna", "Sidang Reorganisasi", "Sidang Istimewa", "Sidang Pleno", "Sidang Evaluasi", "Puntadewa"],
  produkHukum: [
    { title: "Ketetapan MPK", desc: "Mengatur ketentuan yang mengikat ekstrakurikuler, organisasi, dan komunitas." },
    { title: "Peraturan MPK", desc: "Mengatur ketentuan yang hanya mengikat anggota MPK." },
    { title: "Keputusan MPK", desc: "Mengatur pihak tertentu dan bersifat penetapan." },
    { title: "Produk Hukum Lainnya", desc: "Ekstrakurikuler, Organisasi, dan Komunitas." }
  ]
};

const iconMap = {
  MessageSquare,
  ShieldCheck,
  Megaphone,
  Scale
};

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">Tentang MPK</h2>
        <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          {MPK_CONTENT.description}
        </p>
      </motion.div>

      {/* Tugas & Struktur Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Tugas Card */}
        <motion.div 
          variants={item}
          initial="hidden"
          animate="show"
          className="bg-white text-brand-red p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
          <h3 className="text-3xl font-black mb-8 uppercase flex items-center gap-3">
            <span className="w-8 h-8 bg-brand-red text-white flex items-center justify-center rounded-lg text-sm">01</span>
            Tugas Utama
          </h3>
          <ul className="space-y-4 relative z-10">
            {MPK_CONTENT.tugas.map((t, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <ChevronRight className="w-5 h-5 mt-1 shrink-0 text-brand-red/40 group-hover/item:text-brand-red transition-colors" />
                <span className="text-gray-800 font-medium leading-tight">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Struktur Section */}
        <div className="space-y-8">
          <motion.div variants={item} initial="hidden" animate="show" className="bg-brand-red/10 border border-white/10 p-8 rounded-[2rem]">
            <h3 className="text-2xl font-black mb-6 uppercase">Pengurus Inti (BPH)</h3>
            <div className="grid grid-cols-2 gap-4">
              {MPK_CONTENT.struktur.bph.map((name, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 font-bold uppercase text-sm">
                  {name}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="show" className="grid grid-cols-2 gap-4">
            {MPK_CONTENT.struktur.komisi.map((k) => {
              const Icon = iconMap[k.icon];
              return (
                <div key={k.id} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center text-center group hover:bg-brand-orange transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-brand-orange transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] font-black opacity-50 mb-1">KOMISI {k.id}</p>
                  <p className="font-black uppercase text-sm">{k.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Proker & Produk Hukum Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-12"
      >
        <div className="grid md:grid-cols-2 gap-16">
          {/* Program Kerja */}
          <div>
            <h3 className="text-3xl font-black mb-8 uppercase flex items-center gap-4">
              <span className="w-2 h-12 bg-brand-orange rounded-full"></span>
              Program Kerja
            </h3>
            <div className="flex flex-wrap gap-3">
              {MPK_CONTENT.proker.map((proker, i) => (
                <span 
                  key={i} 
                  className="bg-brand-orange text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform cursor-default"
                >
                  {proker}
                </span>
              ))}
            </div>
          </div>

          {/* Produk Hukum */}
          <div>
            <h3 className="text-3xl font-black mb-8 uppercase flex items-center gap-4">
              <span className="w-2 h-12 bg-brand-orange rounded-full"></span>
              Produk Hukum
            </h3>
            <div className="space-y-6">
              {MPK_CONTENT.produkHukum.map((p, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="font-black text-lg uppercase text-brand-orange group-hover:translate-x-2 transition-transform">{p.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
