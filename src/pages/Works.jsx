import WorkCard from '../components/WorkCard';

const PROKERS = [
  {
    title: "Pemilihan Ketua OSIS",
    description: "Penyelenggaraan pemilihan ketua OSIS masa bakti 2026/2027 secara demokratis, adil, transparan, dan terbuka bagi seluruh siswa.",
    status: "SELESAI"
  },
  {
    title: "Forum Aspirasi Siswa",
    description: "Penyaluran dan diskusi aspirasi siswa secara berkala dengan pihak sekolah untuk meningkatkan sarana prasarana serta kenyamanan belajar.",
    status: "BERJALAN"
  },
  {
    title: "Latihan Kepemimpinan",
    description: "Pembekalan karakter kepemimpinan, kepribadian, serta manajemen organisasi bagi pengurus baru MPK dan OSIS.",
    status: "TERENCANA"
  },
  {
    title: "Sidang Paripurna MPK",
    description: "Sidang pleno resmi untuk menetapkan Anggaran Dasar/Anggaran Rumah Tangga (AD/ART) serta laporan pertanggungjawaban program kerja.",
    status: "BERJALAN"
  },
  {
    title: "MPK Awards 2026",
    description: "Penghargaan tahunan dari MPK sebagai bentuk apresiasi bagi kelas teraktif serta ekstrakurikuler paling kreatif dan berprestasi.",
    status: "TERENCANA"
  },
  {
    title: "Studi Banding Organisasi",
    description: "Kunjungan kemitraan ke sekolah-sekolah unggulan lain untuk berbagi pengalaman, wawasan, serta inovasi program kerja organisasi.",
    status: "SELESAI"
  }
];

export default function Works() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Program Kerja</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Daftar inisiatif dan kegiatan unggulan yang kami laksanakan untuk kemajuan sekolah.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROKERS.map((proker, index) => (
          <WorkCard key={index} {...proker} index={index} />
        ))}
      </div>
    </div>
  );
}
