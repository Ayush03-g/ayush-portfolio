import { motion } from 'framer-motion';
import { HERO_CONFIG } from './heroConfig';

export function CTAButton() {
  const itemVariants = {
    hidden: { opacity: 0, y: HERO_CONFIG.initialY, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: HERO_CONFIG.fadeDuration, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.button
      variants={itemVariants}
      className="pointer-events-auto mt-10 rounded-full border border-white/20 bg-transparent px-8 py-3 font-mono text-xs tracking-widest text-white uppercase transition-all duration-500 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] focus:outline-none focus:ring-1 focus:ring-white/50"
      aria-label="Explore Projects"
    >
      Explore Projects
    </motion.button>
  );
}
