import { motion, AnimatePresence } from 'framer-motion';
import { BOOT_CONFIG } from './bootConfig';

export function BootText({ text }) {
  return (
    <AnimatePresence mode="wait">
      {text && (
        <motion.div
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: BOOT_CONFIG.fadeDuration }}
          className="absolute inset-0 flex items-center justify-center text-center font-mono text-sm tracking-widest text-primary md:text-base uppercase"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
