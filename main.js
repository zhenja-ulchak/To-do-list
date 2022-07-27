const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;
// add event


btn.addEventListener('click', (e) => {
    // result.innerHTML += `<li>${input.value}</li>`;
    if (input.value === '') {
        return
    }
    // функція создания
    createDelElem(input.value)
        // після стераєм значення
    input.value = '';
});

function createDelElem(params) {
    console.log(params);
    i++
    // создаєм елементи
    const li = document.createElement('li');
    const btn = document.createElement('button');
    // добавляєм клас
    li.className = 'li'
        // передаєм
    li.textContent = params

    btn.className = 'btn'
    btn.textContent = 'delete'
        //  добавляєм в лі в кінець дочерніх елементів
    li.appendChild(btn);

    btn.addEventListener('click', (e) => {
        console.log(li);
        i--
        total.textContent = i;
        result.removeChild(li);

    })
    li.addEventListener('click', (e) => {
        // добавляєм класс
        li.classList.toggle('li__active')
    })

    total.textContent = i;
    result.appendChild(li);
}







//