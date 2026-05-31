import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IsometricBlock from '../components/IsometricBlock';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex justify-center md:justify-start"
        >
          <img src="/logo-mpk.png" alt="Logo MPK" className="w-24 h-24 object-contain" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-bold tracking-widest opacity-70 mb-4"
        >
          ORGANISASI SISWA
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black leading-none mb-6"
        >
          MAJELIS<br />PERWAKILAN<br />KELAS
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg opacity-80 max-w-md mb-8 leading-relaxed"
        >
          Majelis Permusyawaratan Kelas (MPK) SMA Negeri 1 Klaten adalah organisasi legislatif siswa yang bertugas menampung aspirasi, merumuskan peraturan sekolah, dan mengawasi kinerja OSIS.
        </motion.p>
        <Link to="/about" className="inline-block">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 group mx-auto md:mx-0 cursor-pointer"
          >
            LEARN MORE
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </Link>
      </div>
      
      <div className="flex-1 flex justify-center">
        <IsometricBlock />
      </div>
    </div>
  );
}
