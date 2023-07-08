import { useBox } from '@react-three/cannon';
import {useFrame} from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

export const Enemy = () => {
    const model = useGLTF('./public/exe/scene.gltf')
    const animations = useAnimations(model.animations, model.scene)

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
        const action = animations.actions['ch049_ui_debut_loop']
        const action2 = animations.actions['ch049_skill_01_stand_mid']
        action.play()
       // action2.play()
        api.position.set(0, -0.935, -2)
    })

    return (
        <mesh ref={ref}>
        <primitive object={model.scene} scale={0.5} />
        </mesh>

    );
}