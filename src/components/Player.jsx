import { Physics, useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useEffect, useRef } from 'react';


export const Player = () => {
    const {camera} = useThree()

    const [ref, api] = useSphere(() => ({
        mass: 1, 
        type: 'Dynamic',
        position: [0, 5, 1]
    }))

    const pos = useRef([0,0,0])

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1] , pos.current[2]))
    })

    return(
      <mesh ref={ref}> 
      </mesh>
    );
  }