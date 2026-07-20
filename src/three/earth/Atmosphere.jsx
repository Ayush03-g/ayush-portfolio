import * as THREE from 'three';
import { EARTH_CONFIG } from './earthConfig';
import { useMemo } from 'react';

export function Atmosphere() {
  const uniforms = useMemo(() => ({
    color: { value: new THREE.Color(EARTH_CONFIG.colors.atmosphere) },
    coeficient: { value: 0.6 },
    power: { value: 3.5 }
  }), []);

  const vertexShader = `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 color;
    uniform float coeficient;
    uniform float power;
    varying vec3 vNormal;
    void main() {
      float intensity = pow(coeficient - dot(vNormal, vec3(0, 0, 1.0)), power);
      gl_FragColor = vec4(color, 1.0) * intensity;
    }
  `;

  return (
    <mesh scale={EARTH_CONFIG.materials.atmosphereScale}>
      <sphereGeometry args={[EARTH_CONFIG.radius, EARTH_CONFIG.segments, EARTH_CONFIG.segments]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
