const catGrid = document.getElementById('catGrid');
const catContent = document.getElementById('catContent');

export function showBreeds(breeds){
    catGrid.innerHTML = ''; // Limpiar cuadrícula
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperament not available'}</p>
            <a class="see-details-button" href="details.html?id=${breed.reference_image_id}" target="_blank">See details`;
        catGrid.appendChild(catCard);
    });
}

export function updateButtons(currentPage, pageCount){
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = pageCount <= currentPage;
}

export function showActualBreed(cat){
    catContent.innerHTML = '';
    const catInfo = document.createElement('div');
    catInfo.classList.add('cat-info');
    const breed = cat.breeds?.[0];
    catInfo.innerHTML = `
        <img src="${cat.url || 'https://via.placeholder.com/150'}" alt="${breed.name || 'Uknown'}">
        <div>
        <hr>
        <h3>Name : <span>${breed.name || 'Name not available'}<span/><h3/>
        <hr>
        <h3>Temperament : <span>${breed.temperament || 'Temperament not available'}<span/><h3/>
        <hr>
        <p>Origin : ${breed.origin || 'Origin not available'}<p/>
        <hr>
        <h3>Description : <span>${breed.description || 'Description not available'}<span/><h3/>
        <hr>
        <h3>Affection level : <span>${breed.affection_level || 'Level not available'}<span/><h3/>
        <hr>
        <h3>Child friendly : <span>${breed.child_friendly || 'Data not available'}<span/><h3/>
        <hr>
        <h3>Dog friendly : <span>${breed.dog_friendly || 'Data not available'}<span/><h3/>
        <hr>
        <h3>Energy level : <span>${breed.energy_level || 'Level not available'}<span/><h3/>
        <hr>
        <h3>Intelligence : <span>${breed.intelligence || 'Data not available'}<span/><h3/>
        <hr>
        <h3>Social needs : <span>${breed.social_needs || 'Data not available'}<span/><h3/>
        <hr>
        <a href="${breed.wikipedia_url}">More info<a/>
        <div/>`;
    catContent.appendChild(catInfo);
}