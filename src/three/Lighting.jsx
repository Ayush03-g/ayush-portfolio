export function Lighting() {
  return (
    <>
      {/* Soft minimal ambient light to preserve rich deep space blacks */}
      <ambientLight intensity={0.05} color="#ffffff" />
      
      {/* Main Sun Light: strong, warm, with smooth specular */}
      <directionalLight 
        position={[8, 3, 4]} 
        intensity={2.0} 
        color="#fff5e6" 
        castShadow 
      />
      
      {/* Soft Fill Light: softly illuminates the terminator line */}
      <directionalLight 
        position={[-5, 0, 5]} 
        intensity={0.2} 
        color="#aaccff" 
      />

      {/* Blue Rim Light: cinematic backlighting to separate planet from space */}
      <directionalLight 
        position={[-10, -5, -10]} 
        intensity={0.8} 
        color="#4287f5" 
      />
    </>
  );
}
