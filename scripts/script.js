const movieNameInput = document.getElementById('movieTitle');
const movieYearRelease = document.getElementById('yearRelease');
const submitButton = document.querySelector('.form__button');
const clearButton = document.querySelector('.form__button-clear');
const outputImg = document.querySelector('.output__img img');
const wrapper = document.querySelector('.wrapper');
const resultList = document.querySelector('.result-list');
// const method = 'GET';

function createResultOfSearch(title, sourse) {
    let resultItem = document.createElement('li');
    resultItem.classList.add('result-item');
    resultList.append(resultItem);

    let divTitle = document.createElement("div");
    divTitle.setAttribute('class', 'output__title');
    divTitle.innerText += `${title}`;

    resultItem.append(divTitle);
    let divImg = document.createElement("img");

    if (sourse == "N/A") {
        divImg.setAttribute('src', `./image/http-error-404-not-found.png`);
    } else {
        divImg.setAttribute('src', `${sourse}`);
    }

    resultItem.append(divImg);
}

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json();
    });
}

function submitRequest(e) {
    e.preventDefault();

    let s = `${movieNameInput.value}`;
    let y = `${movieYearRelease.value}`;
    const requestMovie = `https://www.omdbapi.com/?apikey=93d0c8d2&i=tt3896198&s=${s}&y=${y}`;

    sendRequest('GET', requestMovie).then(data => {

        JSON.stringify(data.Search.forEach(e => {
            createResultOfSearch(e.Title, e.Poster);
        }));
    }
    );
}

submitButton.addEventListener('click', submitRequest);

clearButton.addEventListener('click', function () {
    location.reload();
});



