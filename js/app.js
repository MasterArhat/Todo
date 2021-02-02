console.log('Create todo');
setTimeout(() => console.log('Chaaaarge!'), 3000);

let input = document.querySelector('#input');
let mainBtn = document.querySelector('#main__button');
let result = document.querySelector('#result');
let total = document.querySelector('#total__cases');
let totalCounter = 0;


mainBtn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDeleteCases(input.value);
    input.value = '';
});

function createDeleteCases(value) {
    totalCounter++;

    let li = document.createElement('li');
    li.textContent = value;

    let btn = document.createElement('button');
    btn.textContent = 'Delete';
    li.appendChild(btn)
    

    btn.addEventListener('click', (e) => {
        totalCounter--;
        total.textContent = parseInt(totalCounter);
        result.removeChild(li);
        
    })

    total.textContent = parseInt(totalCounter);

    result.appendChild(li);
}

