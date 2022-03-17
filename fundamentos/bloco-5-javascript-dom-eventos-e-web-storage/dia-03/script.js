function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// ex 1

function createDays() {
    let daysList = [];
    for (let i = 1; i <= 31; i += 1) {
        daysList.push(i);
    }
    daysList.unshift(29, 30);
    return daysList;
}

function daysOfTheMonth() {
    const monthDays = createDays();
    const ulDaysTag = document.getElementById('days');

    for (let i = 0; i < monthDays.length; i += 1) {
        const day = monthDays[i];
        let eachDayTag = document.createElement('li');
        eachDayTag.innerText = day;
        eachDayTag.className = 'day';
        ulDaysTag.appendChild(eachDayTag);
    }
}
daysOfTheMonth();

function addHolidays() {
    const monthDays = document.getElementsByClassName('day');
    monthDays[25].className = 'day holiday';
    monthDays[26].className = 'day holiday';
    monthDays[32].className = 'day holiday';
}
addHolidays();

function addFriday() {
    const monthDays = document.getElementsByClassName('day');
    monthDays[5].className = 'day friday';
    monthDays[12].className = 'day friday';
    monthDays[19].className = 'day friday';
    monthDays[26].className = 'day holiday friday';
}
addFriday();

// ex 2
let btnName = "Feriados";
function createButton(param) {
    let container = document.getElementsByClassName('buttons-container')[0];
    let btn = document.createElement('button');
    btn.innerText = param;
    btn.setAttribute('id', "btn-holiday");
    container.appendChild(btn);
}
createButton(btnName);

// ex 3
let btn = document.getElementById('btn-holiday');
let feriados = document.getElementsByClassName('holiday');

function setHolidayColor(event) {
    for (let i = 0; i < feriados.length; i += 1) {
        const eachHoliday = feriados[i];
        eachHoliday.style.backgroundColor = '#F283B6';
        // event.target.style.backgroundColor = 'rgb(238,238,238)'
    }
}
btn.addEventListener('click', setHolidayColor)


// ex 4
let strg = 'Sexta-feira';
function createButton2(param) {
    let container = document.getElementsByClassName('buttons-container')[0];
    let btn = document.createElement('button');
    btn.innerText = param;
    btn.setAttribute('id', "btn-friday");
    container.appendChild(btn);
}
createButton2(strg);

// ex 5
let btn2 = document.getElementById('btn-friday');
let fridayDays = document.getElementsByClassName('friday');

function setFriday() {
    for (let i = 0; i < fridayDays.length; i += 1) {
        const eachFriday = fridayDays[i];
        eachFriday.innerText = 'SEXTOU!';
        eachFriday.style.color = '#15616D';
    }
}
btn2.addEventListener('click', setFriday);



