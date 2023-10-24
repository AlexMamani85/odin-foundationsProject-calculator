let display = document.querySelector('#display');

document.querySelector('#uno').addEventListener('click', function() {
    display.textContent += '1';
});

document.querySelector('#dos').addEventListener('click', function() {
    display.textContent += '2';
});

document.querySelector('#tres').addEventListener('click', function() {
    display.textContent += '3';
});

document.querySelector('#cuatro').addEventListener('click', function() {
    display.textContent += '4';
});

document.querySelector('#cinco').addEventListener('click', function() {
    display.textContent += '5';
});

document.querySelector('#seis').addEventListener('click', function() {
    display.textContent += '6';
});

document.querySelector('#siete').addEventListener('click', function() {
    display.textContent += '7';
});

document.querySelector('#ocho').addEventListener('click', function() {
    display.textContent += '8';
});

document.querySelector('#nueve').addEventListener('click', function() {
    display.textContent += '9';
});

document.querySelector('#cero').addEventListener('click', function() {
    display.textContent += '0';
});

document.querySelector('#mas').addEventListener('click', function() {
    display.textContent += '+';
});

document.querySelector('#menos').addEventListener('click', function() {
    display.textContent += '-';
});

document.querySelector('#entre').addEventListener('click', function() {
    display.textContent += '/';
});

document.querySelector('#por').addEventListener('click', function() {
    display.textContent += '*';
});

document.querySelector('#igual').addEventListener('click', function() {
    display.textContent = eval(display.textContent);
});

document.querySelector('#clear').addEventListener('click', function() {
    display.textContent = '';
});

document.querySelector('#back').addEventListener('click', function() {
    display.textContent = display.textContent.slice(0,-1 );
});
