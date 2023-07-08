import { usePlane } from "@react-three/cannon";
import { blueTileTexture } from "../assets/images/textures";
import { NearestFilter, RepeatWrapping } from "three";

export const Grid = () => {
    const [ref] = usePlane(() => (
        {
        rotation: [-Math.PI/2, 0, 0],
        position: [0, -1, 0],
    }))
    
    blueTileTexture.magFilter = NearestFilter;
    blueTileTexture.wrapS = blueTileTexture.wrapT = RepeatWrapping;
    blueTileTexture.repeat.set(3,3);
    
    return(
      <mesh ref={ref}> 
        <planeGeometry attach='geometry' args={[3,3]}/>
        <meshStandardMaterial attach='material' map={blueTileTexture}  />
      </mesh>
    );
  }