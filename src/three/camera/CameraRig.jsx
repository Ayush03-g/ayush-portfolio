import { PerspectiveCamera } from '@react-three/drei';
import { CAMERA_CONFIG } from './cameraConfig';
import { CameraAnimation } from './CameraAnimation';

export function CameraRig() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={CAMERA_CONFIG.startPosition}
        fov={CAMERA_CONFIG.fov}
        near={CAMERA_CONFIG.near}
        far={CAMERA_CONFIG.far}
      />
      <CameraAnimation />
    </>
  );
}
