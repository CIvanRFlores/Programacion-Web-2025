let record = document.getElementById('record');

export function cleanScreen(screen){
    screen.value = '|';
    return {screenOp: '', operational: null};
}

export function obtainResult(screen, screenOp, operational){
    let result;
    let [number1, number2] = screenOp.split(operational);
    number1 = Number.parseInt(number1);
    number2 = Number.parseInt(number2);

    if(!isNaN(number1) && isNaN(number2)){
        result = number1;
    }
    else if(isNaN(number1) && !isNaN(number2)){
        result = number2
    }
    else{
        switch(operational){
            case '+' : 
                result = number1 + number2;
                screen.value = result;
                record.value += "\n" + screenOp + " = " + result;
                break;
            case '-' : 
                result = number1 - number2;
                screen.value = result;
                record.value += "\n" + screenOp + " = " + result;
                break;
            case '*' : 
                result = number1 * number2;
                screen.value = result;
                record.value += "\n" + screenOp + " = " + result;
                break;
            case '/' : 
                if(number2 === 0){
                    result = '';
                    screen.value = 'Error';
                    break;
                }
                else{
                    result = number1 / number2;
                    screen.value = result;
                    record.value += "\n" + screenOp + " = " + result;   
                    break;
                }
        }
    }
    return {screenOp: String(result), operational: null};
}