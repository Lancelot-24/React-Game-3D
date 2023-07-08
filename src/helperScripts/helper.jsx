import { gridPositions } from "./consts.jsx"

export function CheckValidMove(position) {
    for(let i = 0; i < gridPositions.length; i++){
        if(JSON.stringify(gridPositions[i]) === (JSON.stringify(position)))
            return true
    }
    return false
}



