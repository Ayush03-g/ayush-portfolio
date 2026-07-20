import { useTimeline } from '@/timeline/useTimeline';
import { Earth } from './Earth';
import { Atmosphere } from './Atmosphere';
import { Clouds } from './Clouds';

export function EarthGroup() {
  const { currentState, TIMELINE_STATES } = useTimeline();

  if (currentState !== TIMELINE_STATES.EXPLORATION) return null;

  return (
    <group position={[0, 0, 0]}>
      <Earth />
      <Clouds />
      <Atmosphere />
    </group>
  );
}
