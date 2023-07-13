import { useBox } from '@react-three/cannon';
import {useFrame} from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import { MeshPhysicalMaterial } from 'three';
import { EnemyEXE } from './EnemyModel';



export const Enemy = () => {

    //enemy physics setup
    const [ref, api] = useBox(() => ({
        mass: 1,
        type: 'Static',
        position: [0, 0, -3]
    }))

    //player velocity and position hooks
    const pos = useRef([0, 0, 0])

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])



    //Called every frame
    useFrame(() => {
        api.position.set(0, -0.935, -2)
    })

    return (
        <mesh ref={ref} >
        <EnemyEXE />
        </mesh>

    );
}