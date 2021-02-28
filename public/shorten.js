/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const inputValue = document.querySelector('.input');
const outputValue = document.querySelector('.output');
const copy = document.querySelector('.copy');
const but = document.querySelector('.shortens');
const myurls = document.querySelector('.mybut');
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
            document.querySelector('.output').value = `${document.location.origin}/${json.id}`;
        })
        .catch((err) => console.log(`err :${err}`));
}

function displayURLS() {
    fetch('./api/urls')
        .then((response) => response.json())
        .then((urls) => {
            const myurl = document.querySelector('.myurls');
            myurl.style.display = 'block';
            const parent = document.createElement('div');
            urls.forEach((element) => {
                const shortId = `${document.location.origin}/${element.id}`;
                const child = document.createElement('div');
                child.innerText = `long-url: ${element.long_url}\n Shorty : ${shortId} \n\n`;
                parent.appendChild(child);
            });

            myurl.innerHTML = parent.innerHTML;
        });
}

but.addEventListener('click', () => {
    console.log('clicked');
    logic();
    // displayURLS();
});

myurls.addEventListener('click', () => {
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
