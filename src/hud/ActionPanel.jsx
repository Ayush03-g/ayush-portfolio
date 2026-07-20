import { motion } from 'framer-motion';
import { useTimeline } from '@/timeline/useTimeline';
import { HUD_CONFIG } from './hudConfig';

export function ActionPanel() {
  const { setState, TIMELINE_STATES } = useTimeline();

  const handleEnterMission = () => {
    console.log('[HUD] Enter Mission Clicked! Transitioning to PLANET_TRANSITION.');
    setState(TIMELINE_STATES.PLANET_TRANSITION);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: HUD_CONFIG.fadeDuration, delay: HUD_CONFIG.staggerDelay * 2 }}
      className="absolute bottom-0 left-0 right-0 flex justify-center p-6 md:p-12"
    >
      <button 
        onClick={handleEnterMission}
        className="pointer-events-auto font-mono text-xs md:text-sm tracking-widest text-primary uppercase hover:text-muted transition-colors duration-300"
      >
        Enter Mission
      </button>
    </motion.div>
  );
}
