export let playerPos = [0, 0]
export let enemyPos = [0, -3]

export let playerJumped = false

export let playerHealth = 100
export let enemyHealth = 100

//Set player and enemy position variables
export function SetPlayerPos(pos) {
    playerPos = pos
}
export function SetEnemyPos(pos) {
    enemyPos = pos
}

//Adjust player and enemy health variables
export function AdjustPlayerHealth(value) {
    playerHealth += value
}
export function AdjustEnemyHealth(value) {
    enemyHealth += value
}

//Check if the player has jumped
export function SetPlayerJumped(bool) {
    playerJumped = bool
}

//Check is an entity is about to move to a valid position
export function CheckValidMove(position, gridPositions) {
    const isValid = gridPositions.some((pos) => 
    JSON.stringify(pos) === (JSON.stringify(position)))
    return isValid
}

//Check if an entity got hit
export function CheckHitPos(position, targetPos) {
    return JSON.stringify(position) === JSON.stringify(targetPos)
}

//return a random number between min and max
export function RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
//enenmy action states
export const enemyStates = () => RandomRange(0, 2)
