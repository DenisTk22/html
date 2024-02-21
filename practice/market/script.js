const dataProducts = `[
    {
        "id": "1",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$300",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id1.svg"
    },
    {
        "id": "2",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Black",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id2.svg"
    },
    {
        "id": "3",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$300",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id1.svg"
    },
    {
        "id": "4",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$300",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id1.svg"
    },
    {
        "id": "5",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$300",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id1.svg"
    },
    {
        "id": "6",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$300",
        "color": "Red",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id1.svg"
    },
]`

const data = JSON.parse(dataProducts);


const productCardEl = document.querySelector('.products_card');

const cartItemsEl = document.querySelector('.cart-items');

productCardEl.addEventListener('click', e => {

    if (e.target.classList.contains('c_text'))
    { 
        const cartToItems =  e.target.closest('.products_card');
        cartItemsEl.appendChild(cartToItems);
    }   
});