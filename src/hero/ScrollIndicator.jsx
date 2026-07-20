import { motion } from 'framer-motion';
import { HERO_CONFIG } from './heroConfig';

export function ScrollIndicator() {
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
    <motion.div 
      variants={itemVariants}
      className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center gap-3"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
        Scroll to Continue
      </span>
      <motion.div 
        animate={{ opacity: [0.1, 0.8, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent"
      />
    </motion.div>
  );
}
