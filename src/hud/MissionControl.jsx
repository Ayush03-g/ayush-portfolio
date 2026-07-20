import { AnimatePresence } from 'framer-motion';
import { useTimeline } from '@/timeline/useTimeline';
import { StatusPanel } from './StatusPanel';
import { HeroPanel } from './HeroPanel';
import { ActionPanel } from './ActionPanel';

export function MissionControl() {
  const { currentState, TIMELINE_STATES } = useTimeline();
  
  const isVisible = currentState === TIMELINE_STATES.EXPLORATION;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 h-full w-full pointer-events-none select-none z-content">
          <StatusPanel />
          <HeroPanel />
          <ActionPanel />
        </div>
      )}
    </AnimatePresence>
  );
}
