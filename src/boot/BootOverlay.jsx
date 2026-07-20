import { motion, AnimatePresence } from 'framer-motion';
import { BOOT_CONFIG } from './bootConfig';

export function BootOverlay({ children, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: BOOT_CONFIG.fadeDuration, delay: 0.5 }}
          className="absolute inset-0 z-modal flex items-center justify-center bg-background pointer-events-auto"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
