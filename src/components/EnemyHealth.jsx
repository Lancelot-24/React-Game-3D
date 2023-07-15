import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import ThaleahFat from '../assets/fonts/ThaleahFat_Medium.json';
import { enemyHealth } from '../helperScripts/Helpers';
import { useEffect } from 'react';

extend({ TextGeometry })


export const EnemyHealth = () => {
    
    const font = new FontLoader().parse(ThaleahFat);

    useEffect(() => {
        if(enemyHealth < 0)
        {
            alert("You Win!")
            window.location.reload()
        }
    }, [enemyHealth])

    return (
        <mesh position= {[-0.4,1.5,0]}>
            <textGeometry attach='geometry' args={[enemyHealth.toString(), {font, size: 0.5, height: 0.1}]} />
            <meshStandardMaterial attach='material' color={'white'} />
        </mesh>
    );
}