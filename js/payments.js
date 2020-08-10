menu_payments.classList.add('active');

const companyArr = document.querySelectorAll('.company__title');
const company = document.querySelector('.company');
const title = document.querySelector('.title');

function form_paymants(title_company) {
    const block = document.createElement('div');
    block.classList.add('block');

    const title = document.createElement('div');
    title.classList.add('title_company');
    title.textContent = title_company;
    block.appendChild(title);

    const div_1 = document.createElement('div');
    div_1.classList.add('flex');
    block.appendChild(div_1);

    const label_1 = document.createElement('div');
    label_1.classList.add('left-label');
    label_1.textContent = 'Код плательщика';
    div_1.appendChild(label_1);

    const rightInput_1 = document.createElement('div');
    rightInput_1.classList.add('right-input');
    div_1.appendChild(rightInput_1);

    const input_1 = document.createElement('input');
    input_1.setAttribute('type', 'text');
    input_1.classList.add('input_code');
    rightInput_1.appendChild(input_1);

    const div_2 = document.createElement('div');
    div_2.classList.add('flex');
    block.appendChild(div_2);

    const label_2 = document.createElement('div');
    label_2.classList.add('left-label');
    label_2.textContent = 'Сумма';
    div_2.appendChild(label_2);

    const rightInput_2 = document.createElement('div');
    rightInput_2.classList.add('right-input');
    div_2.appendChild(rightInput_2);

    const input_2 = document.createElement('input');
    input_2.setAttribute('type', 'number');
    input_2.classList.add('input_sum');
    rightInput_2.appendChild(input_2);

    const div_3 = document.createElement('div');
    block.appendChild(div_3);

    const warning = document.createElement('div');
    warning.classList.add('warning');
    div_3.appendChild(warning);

    const btn_div = document.createElement('div');
    btn_div.classList.add('btn_div');
    block.appendChild(btn_div);

    const btn_cancel = document.createElement('button');
    btn_cancel.classList.add('cancel_payments');
    btn_cancel.classList.add('btn');
    btn_cancel.textContent = 'Отмена';
    btn_div.appendChild(btn_cancel);

    const btn_pay = document.createElement('button');
    btn_pay.classList.add('go');
    btn_pay.classList.add('btn');
    btn_pay.textContent = 'Оплатить';
    btn_div.appendChild(btn_pay);

    company.appendChild(block);

    document.querySelector('.input_code').addEventListener('change', getCode);
    document.querySelector('.input_sum').addEventListener('change', getSum);
    document.querySelector('.go').addEventListener('click', send);
    document.querySelector('.cancel_payments').onclick = () => {
        window.location.href = '../pages/payments.html';
    }
}

companyArr.forEach(item => {
    item.onclick = () => {
        company.innerHTML = '';
        copmanyTitle = item.textContent;
        score(company);
        form_paymants(item.textContent);
    }
});




