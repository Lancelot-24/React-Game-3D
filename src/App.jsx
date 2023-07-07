import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Ground } from './components/Ground';
import { Player } from './components/Player';



function App() {

  return (
    <>
      <Canvas>
      <Sky sunPosition={[100, 20, 100]} />
        
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls />
        <Physics>
          <Player />
          <Ground />
        </Physics>
        
      </Canvas>
    </>
  );
 
}

export default App
