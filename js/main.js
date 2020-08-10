const info = document.querySelector('.info');
const personName = document.querySelector('.name');
const personCardNumb = document.querySelector('.card');
const personCardDate = document.querySelector('.date span');
const personCardAmount = document.querySelector('.amount span');
const personCardSelect = document.querySelector('.select');
const person_block = document.querySelector('.person_block');

menu_home.classList.add('active');

personName.textContent = person.name;

function optionRenderCard(out) {
    let options = '';
    person.cards.map((item, inx) => {
        return options += `<option value=${inx}>${item.category} ${cardNumb(item.cardNum)}</option>`;
    });
    out.innerHTML = `<select class="select">${options}</select>`;
}

function select() {
    let personCardSelect = document.querySelector('.select');
    const value = personCardSelect.value;
    personCardDate.textContent = `${person.cards[value].date}`;
    personCardAmount.innerHTML = `${sum(person.cards[value].amount.toFixed(2))} &#8381;`;
    personCardSelect.addEventListener('change', select);
}

if (person.cards.length === 1) {
    personCardNumb.textContent = `${person.cards[0].category} ${cardNumb(person.cards[0].cardNum)}`;
    personCardDate.textContent += `${person.cards[0].date}`;
    personCardAmount.innerHTML += `${sum(person.cards[0].amount.toFixed(2))}  &#8381;`;
}
else {
    optionRenderCard(personCardNumb);
    select();
}

const eur = document.querySelector('.eur');
const usd = document.querySelector('.usd');

function trend(current, previous) {
    if (current > previous) return '▲';
    if (current < previous) return '▼';
    return '';
}

fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(data => {
        return data.json();
    })
    .then(data => {
        let EurCurrent, EurPrevious, UsdCurrent, UsdPrevious;
        EurCurrent = data.Valute.EUR.Value.toFixed(2);
        EurPrevious = data.Valute.EUR.Previous.toFixed(2);
        UsdCurrent = data.Valute.USD.Value.toFixed(2);
        UsdPrevious = data.Valute.USD.Previous.toFixed(2);

        eur.innerHTML = `${EurCurrent} ${trend(EurCurrent, EurPrevious)}`;
        usd.innerHTML = `${UsdCurrent} ${trend(UsdCurrent, UsdPrevious)}`;
    });










