import { useBox } from '@react-three/cannon';
import {useFrame} from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { EnemyEXE } from './EnemyModel';
import { CheckValidMove, RandomRange, SetEnemyPos, enemyStates } from '../Helpers';
import { EnemyHealth } from './EnemyHealth';
import { enemyGridPositions } from '../Consts';



export const Enemy = () => {
    
    const [moved, setMoved] = useState(false)
    const [moveTimer, setMoveTimer] = useState(0)

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
        {moved && setMoveTimer(moveTimer + 1)}
        {moveTimer > 120 && setMoveTimer(0)}
        {moveTimer > 120 && setMoved(false)}

       //enenmy movement
        if(!moved && enemyStates() === 0)
        {
            let x = RandomRange(-1, 2)
            let z = RandomRange(-1, 2)
            if(CheckValidMove([x + pos.current[0], z + pos.current[2]], enemyGridPositions ))
            {
                api.position.set(x + pos.current[0], -0.95, z + pos.current[2])
                SetEnemyPos([x + pos.current[0], z + pos.current[2]])
                setMoved(true)
                
            }
        }
        
    })

    return (
        <mesh ref={ref} >
        <EnemyEXE />
        <EnemyHealth/>
        </mesh>

    );
}