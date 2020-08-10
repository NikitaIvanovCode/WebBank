let person = localStorage.getItem('person');
person = JSON.parse(person);
if (localStorage.getItem('person') === null) {
    document.querySelector('body').style.display = 'none';
    window.location.href = '../index.html';
}

const menu_home = document.querySelector('.menu_home a');
const menu_payments = document.querySelector('.menu_payments a');
const menu_transfer = document.querySelector('.menu_transfer a');
const menu_hystory = document.querySelector('.menu_hystory a');

const menu_icon = document.querySelector('.menu-icon');
const menu_adaptive = document.querySelector('.menu__adaptive');

let copmanyTitle;

function cardNumb(num) {
    return num.replace(/(\d)(?=(\d{4})+(\D|$))/g, '$1 ');
}

function sum(sum) {
    return sum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}

function renderCard(num_out) {
    let options = '';
    person.cards.map((item, inx) => {
        return options += `<option value=${inx}>${item.category} ${cardNumb(item.cardNum)}</option>`;
    });
    num_out.innerHTML = `<select class="select">${options}</select>`;
}

function renderAmount(amount_out) {
    let personCardSelect = document.querySelector('.select');
    amount_out.innerHTML = `${sum(person.cards[0].amount.toFixed(2))}  &#8381;`;
    personCardSelect.onchange = () => {
        let value = personCardSelect.value;
        amount_out.innerHTML = `${sum(person.cards[value].amount.toFixed(2))}  &#8381;`;
    }
}

function score(category) {
    const block = document.createElement('div');
    block.classList.add('block');

    const score = document.createElement('div');
    score.classList.add('score');
    score.textContent = 'Счет списания';
    block.appendChild(score);

    const score_info = document.createElement('div');
    score_info.classList.add('score__info');
    block.appendChild(score_info);

    const card_out = document.createElement('div');
    card_out.classList.add('card_out');
    score_info.appendChild(card_out);

    const amount_out = document.createElement('div');
    amount_out.classList.add('amount_out');
    score_info.appendChild(amount_out);

    category.appendChild(block);

    renderCard(card_out);
    renderAmount(amount_out);
}

let getCodeVal = '';
let getSumVal = 0;

function getCode(e) {
    getCodeVal = e.target.value;
}

function getSum(e) {
    getSumVal = e.target.value;
}

function setHystory(array) {
    let getHystory = localStorage.getItem('hystory');
    getHystory = JSON.parse(getHystory);
    getHystory.push(array);
    localStorage.setItem('hystory', JSON.stringify(getHystory));
}

let warning = document.querySelector('.warning');

function toLS(total, selsectCard, getSumVal) {
    if (total < 0) {
        warning.textContent = 'Недостаточно средств';
    }
    else {
        if (copmanyTitle != null) {
            const forHystory = {
                name: 'Платеж:',
                companyOrClient: copmanyTitle,
                sumLS: getSumVal
            }
            setHystory(forHystory)
        }
        else {
            const forHystory = {
                name: 'Перевод:',
                category: category_transfer,
                companyOrClient: getCodeVal,
                sumLS: getSumVal,
                valute: valute
            }
            setHystory(forHystory)
        }

        person.cards[selsectCard.value].amount = total;
        localStorage.setItem('person', JSON.stringify(person));
        window.location.href = 'main.html';
    }
}

let selectedValute = 0;
valute = '&#8381;';

function send() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(data => {
            return data.json();
        })
        .then(data => {
            let usdCurrent, eurCurrent;
            usdCurrent = data.Valute.EUR.Value.toFixed(2);
            eurCurrent = data.Valute.USD.Value.toFixed(2);

            if (getCodeVal === '' || getSumVal === 0) {
                warning.textContent = 'Введите данные';
            }
            else {
                const selsectCard = document.querySelector('.select');
                let spendSum = getSumVal;
                if (selectedValute === 1) {
                    spendSum = getSumVal * usdCurrent;
                    valute = '$';
                }
                else if (selectedValute === 2) {
                    spendSum = getSumVal * eurCurrent;
                    valute = '&#8364;';
                }
                let total = person.cards[selsectCard.value].amount - spendSum;
                toLS(total, selsectCard, getSumVal, valute);
            }

        });
}

document.querySelector('#exit').onclick = () => {
    localStorage.clear();
}

let menu = false;

menu_icon.onclick = () => {
    if (menu) {
        menu = false;
        menu_icon.getAttribute('src');
        menu_icon.setAttribute('src', '../images/menu.svg')
        menu_adaptive.style.transform = `translateX(-100%)`;
    }
    else {
        menu = true;
        menu_icon.getAttribute('src');
        menu_icon.setAttribute('src', '../images/cross_menu.svg')
        menu_adaptive.style.transform = `translateX(0)`;
    }
}


