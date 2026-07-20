import { useState, useCallback, useMemo } from 'react';
import { TimelineContext } from './TimelineContext';
import { TIMELINE_STATES, INITIAL_STATE } from './timelineConfig';

export function TimelineProvider({ children }) {
  const [currentState, setCurrentState] = useState(INITIAL_STATE);
  const [previousState, setPreviousState] = useState(null);
  const [progress, setProgress] = useState(0);

  const setState = useCallback((newState) => {
    setCurrentState((prev) => {
      if (prev !== newState) {
        setPreviousState(prev);
        return newState;
      }
      return prev;
    });
  }, []);

  const resetTimeline = useCallback(() => {
    setCurrentState(INITIAL_STATE);
    setPreviousState(null);
    setProgress(0);
  }, []);

  const value = useMemo(() => ({
    currentState,
    previousState,
    setState,
    progress,
    setProgress,
    resetTimeline,
    TIMELINE_STATES
  }), [currentState, previousState, setState, progress, resetTimeline]);

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
}
