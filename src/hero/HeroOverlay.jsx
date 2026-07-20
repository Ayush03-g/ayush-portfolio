import { motion, AnimatePresence } from 'framer-motion';
import { useTimeline } from '@/timeline/useTimeline';
import { HERO_CONFIG } from './heroConfig';
import { HeroContent } from './HeroContent';
import { CTAButton } from './CTAButton';
import { ScrollIndicator } from './ScrollIndicator';
import { StatusPanel } from '@/hud/StatusPanel';

export function HeroOverlay() {
  const { currentState, TIMELINE_STATES } = useTimeline();
  const isVisible = currentState === TIMELINE_STATES.EXPLORATION;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 z-content pointer-events-none flex flex-col items-center justify-center">
          <StatusPanel />
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: HERO_CONFIG.staggerDelay,
                  delayChildren: 0.2
                }
              }
            }}
            className="flex w-full flex-col items-center px-6"
          >
            <HeroContent />
            <CTAButton />
          </motion.div>
          <ScrollIndicator />
        </div>
      )}
    </AnimatePresence>
  );
}
