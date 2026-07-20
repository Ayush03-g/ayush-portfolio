import { motion } from 'framer-motion';
import { HUD_CONFIG } from './hudConfig';

export function HeroPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: HUD_CONFIG.fadeDuration, delay: HUD_CONFIG.staggerDelay }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary"
    >
      <h1 className="mb-6 font-display text-4xl md:text-6xl font-bold tracking-tight uppercase">Ayush Garg</h1>
      <div className="flex flex-col gap-3 font-mono text-xs md:text-sm tracking-[0.2em] text-muted uppercase">
        <span>Full Stack Developer</span>
        <span>Creative Technologist</span>
        <span>Building Digital Experiences</span>
      </div>
    </motion.div>
  );
}
