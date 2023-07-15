import './CSS/App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { ContactShadows, OrbitControls, Sky, Stars } from '@react-three/drei';
import { Grid } from './components/Grid';
import { EnemyGrid } from './components/EnemyGrid';
import { Player } from './components/Player';
import { Enemy } from './components/Enemy';
import {FPV} from './components/FPV';
import { PlayerHealth } from './components/PlayerHealth';


function App() {

  return (
    <>
      <Canvas>
      <Sky sunPosition={[20, 20, 100]} />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <FPV />
        
        <Physics>
          <Grid />
          <EnemyGrid />
          <Player />
          <Enemy />
          
          
        </Physics>
       
        <ContactShadows position={[0, -0.9, -0.025]} opacity={1}  blur={1} far={10} />
      </Canvas>
    </>
  );
 
}

export default App
