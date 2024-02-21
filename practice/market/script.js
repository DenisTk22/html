
const productCardEl = document.querySelector('.products_card');

const cartItemsEl = document.querySelector('.cart-items');

productCardEl.addEventListener('click', e => {

    if (e.target.classList.contains('c_text'))
    { 
        const cartToItems =  e.target.closest('.products_card');
        cartItemsEl.appendChild(cartToItems);
    }   
});