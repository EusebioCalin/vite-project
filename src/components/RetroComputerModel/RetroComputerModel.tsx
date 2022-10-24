/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';

// rotation: Euler
// position: Vector3
// color: Color

const MODEL_PATH = '/models/retro_computer_setup_free/scene.gltf';
const Model: React.FC = (props) => {
  const { nodes, materials } = useGLTF(MODEL_PATH);
  const geometry =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (nodes.retro_computer_setup_retro_computer_setup_Mat_0 as any).geometry;
  return (
    <group {...props} dispose={null}>
        <group rotation={[-1.4, 0, 0]}>
            <mesh
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
