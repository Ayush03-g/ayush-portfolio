import { useRef } from 'react';
import * as THREE from 'three';
import { EARTH_CONFIG } from './earthConfig';

export function Atmosphere() {
  return (
    <mesh scale={1.05}>
      <sphereGeometry args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]} />
      <meshPhongMaterial
        color={EARTH_CONFIG.colors.atmosphere}
        transparent={true}
        opacity={0.15}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
