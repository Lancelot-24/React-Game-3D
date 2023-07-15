import { extend, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import ThaleahFat from '../assets/fonts/ThaleahFat_Medium.json';
import { playerHealth } from '../helperScripts/Helpers';
import { useEffect, useState } from 'react';

extend({ TextGeometry })


export const PlayerHealth = () => {
    
    const font = new FontLoader().parse(ThaleahFat);
    const [health, setHealth] = useState(playerHealth)


    useEffect(() => {
        if(playerHealth < 0)
        {
            alert("You died!")
            window.location.reload()
        }
    }, [playerHealth])

    useFrame(() => {
        setHealth(playerHealth.toString())
    })
    
    return (
        <mesh position= {[0.07,0.5,0.4]}>
            <textGeometry attach='geometry' args={[health.toString(), {font, size: 0.1, height: 0.05}]} />
            <meshStandardMaterial attach='material' color={'#80a320'} />
        </mesh>
    );
}