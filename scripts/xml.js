const movieNameInput = document.getElementById('movieTitle');
const movieYearRelease = document.getElementById('yearRelease');
const submitButton = document.querySelector('.form__button');
const clearButton = document.querySelector('.form__button-clear');
const outputImg = document.querySelector('.output__img img');
const wrapper = document.querySelector('.wrapper');
const resultList = document.querySelector('.result-list');



const xhr = new XMLHttpRequest();



function submitRequest(event) {
    event.preventDefault();

    resultList.innerText = '';

    let s = `${movieNameInput.value}`;
    let y = `${movieYearRelease.value}`;
    const url = `https://www.omdbapi.com/?apikey=93d0c8d2&s=${s}&y=${y}`;

    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {

        let a = JSON.parse(xhr.responseText);

        let today = new Date();
        let year = today.getFullYear();

        console.log(a.Search);
        a.Search.forEach(e => createResultOfSearch(e.Title, e.Poster));
    };

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
}

submitButton.addEventListener('click', submitRequest);
