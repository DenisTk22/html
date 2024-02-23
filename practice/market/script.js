const dataProducts = `[
    {
        "id": "1",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "images/product1.svg"
    },
    {
        "id": "2",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Black",
        "size": "XL",
        "quantity": "1",
        "photo": "images/ImageW.svg"
    },
    {
        "id": "3",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "images/product3.svg"
    },
    {
        "id": "4",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "images/product4.svg"
    },
    {
        "id": "5",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "images/product5.svg"
    },
    {
        "id": "6",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "images/product6.svg"
    }
]`

const data = JSON.parse(dataProducts);

let counter = 0;

const bodyProductsEl = document.querySelector('.body_products');
const productCardEl = document.querySelector('.products_card');

const cartItemsEl = document.querySelector('.cart-items');

bodyProductsEl.addEventListener('click', e => {

    if (e.target.classList.contains('c_text'))
    {        
            data.forEach(dataProduct => {
                
                if (e.target.closest('.products_card').getAttribute('id') === dataProduct.id) {
                    
                    counter++;
                
                    cartItemsEl.style.display = 'flex';
                    cartItemsEl.style.flexDirection = 'column'
                    cartItemsEl.style.gap = '10px';
                    cartItemsEl.style.alignItems = 'center';

                    const cardEl = document.createElement('div');
                    cardEl.classList.add('card');
                    
                    const pictureEl = document.createElement('div');
                    pictureEl.classList.add('picture');
                    
                    const imgEl = document.createElement('img');
                    imgEl.classList.add('imgCI');
                    imgEl.setAttribute('alt', 'id1');
                    imgEl.src = dataProduct.photo;
                    
                    const contentCardEl = document.createElement('div');
                    contentCardEl.classList.add('content__card');
                    
                    const headEl = document.createElement('div');
                    headEl.classList.add('head');
                    
                    const titleEl = document.createElement('a');
                    titleEl.setAttribute('href', '#');
                    titleEl.classList.add('title');
                    titleEl.textContent = dataProduct.title;
                    
                    const subtitleEl = document.createElement('div');
                    subtitleEl.classList.add('subtitle');
                    subtitleEl.textContent = dataProduct.subtitle;
                    
                    const dataEl = document.createElement('div');
                    dataEl.classList.add('data');
                    
                    const priceEl = document.createElement('p');
                    priceEl.classList.add('price');
                    priceEl.textContent = 'Price: ';
                    
                    const priceTextEl = document.createElement('span');
                    priceTextEl.classList.add('price__text');
                    priceTextEl.textContent = dataProduct.price;
                    
                    const colorEl = document.createElement('p');
                    colorEl.classList.add('color');
                    colorEl.textContent = `Color: ${dataProduct.color}`;
                    
                    const sizeEl = document.createElement('p');
                    sizeEl.classList.add('size');
                    sizeEl.textContent = `Size: ${dataProduct.size}`;
                    
                    const quantityEl = document.createElement('p');
                    quantityEl.classList.add('quantity');
                    quantityEl.textContent = 'Quantity';
                    
                    const quantityTextEl = document.createElement('input');
                    quantityTextEl.setAttribute('type', 'number');
                    quantityTextEl.setAttribute('value', '1');
                    quantityTextEl.setAttribute('min', '1');
                    quantityTextEl.classList.add('quantity__text');
                    
                    const closeEl = document.createElement('a');
                    closeEl.setAttribute('href', '#');
                    closeEl.classList.add('close');
                    closeEl.textContent = 'X';
                    
                    cartItemsEl.appendChild(cardEl);
                    
                    cardEl.appendChild(pictureEl);
                    cardEl.appendChild(contentCardEl);
                    cardEl.appendChild(closeEl);
                    
                    pictureEl.appendChild(imgEl);
                    
                    contentCardEl.appendChild(headEl);
                    contentCardEl.appendChild(dataEl);
                    
                    headEl.appendChild(titleEl);
                    headEl.appendChild(subtitleEl);
                    
                    dataEl.appendChild(priceEl);
                    dataEl.appendChild(colorEl);
                    dataEl.appendChild(sizeEl);
                    dataEl.appendChild(quantityEl);
                    
                    priceEl.appendChild(priceTextEl);
                    
                    quantityEl.appendChild(quantityTextEl);

                    cardEl.addEventListener('click', e => {
                        if (e.target.classList.contains('close')) {
                            cardEl.style.display = 'none';
                            counter--;
                            if (counter === 0) {
                                cartItemsEl.style.display = 'none';
                            };
                        }
                    });
                }
            })
    }
});