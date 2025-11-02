import {actualizarLocalStorage, obtenerTareas } from './storage.js';

let tareas = obtenerTareas();

export function getTareas() {
    return tareas;
}

export function cambiarTerminada(id, terminada) {
    let marcarTerminada = tareas.find((tarea) => tarea.id == id);
    marcarTerminada.terminada = terminada;
    actualizarLocalStorage(tareas);
}

export function eliminarTarea(id) {
    tareas = tareas.filter((tarea) => tarea.id != id);
    actualizarLocalStorage(tareas);
}

export function crearTarea(texto) {
    const tarea = {
        id: crypto.randomUUID(),
        texto: texto,
        terminada : false
    };
    tareas.push(tarea);
    actualizarLocalStorage(tareas);

    return tarea;
}