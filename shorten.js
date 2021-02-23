/* eslint-disable no-console */
const inputValue = document.querySelector('.input');
// const outputValue = document.querySelector('.output');
const but = document.querySelector('.but');

function logic() {
    fetch('http://localhost:3000/api/urls', {
        method: 'post',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ long_url: inputValue.value }),
    })
        .then((response) => {
            console.log(response.json());
            response.json();
        })
        .then((json) => {
            console.log('reached');
            document.querySelector('.output').value = json.id;
        })
        .catch((err) => console.log(`err :${err}`));
}

but.addEventListener('click', () => {
    console.log('clicked');
    logic();
});
