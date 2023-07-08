import { usePlane } from "@react-three/cannon";
import { redTileTexture } from "../assets/images/textures";
import { NearestFilter, RepeatWrapping } from "three";

export const EnemyGrid = () => {
    const [ref] = usePlane(() => (
        {
        rotation: [-Math.PI/2, 0, 0],
        position: [0, -1, -3],
    }))
    
    redTileTexture.magFilter = NearestFilter;
    redTileTexture.wrapS = redTileTexture.wrapT = RepeatWrapping;
    redTileTexture.repeat.set(3,3);
    
    return(
      <mesh ref={ref}> 
        <planeGeometry attach='geometry' args={[3,3]}/>
        <meshStandardMaterial attach='material' map={redTileTexture}  />
      </mesh>
    );
  }