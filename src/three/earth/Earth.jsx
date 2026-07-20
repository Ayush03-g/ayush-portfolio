import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { EARTH_CONFIG } from './earthConfig';

export function Earth() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += EARTH_CONFIG.rotationSpeed * delta;
    }
  });

  // Using a stylized dark ocean color since we have no high-res textures.
  // This creates a sleek, minimalistic cinematic globe.
  return (
    <mesh ref={meshRef} receiveShadow castShadow>
      <sphereGeometry args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]} />
      <meshStandardMaterial 
        color={EARTH_CONFIG.colors.ocean}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}
