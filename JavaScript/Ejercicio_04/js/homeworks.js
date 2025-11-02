let list = document.getElementById('list');
let deleteAll = document.getElementById('delete-all')
let homeworks = [];

export function insertHomework(homework){
    let DescHW = homework.value;

    const newHW = document.createElement('li');

    const inputHW = document.createElement('input');
    inputHW.type = 'checkbox';
    inputHW.classList.add('checkbox-size');
    inputHW.addEventListener('change', function(e){
        if(inputHW.checked){
            labelHW.classList.add('homework-complete');
        }
        else{
            labelHW.classList.remove('homework-complete');
        }

    })

    const labelHW = document.createElement('label');
    labelHW.textContent = DescHW;

    const deleteHW = document.createElement('button');
    deleteHW.textContent = 'Eliminar';
    deleteHW.addEventListener('click', function(){
        newHW.remove();
        division.remove();
        homeworks = homeworks.filter(hw => hw != DescHW);
        localStorage.setItem('homeworks', JSON.stringify(homeworks));
    })

    newHW.append(inputHW, labelHW, deleteHW);
    newHW.classList = 'homework-design'

    const division = document.createElement('hr');

    list.appendChild(newHW);
    list.appendChild(division);

    homeworks.push(DescHW);
    localStorage.setItem('homeworks', JSON.stringify(homeworks));

    homework.value = '';
}

deleteAll.addEventListener('click', function(){
    if(list.children.length != 0){
        list.innerHTML = '';

        homeworks = [];
        localStorage.setItem('homeworks', JSON.stringify(homeworks));
    }
    else{
        alert('La lista se encuentra vacia');
    }
})