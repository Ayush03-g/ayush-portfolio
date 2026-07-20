import { CanvasWrapper } from './CanvasWrapper';
import { Renderer } from './Renderer';
import { CameraController } from './CameraController';
import { Lighting } from './Lighting';
import { Scene } from './Scene';

export function Experience() {
  return (
    <CanvasWrapper>
      <Renderer />
      <CameraController />
      <Lighting />
      <Scene />
    </CanvasWrapper>
  );
}
