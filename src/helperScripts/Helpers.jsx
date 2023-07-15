export let playerPos = [0, 0]
export let enemyPos = [0, -3]

export let playerJumped = false

export let playerHealth = 100
export let enemyHealth = 100

export function SetPlayerPos(pos) {
    playerPos = pos
}
export function SetEnemyPos(pos) {
    enemyPos = pos
}

export function AdjustPlayerHealth(value) {
    playerHealth += value
}
export function AdjustEnemyHealth(value) {
    enemyHealth += value
}

export function SetPlayerJumped(bool) {
    playerJumped = bool
}

export function CheckValidMove(position, gridPositions) {
    const isValid = gridPositions.some((pos) => 
    JSON.stringify(pos) === (JSON.stringify(position)))
    return isValid
}

export function CheckHitPos(position, targetPos) {
    return JSON.stringify(position) === JSON.stringify(targetPos)
}

export function RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

export const enemyStates = () => RandomRange(0, 2)