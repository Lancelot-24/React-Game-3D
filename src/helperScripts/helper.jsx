
export function CheckValidMove(position, gridPositions) {
    const isValid = gridPositions.some((pos) => 
    JSON.stringify(pos) === (JSON.stringify(position)))
    return isValid
}

export function RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

export const enemyStates = () => RandomRange(0, 2)