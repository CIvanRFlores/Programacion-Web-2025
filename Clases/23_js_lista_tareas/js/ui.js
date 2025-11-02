import { cambiarTerminada as cambiar, eliminarTarea, getTareas} from "./tareas.js";

const contenedorTareas = document.getElementById('tareas');
const mensajeError = document.getElementById('error');
const input = document.getElementById('texto');

export function validarTarea() {
    //Elimina espacios en blanco al inicio y final del texto
    let texto = input.value.trim();

    if(!texto) {
        mensajeError.style.display = 'inline-block';
        input.focus();
        return false;
    }

    mensajeError.style.display = 'none';
    return true;
}


export function agregarTareaDOM(tarea) {
    let divTarea = document.createElement('div');
    divTarea.classList.add('tarea');
    divTarea.id = tarea.id;

    let parrafoTexto = document.createElement('p');
    parrafoTexto.textContent = tarea.texto;

    let checkbox = crearCheckbox(parrafoTexto, tarea);

    divTarea.append(checkbox);
    divTarea.append(parrafoTexto);

    let botonEliminar = crearBotonEliminar();
    divTarea.append(botonEliminar);

    input.value = '';

    contenedorTareas.append(divTarea);

}

function crearBotonEliminar() {
    let botonEliminar = document.createElement('button');
    botonEliminar.classList.add('eliminar');
    botonEliminar.textContent = 'Eliminar';

    let icon = document.createElement('i');
    icon.classList.add('material-symbols-outlined');
    icon.textContent = 'delete';
    botonEliminar.prepend(icon);

    botonEliminar.addEventListener('click', (e) =>  {
        e.currentTarget.parentElement.remove();
        eliminarTarea(e.currentTarget.parentElement.id);
    })

    return botonEliminar;
}

function crearCheckbox(parrafoTexto, tarea) {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.terminada;

    if(checkbox.checked) {
        parrafoTexto.style.textDecoration = 'line-through';
    }

    checkbox.addEventListener('change', (e) => {
        cambiar(e.target.parentElement.id, e.target.checked);

        let parrafo = e.target.parentElement.getElementsByTagName('p')[0];
        if(parrafo) {
            parrafo.style.textDecoration = (e.target.checked) ? 'line-through' : 'none';
        }
    });

    return checkbox;
}

export function mostrarTareas() {
    contenedorTareas.innerHTML = '';
    let tareas = getTareas();
    tareas.forEach((tarea) => {
        agregarTareaDOM(tarea);
    });
}