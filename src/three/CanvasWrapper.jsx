import { Canvas } from '@react-three/fiber';

export function CanvasWrapper({ children }) {
  return (
    <div className="absolute inset-0 h-full w-full bg-black">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: false, preserveDrawingBuffer: false }}
        dpr={[1, 2]}
      >
        {children}
      </Canvas>
    </div>
  );
}
