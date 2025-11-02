let screen = document.getElementById('screen');
let keys = document.querySelectorAll('button');

let screenOp = '';

let operational;

import { cleanScreen } from "./ui.js";
import { obtainResult } from "./ui.js";

keys.forEach(key =>{
    
    key.addEventListener('click', function(){
        let op = this.textContent;

        if(op === 'C'){
            let value = cleanScreen(screen);
            screenOp = value.screenOp;
            operational = value.operational;
            return;
        }
        else if(op === '='){
            let value = obtainResult(screen, screenOp, operational);
            screenOp = value.screenOp;
            operational = value.operational;
        }
        else{
            if(isNaN(Number(op))){                        
                operational = op;
            }
            screenOp += op;
            screen.value = screenOp;
            screen.scrollLeft = screen.scrollWidth;
        }
    })

})

document.addEventListener('keydown', function(e){

    if(e.key === 'Backspace'){
            let value = cleanScreen(screen);
            screenOp = value.screenOp;
            operational = value.operational;
            return;
        }
    else if(e.key === 'Enter'){
        e.preventDefault();

        let value = obtainResult(screen, screenOp, operational);
        screenOp = value.screenOp;
        operational = value.operational;
    }

    else{
        if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
            operational = e.key;
            screenOp += e.key;
            screen.value = screenOp;
            screen.scrollLeft = screen.scrollWidth;
        }
        else if(!isNaN(e.key)){
            screenOp += e.key;
            screen.value = screenOp;
            screen.scrollLeft = screen.scrollWidth;
        }
    }
})