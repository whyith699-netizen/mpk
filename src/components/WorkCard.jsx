import { motion } from 'framer-motion';

export default function WorkCard({ title, description, status, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl p-6 shadow-2xl text-brand-red flex flex-col h-full"
    >
      <div className="w-full h-40 bg-brand-red/10 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group">
        <div className="text-4xl font-black opacity-20 group-hover:scale-110 transition-transform">MPK</div>
        <div className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
          {status}
        </div>
      </div>
      <h3 className="text-xl font-black mb-3 uppercase tracking-tight leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <button className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors self-end shadow-lg">
        →
      </button>
    </motion.div>
  );
}
