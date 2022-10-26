/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { Euler } from '@react-three/fiber';

// rotation: Euler
// position: Vector3
// color: Color

interface ModelProps {
  rotation:
  Euler |
  [x: number, y: number, z: number, order?: string | undefined]
}
const MODEL_PATH = '/models/retro_computer_setup_free/scene.gltf';
const Model: React.FC<ModelProps> = ({ rotation }) => {
  const { nodes, materials } = useGLTF(MODEL_PATH);
  const geometry =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nodes.retro_computer_setup_retro_computer_setup_Mat_0 as any).geometry;
  return (
    <group dispose={null}>
        <group
        rotation={rotation}>
            <mesh
              rotation-x={-Math.PI / 3}
              scale={0.03}
              geometry={geometry}
              material={materials.retro_computer_setup_Mat}
            >
              </mesh>
      </group>
    </group>
  );
};
useGLTF.preload(MODEL_PATH);

export default Model;
