import { motion } from 'framer-motion';
import { Shield, Users, Award, Briefcase, Mail, User } from 'lucide-react';

function BlankAvatar({ size = "w-20 h-20", variant = "orange" }) {
  let bgGradient = "from-brand-orange/10 to-brand-red/10";
  let borderStyle = "border-2 border-brand-orange/20";
  let iconColor = "text-brand-orange/60";

  if (variant === "white") {
    bgGradient = "from-white/5 to-white/15";
    borderStyle = "border-2 border-white/20";
    iconColor = "text-white/60";
  } else if (variant === "red") {
    bgGradient = "from-brand-red/10 to-brand-orange/10";
    borderStyle = "border-2 border-brand-red/20";
    iconColor = "text-brand-red/60";
  }

  return (
    <div className={`${size} rounded-full bg-gradient-to-br ${bgGradient} ${borderStyle} flex items-center justify-center shadow-inner relative overflow-hidden`}>
      <User className={`w-[45%] h-[45%] ${iconColor}`} />
    </div>
  );
}

const PENGURUS_INTI = {
  ketua: {
    name: "Muhammad Fauzan",
    role: "Ketua Umum",
    email: "fauzan.ketum@sman1klaten.sch.id"
  },
  wakil: [
    {
      name: "Naura Salsabila",
      role: "Wakil Ketua I",
      email: "naura.wakahub@sman1klaten.sch.id"
    },
    {
      name: "Rian Hidayat",
      role: "Wakil Ketua II",
      email: "rian.waka@sman1klaten.sch.id"
    }
  ],
  sekretaris: [
    {
      name: "Siti Rahayu",
      role: "Sekretaris I",
    },
    {
      name: "Sonia Fitriani",
      role: "Sekretaris II",
    }
  ],
  bendahara: [
    {
      name: "Amanda Larasati",
      role: "Bendahara I",
    },
    {
      name: "Budi Santoso",
      role: "Bendahara II",
    }
  ]
};

const KOMISI = [
  {
    id: 1,
    name: "Komisi A (Aspirasi)",
    coordinator: "Aditya Pratama",
    desc: "Menjembatani dan menampung aspirasi siswa untuk disampaikan kepada pihak sekolah.",
    members: ["Farhan", "Rara", "Dwi", "Lutfi"]
  },
  {
    id: 2,
    name: "Komisi B (Pengawasan)",
    coordinator: "Dewi Lestari",
    desc: "Mengawasi jalannya kinerja program kerja OSIS agar sesuai dengan AD/ART.",
    members: ["Hadi", "Gita", "Yusuf", "Maya"]
  },
  {
    id: 3,
    name: "Komisi C (Publikasi)",
    coordinator: "Dimas Saputra",
    desc: "Mengelola media komunikasi resmi MPK dan mempublikasikan info serta berita sekolah.",
    members: ["Andi", "Mega", "Fajar", "Dhea"]
  },
  {
    id: 4,
    name: "Komisi D (Hukum)",
    coordinator: "Putri Handayani",
    desc: "Merumuskan ketetapan peraturan organisasi dan mengkaji produk hukum sekolah.",
    members: ["Tio", "Nisa", "Zaki", "Sari"]
  }
];


