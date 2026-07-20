export function RootLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Future Audio Layer */}
      {/* Future 3D Canvas Layer */}
      {/* Future HUD/UI Overlay Layer */}
      <main className="relative z-content h-full w-full">
        {children}
      </main>
    </div>
  );
}
