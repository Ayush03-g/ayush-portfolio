import { StarField } from './StarField';
import { SpaceDust } from './SpaceDust';

export function Environment() {
  return (
    <group>
      <StarField count={8000} />
      <SpaceDust count={2000} />
    </group>
  );
}
