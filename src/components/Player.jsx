import { Physics, useSphere } from '@react-three/cannon';
import { useThree, useFrame, act } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useEffect, useRef } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { JUMP_FORCE } from '../helperScripts/consts';
import { CheckValidMove } from '../helperScripts/helper';

export const Player = () => {
    let hasMoved;
    //player actions setup
    const { moveBackward, moveForward, moveRight, moveLeft, jump, attack } = useKeyboard()

    //player camera setup
    const { camera } = useThree()

    //player physics setup
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }))

    //player velocity and position hooks
    const pos = useRef([0, 0, 0])

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
        hasMoved = false;
    }, [api.position])

    const vel = useRef([0, 0, 0])

    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])
    


    //Called every frame
    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        const direction = new Vector3()

        const frontVector = new Vector3
            (
                0,
                0,
                (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
            )

        const sideVector = new Vector3
            (
                (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
                0,
                0
            )

        direction
            .subVectors(frontVector, sideVector)
            .applyEuler(camera.rotation)

        console.log([Math.round(pos.current[0]) + Math.round(direction.x), Math.round(pos.current[2] + direction.z)])

        if(!hasMoved && CheckValidMove([Math.round(pos.current[0]) + Math.round(direction.x), Math.round(pos.current[2] + Math.round(direction.z))]))
        {
            api.position.set(pos.current[0] + Math.round(direction.x), pos.current[1], pos.current[2] + Math.round(direction.z))
            hasMoved = true;
        }    

        switch (true) {
            case jump:
                if (Math.abs(vel.current[1]) < 0.03)
                    api.velocity.set(0, JUMP_FORCE, 0)
                break;
        }
    })

    return (
        <mesh ref={ref}>
        </mesh>

    );
}