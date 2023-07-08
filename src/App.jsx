import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Grid } from './components/Grid';
import { EnemyGrid } from './components/EnemyGrid';
import { Player } from './components/Player';
import {FPV} from './components/FPV';


function App() {

  return (
    <>
      <Canvas>
      <Sky sunPosition={[100, 20, 100]} />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <axesHelper args={[5]} />
        <FPV />
        <Physics>
          <Grid />
          <EnemyGrid />
          <Player />
          
        </Physics>
        
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
 
}

export default App
