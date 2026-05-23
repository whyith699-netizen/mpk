import { motion } from 'framer-motion';
import IsometricBlock from '../components/IsometricBlock';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-left">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 group mx-auto md:mx-0"
        >
          LEARN MORE
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.button>
      </div>
      
      <div className="flex-1 flex justify-center">
        <IsometricBlock />
      </div>
    </div>
  );
}
