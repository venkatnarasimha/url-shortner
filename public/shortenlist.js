// /* eslint-disable no-console */
// window.onload = () => {
//     fetch('./api/urls')
//         .then((response) => response.json())
//         .then((urls) => {
//             urls.forEach((element) => {
//                 const longUrl = document.createTextNode(element.long_url);
//                 const sId = `${document.location.origin}/u/${element.id}`;
//                 const shortUrl = document.createTextNode(sId);
//                 const br = document.createElement('br');
//                 const shortu = document.querySelector('.shorturl');
//                 const long = document.querySelector('.longurl');
//                 shortu.appendChild(shortUrl);
//                 shortu.appendChild(br.cloneNode(true));
//                // shortu.appendChild(br.cloneNode(true));
//                 long.appendChild(longUrl);
//                 long.appendChild(br.cloneNode(true));
//                // long.appendChild(br.cloneNode(true));
//             });
//         });
// }
