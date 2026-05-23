import { motion } from 'framer-motion';

export default function IsometricBlock() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Simplified 3D "OK" Block using CSS transforms */}
        <div className="scale-75 md:scale-100 transform rotate-[-30deg] skew-x-[30deg]">
          <div className="relative w-48 h-48 bg-white shadow-[20px_20px_0_rgba(0,0,0,0.1)] flex items-center justify-center text-8xl font-black text-brand-red">
            OK
            {/* Side layers for 3D effect */}
            <div className="absolute top-0 -left-[20px] w-[20px] h-full bg-gray-200 origin-right skew-y-[-45deg]"></div>
            <div className="absolute -bottom-[20px] left-0 w-full h-[20px] bg-gray-300 origin-top skew-x-[-45deg]"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-0 right-0 w-12 h-12 bg-brand-orange rounded-lg shadow-lg"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-10 left-0 w-8 h-8 bg-white/30 rounded-full"
      ></motion.div>
    </div>
  );
}
