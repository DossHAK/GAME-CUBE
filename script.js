function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cube = parseInt(prompt ('Выберите количество кубиков которое хотите уничтожить:\n1 - 10\n2 - 50\n3 - 100'));
    switch (cube) {
        case 1:
            cube = 10;
            break;
            case 2:
                cube = 50;
                break;
                case 3:
                    cube = 100;
                    break;
        default:
            break; 
    }

let timer = parseInt(prompt ('Выберите время за которое вы хотите уничтожить все кубики:\n1 - 1\n2 - 10\n3 - 30'));
    switch (timer) {
        case 1:
            timer = 1;
            break;
            case 2:
                timer = 10;
                break;
                case 3:
                    timer = 30;
                    break;
        default:
            break;
    }

let body = document.querySelector('body');

for (let i = 0; i < cube; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    div.className = 'box';
    div.innerText = i + 1;
    div.style.left = `${random(0,window.innerWidth-101)}px`;
    div.style.top = `${random(100,window.innerHeight-101)}px`;
    body.appendChild(div);
    
};

let boxes = document.querySelectorAll('.box');
let left = document.querySelector('h1');

for (const box of boxes) {
    box.addEventListener('click', () => {

        event.target.remove();
    });
};

setInterval(() => {
    let boxes = document.querySelectorAll('.box');
    left.innerText = 'Left : ' + boxes.length
    for (const box of boxes) {
    box.style.left = `${random(0,window.innerWidth-101)}px`;
    box.style.top = `${random(100,window.innerHeight-101)}px`;
    }       
}, 1000);

let min = timer;
let sec = 0;
let ml = 0;

let time = document.querySelector('.time');

let id = setInterval(() => {
    checkTime();
    let minStr = (min > 9) ? min : `0${min}`;
    let secStr = (sec > 9) ? sec : `0${sec}`;
    let mlStr = (ml > 9) ? ml : `0${ml}`;

    time.innerText = minStr + ':' + secStr + ':' + mlStr;

}, 10);

function checkTime(){
    let boxes = document.querySelectorAll('.box');
    if (boxes.length == 0) {
        clearInterval(id);
        alert('Поздравляю, Вы выиграли!');
    }
    ml--;
    if (ml <= 0) {
        if (sec > 0) {
            sec--;
            ml += 60;
        } else {
            if (ml == 0 && sec == 0 && min == 0) {
                clearInterval(id);
                alert('Время вышло, Вы проиграли!');
            } else {
                min--;
                sec += 60;
             } 
        }
    }
}


