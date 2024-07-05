


const result = document.querySelector('.result')
const youScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
let seletor = document.getElementById ("rock")
let seletor1 = document.getElementById ("paper")
let seletor2 = document.getElementById ("scissors")


let humanScoreNumber = 0
let machineScoreNumber = 0


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
   
    if(machine === 'rock'){
        seletor.style.borderColor = "#FF0000";
    }else{  seletor.style.borderColor = "#000";}

    if(machine === 'paper'){
        seletor1.style.borderColor = "#FF0000";
    }else{  seletor1.style.borderColor = "#000";}

    if(machine === 'scissors'){
        seletor2.style.borderColor = "#FF0000";
    }else{  seletor2.style.borderColor = "#000";}

}  