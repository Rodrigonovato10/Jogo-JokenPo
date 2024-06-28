


const result = document.querySelector('.result')
const youScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
let borde = document.querySelectorAll('.buttons').values

let humanScoreNumber = 0
let machineScoreNumber = 0

console.log("borde")

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNuber = Math.floor(Math.random() * 3)

    return choices[randomNuber]
    

}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"

    } else if(
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ){
        humanScoreNumber++
        youScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }
}