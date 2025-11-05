import { getBreed } from "./api.js";
import { showActualBreed } from "./ui.js";

//Se obtiene el id de la raza por medio de la URL
const breedId = new URLSearchParams(window.location.search).get('id');
console.log(breedId);

async function loadCat(id) {
    const cat = await getBreed(id);
    showActualBreed(cat.cat);
}

loadCat(breedId);

window.addEventListener('DOMContentLoaded', () => loadCat(breedId));