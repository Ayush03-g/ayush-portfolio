import { Environment } from './environment/Environment';
import { EarthGroup } from './earth/EarthGroup';

export function Scene() {
  return (
    <group>
      <Environment />
      <EarthGroup />
    </group>
  );
}
