import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { EARTH_CONFIG } from './earthConfig';

export function Clouds() {
  const meshRef = useRef();
  const cloudsMap = useTexture('/assets/textures/earth/clouds.jpg');

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += EARTH_CONFIG.rotationSpeed * 1.2 * delta;
      meshRef.current.rotation.z += EARTH_CONFIG.rotationSpeed * 0.05 * delta;
    }
  });

  return (
    <mesh ref={meshRef} scale={EARTH_CONFIG.materials.cloudScale}>
      <sphereGeometry args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]} />
      <meshStandardMaterial
        map={cloudsMap}
        transparent={true}
        opacity={EARTH_CONFIG.materials.cloudOpacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
