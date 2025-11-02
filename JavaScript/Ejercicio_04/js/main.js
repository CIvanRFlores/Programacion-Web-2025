export let homework = document.getElementById('homework-input');
let addHW = document.getElementById('add-button'); 

import { insertHomework } from "./homeworks.js";

addHW.addEventListener('click', function(){
    if(homework.value != ''){
        insertHomework(homework);
    }
    else{
        alert("Ingrese una descripcion a la tarea")
    }

})

homework.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        if(homework.value != '' && document.activeElement === homework){
            insertHomework(homework);
        }
        else{
            alert("Ingrese una descripcion a la tarea");
        }
    }
})