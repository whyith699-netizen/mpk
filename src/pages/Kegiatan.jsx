import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Clock } from 'lucide-react';
import { KEGIATAN } from '../data/dummyData';

export default function Kegiatan() {
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase">News & Events</h2>
        <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
        <p className="text-lg opacity-80">Informasi terbaru mengenai aktivitas, berita, dan kebijakan MPK.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {KEGIATAN.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedKegiatan(item)}
            className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col h-full cursor-pointer hover:border-brand-orange/40 hover:shadow-lg"
          >
            {item.image && (
              <div className="w-full h-48 bg-white/5 rounded-2xl mb-6 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-black tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                {item.category === 'BERITA' ? 'NEWS' : 'EVENTS'}
              </span>
              <span className="text-sm font-bold opacity-50">{item.date}</span>
            </div>
            <h3 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:text-brand-orange transition-colors">
              {item.title}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed mb-8 flex-grow">
              {item.excerpt}
            </p>
            <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all opacity-80 group-hover:opacity-100 cursor-pointer">
              Baca Selengkapnya <span>→</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedKegiatan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedKegiatan(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white text-brand-red rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Decorative background */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-orange/5 rounded-full pointer-events-none"></div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedKegiatan(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-brand-red hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer text-gray-500 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full mb-6 uppercase">
                {selectedKegiatan.category === 'BERITA' ? 'NEWS' : 'EVENTS'}
              </span>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-6 pr-8">
                {selectedKegiatan.title}
              </h3>

              {/* Image */}
              {selectedKegiatan.image && (
                <img 
                  src={selectedKegiatan.image} 
                  alt={selectedKegiatan.title} 
                  className="w-full h-48 md:h-64 object-cover rounded-3xl mb-6 shadow-md"
                />
              )}

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-2 border-t border-b border-gray-100 py-4 mb-6 text-xs md:text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="truncate">{selectedKegiatan.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="truncate">{selectedKegiatan.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="truncate">{selectedKegiatan.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose max-w-none text-gray-800 text-sm md:text-base leading-relaxed space-y-4">
                <p className="font-semibold text-gray-700 italic border-l-4 border-brand-orange pl-4 mb-4">
                  {selectedKegiatan.excerpt}
                </p>
                <p>
                  {selectedKegiatan.content}
                </p>
              </div>

              {/* Footer Close Button */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setSelectedKegiatan(null)}
                  className="bg-brand-red text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-orange transition-colors cursor-pointer shadow-lg"
                >
                  Tutup Berita
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
