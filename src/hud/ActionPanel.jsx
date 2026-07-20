import { motion } from 'framer-motion';
import { HUD_CONFIG } from './hudConfig';

export function ActionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: HUD_CONFIG.fadeDuration, delay: HUD_CONFIG.staggerDelay * 2 }}
      className="absolute bottom-0 left-0 right-0 flex justify-center p-6 md:p-12"
    >
      <div className="font-mono text-xs md:text-sm tracking-widest text-primary uppercase">
        Enter Mission
      </div>
    </motion.div>
  );
}