export default function Struktur() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black mb-4 uppercase">Struktur Organisasi</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Susunan kepengurusan Majelis Permusyawaratan Kelas (MPK) SMA Negeri 1 Klaten periode aktif.
        </p>
      </div>

      {/* Hierarchical Tree Container */}
      <div className="flex flex-col items-center gap-12 relative">
        
        {/* Tier 1: Ketua Umum */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center z-10"
        >
          <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl text-brand-red flex flex-col items-center w-64 border-2 border-brand-orange hover:shadow-[0_15px_30px_rgba(255,165,0,0.3)] transition-all transform hover:-translate-y-1">
            <div className="mb-4">
              <BlankAvatar size="w-24 h-24" variant="orange" />
            </div>
            <h3 className="text-lg font-black uppercase text-center leading-tight mb-1">{PENGURUS_INTI.ketua.name}</h3>
            <span className="text-xs font-black tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full uppercase mb-3">
              {PENGURUS_INTI.ketua.role}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Mail className="w-3.5 h-3.5" />
              <span>{PENGURUS_INTI.ketua.email}</span>
            </div>
          </div>
        </motion.div>

        {/* Connector Line down from Ketua */}
        <div className="w-1 h-12 bg-white/20"></div>

        {/* Tier 2: Wakil Ketua Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-32 w-full max-w-3xl relative z-10">
          {PENGURUS_INTI.wakil.map((waka, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-[2rem] p-6 shadow-2xl text-brand-red flex flex-col items-center w-60 border border-brand-orange/20 hover:shadow-[0_15px_25px_rgba(255,165,0,0.15)] transition-all transform hover:-translate-y-1">
                <div className="mb-3">
                  <BlankAvatar size="w-20 h-20" variant="orange" />
                </div>
                <h4 className="text-md font-black uppercase text-center leading-tight mb-1">{waka.name}</h4>
                <span className="text-[10px] font-black tracking-widest text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full uppercase mb-2">
                  {waka.role}
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{waka.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connector Line down from Waka */}
        <div className="w-1 h-12 bg-white/20"></div>

        {/* Tier 3: Sekretaris & Bendahara */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl z-10">
          {/* Sekretaris I & II */}
          {PENGURUS_INTI.sekretaris.map((sek, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] p-5 flex flex-col items-center w-full max-w-[220px] hover:bg-white/15 transition-all">
                <div className="mb-3">
                  <BlankAvatar size="w-16 h-16" variant="white" />
                </div>
                <h5 className="text-sm font-black uppercase text-center leading-tight mb-1">{sek.name}</h5>
                <span className="text-[9px] font-black tracking-widest text-brand-orange bg-brand-orange/20 px-2.5 py-0.5 rounded-full uppercase">
                  {sek.role}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Bendahara I & II */}
          {PENGURUS_INTI.bendahara.map((bend, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] p-5 flex flex-col items-center w-full max-w-[220px] hover:bg-white/15 transition-all">
                <div className="mb-3">
                  <BlankAvatar size="w-16 h-16" variant="white" />
                </div>
                <h5 className="text-sm font-black uppercase text-center leading-tight mb-1">{bend.name}</h5>
                <span className="text-[9px] font-black tracking-widest text-brand-orange bg-brand-orange/20 px-2.5 py-0.5 rounded-full uppercase">
                  {bend.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Break */}
        <div className="w-full border-t border-white/10 my-12"></div>

        {/* Tier 4: Komisi Section */}
        <div className="w-full">
          <h3 className="text-3xl font-black text-center uppercase mb-12 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-brand-orange" />
            Divisi Komisi MPK
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {KOMISI.map((kom, index) => (
              <motion.div
                key={kom.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 shadow-2xl text-brand-red flex flex-col md:flex-row gap-6 items-center md:items-start relative overflow-hidden group hover:shadow-[0_15px_30px_rgba(255,165,0,0.15)] transition-all"
              >
                {/* Decorative side badge */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full -mr-8 -mt-8"></div>
                
                {/* Coordinator Avatar */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="mb-3">
                    <BlankAvatar size="w-20 h-20" variant="red" />
                  </div>
                  <h5 className="text-xs font-black uppercase text-center leading-tight max-w-[120px]">{kom.coordinator}</h5>
                  <span className="text-[8px] font-black tracking-widest text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full uppercase mt-1">
                    KOORDINATOR
                  </span>
                </div>

                {/* Division Info */}
                <div className="flex-1 flex flex-col h-full text-center md:text-left justify-between">
                  <div>
                    <h4 className="text-xl font-black uppercase mb-2 tracking-tight group-hover:text-brand-orange transition-colors">
                      {kom.name}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {kom.desc}
                    </p>
                  </div>
                  
                  {/* Members List */}
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1.5">Anggota Komisi:</span>
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                      {kom.members.map((mem, mIdx) => (
                        <span key={mIdx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-xl text-xs font-bold uppercase hover:bg-brand-red/10 hover:text-brand-red transition-colors">
                          {mem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
