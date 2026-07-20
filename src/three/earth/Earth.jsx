import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { EARTH_CONFIG } from './earthConfig';

export function Earth() {
  const meshRef = useRef();
  
  const colorMap = useTexture('/assets/textures/earth/color.jpg');

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += EARTH_CONFIG.rotationSpeed * delta;
    }
  });

  return (
    <mesh ref={meshRef} receiveShadow castShadow>
      <sphereGeometry args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]} />
      <meshStandardMaterial 
        map={colorMap}
        roughness={EARTH_CONFIG.materials.roughness}
        metalness={EARTH_CONFIG.materials.metalness}
      />
    </mesh>
  );
}
