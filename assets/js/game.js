const ROCK = 'piedra';
const PAPER = 'paper';
const SCIRSSOR = 'tijera';

const tie = 0;
const win = 1;
const lost = 2;

let victorias = 0;
let derrotas = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const resultText = document.getElementById('result__text--change');
const userImg = document.getElementById('user-img');
const machinImg = document.getElementById('machine-img');


function play(userOption){
    userImg.src = `assets/img/${userOption}.png`;

    resultText.innerHTML = '¡La PC esta Eligiendo!';

    let interval = setInterval(() => {
        let machinOption = calcMachin();
        machinImg.src = `assets/img/${machinOption}.png`;
    }, 200);

    setTimeout(function(){
        clearInterval(interval);
        let machinOption = calcMachin();
        let result = calcResult(userOption, machinOption);

        machinImg.src = `assets/img/${machinOption}.png`;


        switch(result){
            case tie:
                resultText.innerHTML = '¡Tenemos un empate!';
            break;
            case win:
                resultText.innerHTML  = '¡Tu Ganas!';
            break;
            case lost:
                resultText.innerHTML = '¡Tu Pierdes!';
            break;
        }
    }, 1000);
}

function calcMachin(){
    let number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCIRSSOR;
    }
}

function calcResult(userOption,machinOption){
    if(userOption == machinOption){
        return tie;
    }
    else if(userOption == ROCK){
        if(machinOption == PAPER) return lost;
        if(machinOption == SCIRSSOR) return win;
    }
    else if(userOption == PAPER){
        if(machinOption == ROCK) return win;
        if(machinOption == SCIRSSOR) return lost;
    }
    else if(userOption == SCIRSSOR){
        if(machinOption == ROCK) return lost;
        if(machinOption == PAPER) return win;
    }
}

rockBtn.addEventListener('click', ()=>{
    play(ROCK);
});
paperBtn.addEventListener('click', ()=>{
    play(PAPER);
});
scissorBtn.addEventListener('click', ()=>{
    play(SCIRSSOR);
});

/*---------Page of Results-----------*/

