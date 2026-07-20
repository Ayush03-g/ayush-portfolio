import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { EARTH_CONFIG } from './earthConfig';

export function Clouds() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Clouds rotate slightly faster than the Earth for a parallax effect
      meshRef.current.rotation.y += EARTH_CONFIG.rotationSpeed * 1.2 * delta;
      meshRef.current.rotation.z += EARTH_CONFIG.rotationSpeed * 0.1 * delta;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.01}>
      <sphereGeometry args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]} />
      <meshStandardMaterial
        color={EARTH_CONFIG.colors.clouds}
        transparent={true}
        opacity={0.1}
        roughness={1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
