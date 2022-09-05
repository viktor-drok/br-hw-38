const movieNameInput = document.getElementById('movieTitle');
const movieYearRelease = document.getElementById('yearRelease');
const submitButton = document.querySelector('.form__button');
const outputTitle = document.querySelector('.output__title');
const outputImg = document.querySelector('.output__img img');
// const method = 'GET';

const responseObject = [];

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json();
    });
}


function submitRequest() {
    let t = `${movieNameInput.value}`;
    let y = `${movieYearRelease.value}`;
    const requestMovie = `http://www.omdbapi.com/?i=tt3896198&apikey=93d0c8d2&t=${t}&y=${y}`;
    const poster = `http://img.omdbapi.com/?i=tt3896198&apikey=93d0c8d2&t=${t}`;
    sendRequest('GET', requestMovie).then(data => {
        outputTitle.innerText = JSON.stringify(data);
        outputImg.src = poster;
        responseObject.push(data);

        console.log(Object.values(data)[13]);
    });
    // sendRequest('GET', poster).then(data => output.innerText = JSON.stringify(data));
}

submitButton.addEventListener('click', submitRequest);