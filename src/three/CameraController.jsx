import { PerspectiveCamera } from '@react-three/drei';

export function CameraController() {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 5]}
      fov={75}
      near={0.1}
      far={1000}
    />
  );
}
