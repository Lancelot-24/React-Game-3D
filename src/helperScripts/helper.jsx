import { gridPositions } from "./consts.jsx"

export function CheckValidMove(position) {
    //for(let i = 0; i < gridPositions.length; i++){
       const isValid = gridPositions.some((pos) => 
       JSON.stringify(pos) === (JSON.stringify(position)))
    return isValid
}



