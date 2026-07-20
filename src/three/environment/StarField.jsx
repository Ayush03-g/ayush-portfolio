import { useMemo } from 'react';
import * as THREE from 'three';

export function StarField({ count = 10000 }) {
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#e2f1fd'),
      new THREE.Color('#fdf5e2')
    ];

    for (let i = 0; i < count; i++) {
      const r = 30 + Math.pow(Math.random(), 2) * 100;
      
      let phi = Math.acos(2 * Math.random() - 1);
      if (Math.random() > 0.5) {
        const offset = (Math.random() + Math.random() + Math.random() - 1.5) * 0.5;
        phi = Math.PI / 2 + offset;
      }
      
      const theta = 2 * Math.PI * Math.random();
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const baseColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      
      let brightness = Math.random();
      if (brightness > 0.9) brightness = 1.0;
      else if (brightness > 0.6) brightness = 0.5;
      else brightness = 0.15;

      colors[i * 3] = baseColor.r * brightness;
      colors[i * 3 + 1] = baseColor.g * brightness;
      colors[i * 3 + 2] = baseColor.b * brightness;
    }
    
    return { positions, colors };
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors={true}
        sizeAttenuation={true}
        transparent={true}
        opacity={1.0}
        depthWrite={false}
      />
    </points>
  );
}
