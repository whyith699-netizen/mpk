import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, CheckCircle, PlayCircle, HelpCircle } from 'lucide-react';
import WorkCard from '../components/WorkCard';
import { PROKERS } from '../data/dummyData';

export default function Works() {
  const [selectedProker, setSelectedProker] = useState(null);

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
          <WorkCard 
            key={proker.id} 
            {...proker} 
            index={index} 
            onClick={() => setSelectedProker(proker)}
          />
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProker(null)}
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
              {/* Decorative graphic background */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-orange/5 rounded-full pointer-events-none"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProker(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-brand-red hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer text-gray-500 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Status Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full mb-6 uppercase">
                {selectedProker.status}
              </span>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-6 pr-8">
                {selectedProker.title}
              </h3>

              {/* Meta Info */}
              <div className="grid sm:grid-cols-2 gap-4 border-t border-b border-gray-100 py-4 mb-6 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-orange" />
                  <span>Waktu: <strong className="text-gray-900">{selectedProker.date}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-brand-orange" />
                  <span>Pelaksana: <strong className="text-gray-900">{selectedProker.pic}</strong></span>
                </div>
              </div>

              {/* Descriptions & Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">Deskripsi Singkat</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {selectedProker.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">Detail Kegiatan</h4>
                  <p className="text-gray-800 leading-relaxed font-semibold text-sm md:text-base">
                    {selectedProker.details}
                  </p>
                </div>
              </div>

              {/* Footer Close Button */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setSelectedProker(null)}
                  className="bg-brand-red text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-orange transition-colors cursor-pointer shadow-lg"
                >
                  Tutup Detail
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
