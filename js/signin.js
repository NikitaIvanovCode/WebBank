const loginForm = document.querySelector('.login');
const loginInput = document.querySelector('.login__login-inp');
const passInput = document.querySelector('.login__pass-inp');
const toRegForm = document.querySelector('.login__to-reg');
const loginBtn = document.querySelector('.login__btn');
const warning = document.querySelector('.login__warning');

const registrationForm = document.querySelector('.registration');
const back = document.querySelector('.registration__back');

let login, pass;

function toReg() {
    registrationForm.style.display = 'block';
    loginForm.style.display = 'none';
}

function backToLogin() {
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
}

function loginInp(e) {
    login = e.target.value;
}

function passInp(e) {
    pass = e.target.value;
}

function entry() {
    console.log(1)
    let acces = false;
    if (loginInput.value == '' || passInput.value == '') {
        warning.innerHTML = 'Введите данные';
    }
    else {
        for (let i = 0; i < data.length; i++) {
            if (data[i].login === login && data[i].pass === pass) {
                const person = {
                    name: data[i].name,
                    cards: []
                }
                data[i].cards.map(item => {
                    person.cards.push(item);
                });
                localStorage.setItem('person', JSON.stringify(person));
                acces = true;
                break;
            }
            else {
                passInput.value = '';
            }
        };
        acces == true ? window.location.href = '../pages/main.html' : warning.innerHTML = 'Неверные данные';
    }
}

function formPreventDefault(e) {
    e.preventDefault();
}

toRegForm.addEventListener('click', toReg);
back.addEventListener('click', backToLogin);
loginInput.addEventListener('change', loginInp);
passInput.addEventListener('change', passInp);
loginBtn.addEventListener('click', entry);
loginForm.addEventListener('click', formPreventDefault);
registrationForm.addEventListener('click', formPreventDefault);

const hystory = [];
localStorage.setItem('hystory', JSON.stringify(hystory));

// Reistration
const cartNumb = document.querySelector('.registration__cart-numb');
const dateMonth = document.querySelector('.registration__date-month');
const dateYear = document.querySelector('.registration__date-year');
const tel = document.querySelector('.registration__tel');
const newLogin = document.querySelector('.registration__new-login');
const newPass = document.querySelector('.registration__new-pass');
const newPassWarning = document.querySelector('.pass-warning');
const newPassReply = document.querySelector('.registration__new-pass-replay');
const nameReg = document.querySelector('.name');
const categoryCart = document.querySelector('.category-cart');
const amount = document.querySelector('.amount');
const regWarning = document.querySelector('.registration__warning');
const checkbox = document.querySelector('.checkbox');
const consent = document.querySelector('.registration__consent');
const regBtn = document.querySelector('.registration__btn');
let consent_client = false;
let mounth, year, reg_pass, reg_passReply;

const new_person = { cards: [{}] };

cartNumb.onchange = (e) => {
    new_person.cards[0].cardNum = e.target.value;
}

dateMonth.onchange = (e) => {
    mounth = e.target.value;
}

dateYear.onchange = (e) => {
    year = e.target.value;
}

tel.onchange = (e) => {
    new_person.tel = e.target.value;
}

newLogin.onchange = (e) => {
    new_person.login = e.target.value;
}

newPass.onchange = (e) => {
    reg_pass = e.target.value;
    if (reg_pass.length < 6) {
        newPassWarning.textContent = 'Пароль должен быть не менее 6-и символов';
    }
    else {
        newPassWarning.textContent = '';
    }
}

newPassReply.onchange = (e) => {
    reg_passReply = e.target.value;
}

nameReg.onchange = (e) => {
    new_person.name = e.target.value;
}

categoryCart.onchange = (e) => {
    new_person.cards[0].category = e.target.value;
}

amount.onchange = (e) => {
    new_person.cards[0].amount = +e.target.value;
}

consent.onclick = () => {
    if (consent_client === false) {
        consent_client = true;
        checkbox.style.background = `url('../images/verification-square-button.svg')`;
    }
    else {
        consent_client = false;
        checkbox.style.background = `#fff`;
    }
}

function entryReg() {
    new_person.cards[0].date = `${mounth}/${year}`;
    if (reg_pass === reg_passReply) {
        new_person.pass = reg_pass;
        if (Object.keys(new_person).length === 5 && Object.keys(new_person.cards[0]).length === 4 && consent_client === true) {
            data.push(new_person);
            const person = {
                name: new_person.name,
                cards: []
            }
            new_person.cards.map(item => {
                person.cards.push(item);
            });
            localStorage.setItem('person', JSON.stringify(person));
            acces = true;
            window.location.href = '../pages/main.html';
        }
        else {
            regWarning.textContent = 'Заполните все данные и дайте согласие';
        }
    }
    else {
        newPassReply.value = '';
        regWarning.textContent = 'Пароли не совпадают';
    }
}

regBtn.addEventListener('click', entryReg);

// if (data[i].login === login && data[i].pass === pass) {
//     const person = {
//         name: data[i].name,
//         cards: []
//     }
//     data[i].cards.map(item => {
//         person.cards.push(item);
//     });
//     localStorage.setItem('person', JSON.stringify(person));
//     acces = true;
//     break;
// }


