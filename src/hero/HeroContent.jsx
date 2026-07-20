import { motion } from 'framer-motion';
import { HERO_CONFIG } from './heroConfig';

export function HeroContent() {
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
    <div className="flex flex-col items-center justify-center text-center">
      <motion.h1 
        variants={itemVariants}
        className="mb-4 font-display text-5xl font-bold tracking-tight text-white uppercase md:text-7xl lg:text-8xl"
      >
        Ayush Garg
      </motion.h1>
      
      <motion.div 
        variants={itemVariants}
        className="mb-6 flex flex-col gap-2 font-mono text-xs tracking-[0.2em] text-white/70 uppercase md:text-sm md:flex-row md:items-center md:gap-4"
      >
        <span>Full Stack Developer</span>
        <span className="hidden text-white/30 md:inline">|</span>
        <span>Creative Technologist</span>
      </motion.div>
      
      <motion.p 
        variants={itemVariants}
        className="max-w-md font-sans text-sm font-light leading-relaxed text-white/60 md:text-base"
      >
        Crafting immersive digital experiences with React, Three.js, AI and modern web technologies.
      </motion.p>
    </div>
  );
}
