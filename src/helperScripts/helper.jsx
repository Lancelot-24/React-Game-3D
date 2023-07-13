import { gridPositions } from "./consts.jsx"

export function CheckValidMove(position) {
    const isValid = gridPositions.some((pos) => 
    JSON.stringify(pos) === (JSON.stringify(position)))
    return isValid
}



