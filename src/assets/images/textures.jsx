import { TextureLoader } from 'three';
import {
    blueTile,
    redTile
} from './images'

const redTileTexture = new TextureLoader().load(redTile);
const blueTileTexture = new TextureLoader().load(blueTile);

export {
    redTileTexture,
    blueTileTexture
}
