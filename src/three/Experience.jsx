import { CanvasWrapper } from './CanvasWrapper';
import { Renderer } from './Renderer';
import { CameraRig } from './camera/CameraRig';
import { Lighting } from './Lighting';
import { Scene } from './Scene';

export function Experience() {
  return (
    <CanvasWrapper>
      <Renderer />
      <CameraRig />
      <Lighting />
      <Scene />
    </CanvasWrapper>
  );
}
