menu_transfer.classList.add('active');
let transfer = document.querySelector('.transfer');
let transfer_form = document.querySelector('.transfer__form');
const btn_valute = document.querySelectorAll('.btn_valute');
const inpCode = document.querySelector('.input_code');
const inpSume = document.querySelector('.input_sum');
const cancel_trancfer = document.querySelector('.cancel_trancfer');

inpCode.addEventListener('change', getCode);
inpSume.addEventListener('change', getSum);
document.querySelector('.go').addEventListener('click', send);

score(transfer);

const btn_selected = document.querySelectorAll('.transfer__btn');
const receiver = document.querySelector('.receiver');

const arr = ['Номер телефона', 'Номер карты', 'Номер счета'];
receiver.textContent = arr[0];

let category_transfer = 'Номер телефона';

btn_selected.forEach((item, inx) => {
    item.onclick = () => {
        inpCode.value = '';
        btn_selected.forEach(item1 => item1.classList.remove('selected'));
        item.classList.add('selected');
        category_transfer = arr[inx];
        receiver.textContent = arr[inx];
    }
});

btn_valute.forEach((item, inx) => {
    item.onclick = () => {
        btn_valute.forEach(item1 => item1.classList.remove('selected'));
        item.classList.add('selected');
        if (inx === 0) {
            selectedValute = 0;
        }
        else if (inx === 1) {
            selectedValute = 1;
        }
        else {
            selectedValute = 2;
        }
    }
});

cancel_trancfer.onclick = () => {
    window.location.href = '../pages/main.html';
}

