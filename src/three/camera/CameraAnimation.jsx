import { useFrame, useThree } from '@react-three/fiber';
import { useTimeline } from '@/timeline/useTimeline';
import { CAMERA_CONFIG } from './cameraConfig';
import * as THREE from 'three';
import { useEffect } from 'react';

export function CameraAnimation() {
  const { camera } = useThree();
  const { currentState, TIMELINE_STATES, setState } = useTimeline();

  // Reset to start position during BOOT
  useEffect(() => {
    if (currentState === TIMELINE_STATES.BOOT) {
      camera.position.set(...CAMERA_CONFIG.startPosition);
    }
  }, [currentState, camera, TIMELINE_STATES]);

  useFrame((state, delta) => {
    if (currentState !== TIMELINE_STATES.INTRO) return;

    // Smoothly dampen the camera Z position towards the end position
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      CAMERA_CONFIG.endPosition[2],
      CAMERA_CONFIG.dampFactor,
      delta
    );

    // Transition state when threshold is reached
    if (Math.abs(camera.position.z - CAMERA_CONFIG.endPosition[2]) < CAMERA_CONFIG.completionThreshold) {
      camera.position.z = CAMERA_CONFIG.endPosition[2]; // Snap to exact end
      setState(TIMELINE_STATES.EXPLORATION);
    }
  });

  return null;
}
