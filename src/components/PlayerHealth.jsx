import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import ThaleahFat from '../assets/fonts/ThaleahFat_Medium.json';
import { playerHealth } from '../helperScripts/Helpers';
import { useEffect } from 'react';

extend({ TextGeometry })


export const PlayerHealth = () => {
    
    const font = new FontLoader().parse(ThaleahFat);

    useEffect(() => {
        if(playerHealth < 0)
        {
            alert("You died!")
            window.location.reload()
        }
    }, [playerHealth])

    return (
        <mesh position= {[0.07,0.5,0.4]}>
            <textGeometry attach='geometry' args={[playerHealth.toString(), {font, size: 0.1, height: 0.05}]} />
            <meshStandardMaterial attach='material' color={'#80a320'} />
        </mesh>
    );
}