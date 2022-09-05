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


function submitRequest(e) {
    e.preventDefault();

    let t = `${movieNameInput.value}`;
    let y = `${movieYearRelease.value}`;
    const requestMovie = `https://www.omdbapi.com/?i=tt3896198&apikey=93d0c8d2&t=${t}&y=${y}`;
    // const poster = `http://img.omdbapi.com/?i=tt3896198&apikey=93d0c8d2&t=${t}`;

    sendRequest('GET', requestMovie).then(data => {
        // fetch(requestMovie).then(resp =>
        //     resp.json()).then(data => {
        outputTitle.innerText = JSON.stringify(data['Title']);
        outputImg.src = data['Poster'];

        responseObject.push(data);

        console.log(data);
    });
    // sendRequest('GET', poster).then(data => output.innerText = JSON.stringify(data));
}

submitButton.addEventListener('click', submitRequest);
