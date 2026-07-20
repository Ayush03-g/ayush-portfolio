import { useState, useEffect } from 'react';
import { useTimeline } from '@/timeline/useTimeline';
import { BOOT_CONFIG } from './bootConfig';
import { BootOverlay } from './BootOverlay';
import { BootText } from './BootText';
import { delay } from '@/utils/helpers';

export function BootSequence() {
  const { currentState, TIMELINE_STATES, setState } = useTimeline();
  const [isSequenceActive, setIsSequenceActive] = useState(true);
  const [activeText, setActiveText] = useState('');

  useEffect(() => {
    if (currentState !== TIMELINE_STATES.BOOT) {
      setIsSequenceActive(false);
      return;
    }

    let isMounted = true;

    async function runSequence() {
      // Small initial delay before text starts
      await delay(500);

      for (let i = 0; i < BOOT_CONFIG.sequence.length; i++) {
        if (!isMounted) return;
        setActiveText(BOOT_CONFIG.sequence[i].text);
        await delay(BOOT_CONFIG.sequence[i].duration);
      }
      
      if (!isMounted) return;
      setActiveText('');
      
      // Wait for the final text to fade out
      await delay(BOOT_CONFIG.fadeDuration * 1000);
      
      if (!isMounted) return;
      setIsSequenceActive(false);
      
      // Wait for the overlay background to fade out
      await delay(BOOT_CONFIG.fadeDuration * 1000 + 500);
      
      if (isMounted) {
        setState(TIMELINE_STATES.INTRO);
      }
    }

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [currentState, TIMELINE_STATES, setState]);

  // Once fully completed, remove from DOM entirely
  if (currentState !== TIMELINE_STATES.BOOT && !isSequenceActive) {
    return null;
  }

  return (
    <BootOverlay isVisible={isSequenceActive}>
      <BootText text={activeText} />
    </BootOverlay>
  );
}
