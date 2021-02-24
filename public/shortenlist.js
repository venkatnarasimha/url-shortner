/* eslint-disable no-console */
window.onload = () => {
    fetch('./api/urls')
        .then((response) => response.json())
        .then((urls) => {
            urls.forEach((element) => {
                console.log(element.long_url);
                const longUrl = document.createTextNode(element.long_url);
                console.log(longUrl);
                const shortUrl = document.createTextNode(element.id);
                const str = `${window.location.origin}/${shortUrl}`;
                console.log(str);
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