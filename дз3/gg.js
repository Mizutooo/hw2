let btnRed = document.querySelector('#btnRed')
let btnYellow = document.querySelector('#btnYellow')
let btnGreen = document.querySelector('#btnGreen')
let btnReset = document.querySelector('#btnReset')

let body = document.body;

btnRed.addEventListener('click', () => {
    setTimeout(() => {body.style.backgroundColor = 'red';}, 1000)
    console.log('print it red');
})

btnYellow.addEventListener('click', () => {
    setTimeout(() => {body.style.backgroundColor = 'yellow';}, 1000)
    console.log('print it yellow');
})

btnGreen.addEventListener('click', () => {
    setTimeout(() => {body.style.backgroundColor = 'green';}, 1000)
    console.log('print it green');
})

btnReset.addEventListener('click', () => {
    setTimeout(() => {body.style.backgroundColor = 'white';}, 0)
})