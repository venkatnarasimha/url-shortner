/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const inputValue = document.querySelector('.input');
const outputValue = document.querySelector('.output');
const copy = document.querySelector('.copy');
const but = document.querySelector('.shortens');
const mylist = document.querySelector('.myurl');
const short = document.querySelector('.shorturl');
function logic() {
    fetch('./api/urls', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ long_url: inputValue.value }),
    })
        .then((response) => response.json())
        .then((json) => {
            // outputValue.style.display='inline-block';
            document.querySelector('.output').value = `${window.location.origin}/${json.id}`;
        })
        .catch((err) => console.log(`err :${err}`));
}

function displayURLS() {
    fetch('./api/urls')
        .then((response) => response.json())
        .then((urls) => {
            urls.forEach((element) => {
                console.log(element.long_url);
                const longUrl = document.createTextNode(element.long_url);
                console.log(longUrl);
                const shortUrl = document.createTextNode(element.id);
                const br = document.createElement('br');
                const shortu = document.querySelector('.shorturl');
                const long = document.querySelector('.longurl');
                shortu.appendChild(shortUrl);
                shortu.appendChild(br.cloneNode(true));
                long.appendChild(longUrl);
                long.appendChild(br.cloneNode(true));
            });
        });
}

but.addEventListener('click', () => {
    console.log('clicked');
    logic();
    // displayURLS();
});

mylist.addEventListener('click', () => {
    displayURLS();
});

copy.addEventListener('click', () => {
    const cop = document.querySelector('.output');
    console.log('clicked', cop);
    cop.focus();
    cop.select();
    document.execCommand('copy');
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unseccessful';
        console.log(msg);
    } catch (err) {
        console.log('oops');
    }
});
