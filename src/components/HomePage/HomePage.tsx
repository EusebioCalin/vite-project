import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  useProgress,
  Stars
} from '@react-three/drei';
import RetroComputerModel from '../RetroComputerModel/RetroComputerModel';

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

const HomePage: React.FC = () => {
  console.log('LOADED');

  return (
    <Canvas frameloop="demand">
      <ambientLight />
      <Stars />
      <OrbitControls />
      <Suspense fallback={<Loader />}>
        <RetroComputerModel />
      </Suspense>
    </Canvas>
  );
};

export default HomePage;
