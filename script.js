//console.log('Hello, world');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.placeholder);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'Otro título <br> DOM';
h1.innerText = 'Otro título <br> DOM';

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = '456';

// console.log(document.createElement('img'));
const img = document.createElement('img');

img.setAttribute('src', 'https://yt3.ggpht.com/yti/AJo0G0nRcycDXiNl0zBOHlkBrOB2VY83AaJL0awMHmtG=s88-c-k-c0x00ffffff-no-rj-mo'); 

console.log(img);

pid.innerHTML = '';
pid.append(img);