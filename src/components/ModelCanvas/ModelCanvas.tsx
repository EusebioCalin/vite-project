import { MouseEventHandler, Suspense, useState } from 'react';
import { Canvas, Euler } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  useProgress,
  Stars
} from '@react-three/drei';
import RetroComputerModel from '../RetroComputerModel/RetroComputerModel';

type rotation =
  Euler | [x: number, y: number, z: number, order?: string | undefined];

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

const ModelCanvas: React.FC = () => {
  const [rotation, setRotation] = useState<rotation>([0, 0, 0]);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    let mouseValues: rotation = [0, 0, 0];
    const target = event.target as HTMLDivElement;
    mouseValues = [
      (((event.clientY / target.offsetHeight - 0.5) * Math.PI) / 3),
      ((event.clientX / target.offsetWidth - 0.5) * Math.PI) / 3,
      0
    ];
    setRotation(mouseValues);
  };

  return (
    <Canvas
      frameloop="demand"
      onMouseMove={onMouseMove}
    >
      <ambientLight />
      <Stars />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
        makeDefault
      />
      <Suspense fallback={<Loader />}>
        <RetroComputerModel rotation={rotation}/>
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;
