import { Physics, useSphere } from '@react-three/cannon';
import { useThree, useFrame, act } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useEffect, useRef } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { JUMP_FORCE } from '../consts';

export const Player = () => {

    const actions = useKeyboard()
    //console.log('actions', Object.entries(actions).filter(([k, v]) => v))

    const {camera} = useThree()

    const [ref, api] = useSphere(() => ({
        mass: 1, 
        type: 'Dynamic',
        position: [0, 1, 1]
    }))

    const pos = useRef([0,0,0])

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    const vel = useRef([0,0,0])

    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1] , pos.current[2]))
     
        switch(true){
            case actions.jump:
                if(Math.abs(vel.current[1]) < 0.03)
                    api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
            break;
        }
    })

    return(
      <mesh ref={ref}> 
      </mesh>
    );
  }