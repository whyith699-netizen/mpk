import WorkCard from '../components/WorkCard';

const PROKERS = [
  {
    title: "Pemilihan Ketua OSIS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "SELESAI"
  },
  {
    title: "Forum Aspirasi Siswa",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: "BERJALAN"
  },
  {
    title: "Latihan Kepemimpinan",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    status: "TERENCANA"
  },
  {
    title: "Sidang Paripurna MPK",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "BERJALAN"
  },
  {
    title: "MPK Awards 2026",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
    status: "TERENCANA"
  },
  {
    title: "Studi Banding Organisasi",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
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
