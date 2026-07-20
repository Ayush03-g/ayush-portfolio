import { motion } from 'framer-motion';
import { HUD_CONFIG } from './hudConfig';

export function StatusPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: HUD_CONFIG.fadeDuration }}
      className="absolute top-0 left-0 right-0 flex justify-between p-6 md:p-12 font-mono text-xs tracking-widest text-primary uppercase"
    >
      <div className="flex flex-col gap-1">
        <span className="text-muted">Mission Status</span>
        <span>Online</span>
      </div>
      <div className="flex flex-col gap-1 text-right">
        <span className="text-muted">Year</span>
        <span>2026</span>
      </div>
    </motion.div>
  );
}
