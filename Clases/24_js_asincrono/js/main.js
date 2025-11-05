import { getBreeds } from './api.js';
import { showBreeds, updateButtons } from './ui.js';

const numberPage = document.getElementById('pageNumber');
const quantityBreeds = document.getElementById('quantity');
let currentPage = 1;
let limit = 10;
numberPage.textContent = currentPage;
quantityBreeds.textContent = 'Show ' + limit;

async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
}

document.getElementById('prevPage').addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--;
        loadBreeds(currentPage);
        numberPage.textContent = currentPage;
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    loadBreeds(currentPage);
    numberPage.textContent = currentPage;
})

quantityBreeds.addEventListener('click', () =>{
    if(limit == 10){
        limit = 5;
    }
    else{
        limit = 10
    }
    loadBreeds(currentPage);
    quantityBreeds.textContent = 'Show ' + limit;
})

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));