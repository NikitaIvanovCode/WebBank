menu_hystory.classList.add('active');
const hystory_out = document.querySelector('.wrapp');

let hystory_arr = localStorage.getItem('hystory');
hystory_arr = JSON.parse(hystory_arr).reverse();

function renderHystoryItem(operation, where, category = '', summ, valute = '&#8381;') {
    const block = document.createElement('div');
    block.classList.add('block');
    block.classList.add('hystory__content');

    const hystory_info = document.createElement('div');
    hystory_info.classList.add('hystory__info');
    hystory_info.textContent = `${operation} `;
    block.appendChild(hystory_info);

    const category_where = document.createElement('div');
    category_where.classList.add('hystory__category');
    category_where.innerHTML = `${category} ${where}`;
    hystory_info.appendChild(category_where);

    const summa = document.createElement('div');
    summa.innerHTML = `${sum(summ)} ${valute}`;
    block.appendChild(summa);

    hystory_out.appendChild(block);
}

hystory_arr.map(item => {
    renderHystoryItem(item.name, item.companyOrClient, item.category, item.sumLS, item.valute);
});