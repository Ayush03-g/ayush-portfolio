import { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTimeline } from '@/timeline/useTimeline';
import { Earth } from './Earth';
import { Atmosphere } from './Atmosphere';
import { Clouds } from './Clouds';
import { EARTH_CONFIG } from './earthConfig';

export function EarthGroup() {
  const { currentState, TIMELINE_STATES, setState } = useTimeline();
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  useFrame((state) => {
    if (groupRef.current && (currentState === TIMELINE_STATES.EXPLORATION || currentState === TIMELINE_STATES.PLANET_TRANSITION)) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * EARTH_CONFIG.floatSpeed) * EARTH_CONFIG.floatHeight;
    }
  });

  if (currentState !== TIMELINE_STATES.EXPLORATION && currentState !== TIMELINE_STATES.PLANET_TRANSITION) return null;

  return (
    <group 
      ref={groupRef} 
      position={[0, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
      onClick={(e) => {
        e.stopPropagation();
        setState(TIMELINE_STATES.PLANET_TRANSITION);
      }}
    >
      <Suspense fallback={null}>
        <Earth />
        <Clouds />
      </Suspense>
      <Atmosphere />
    </group>
  );
}
