import { validarTarea, agregarTareaDOM, mostrarTareas } from "./ui.js";
import { crearTarea } from "./tareas.js";

const input = document.getElementById('texto');
const botonAgregar = document.getElementById('agregar');

input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        procesarNuevaTarea();
    }
});

botonAgregar.addEventListener('click', (e) => {
    procesarNuevaTarea();
})

function procesarNuevaTarea() {
    if(validarTarea()) {
        const tarea = crearTarea(input.value.trim());
        agregarTareaDOM(tarea);
    }
}

window.onload = () => {
    mostrarTareas();
}