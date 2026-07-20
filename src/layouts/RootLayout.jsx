import { BootSequence } from '@/boot/BootSequence';

export function RootLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Future Audio Layer */}
      {/* Future 3D Canvas Layer */}
      <main className="relative z-base h-full w-full">
        {children}
      </main>
      
      {/* HUD/UI Overlay Layer */}
      <div className="pointer-events-none absolute inset-0 z-overlay h-full w-full">
        <BootSequence />
      </div>
    </div>
  );
}
