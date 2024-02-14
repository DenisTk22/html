/*Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

В блоке Featured Items небходимо реализовать шаблон товаров.

Для этого необходимо создать json формат данных по всем товарам.

Из этого файла сформировать блок Featured Items.

Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется. */

const FeaturedItems = `[
    {
        "id": "product1",
        "ProductImg": "./pictures/product1.svg",
        "ProductName": "ELLERY X M'O CAPSULE",
        "ProductDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.",
        "ProductPrice": "$52.00"
    },
    {
        "id": "product2",
        "ProductImg": "./pictures/product2.svg",
        "ProductName": "ELLERY X M'O CAPSULE",
        "ProductDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.",
        "ProductPrice": "$52.00"
    },
    {
        "id": "product3",
        "ProductImg": "./pictures/product3.svg",
        "ProductName": "ELLERY X M'O CAPSULE",
        "ProductDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.",
        "ProductPrice": "$52.00"
    },
    {
        "id": "product4",
        "ProductImg": "./pictures/product4.svg",
        "ProductName": "ELLERY X M'O CAPSULE",
        "ProductDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.",
        "ProductPrice": "$52.00"
    },
    {
        "id": "product5",
        "ProductImg": "./pictures/product5.svg",
        "ProductName": "ELLERY X M'O CAPSULE",
        "ProductDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.",
        "ProductPrice": "$52.00"
    },
    {
        "id": "product6",
        "ProductImg": "./pictures/product6.svg",
        "ProductName": "ELLERY X M'O CAPSULE",
        "ProductDescription": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ut.",
        "ProductPrice": "$52.00"
    }
]`

const data = JSON.parse(FeaturedItems);

data.forEach(FeaturedItem => {
    
    const featuredItemsEl = document.querySelector('.featuredItems');

    const productEl = document.createElement('div');
    productEl.classList.add('product');

    const imgEl = document.createElement('img');
    imgEl.classList.add('product__img');
    imgEl.setAttribute('alt', FeaturedItem.id);
    imgEl.src = FeaturedItem.ProductImg;

    const prodNameEl = document.createElement('p');
    prodNameEl.classList.add('product__name');
    prodNameEl.textContent = FeaturedItem.ProductName;

    const prodTextEl = document.createElement('p');
    prodTextEl.classList.add('product__text');
    prodTextEl.textContent = FeaturedItem.ProductDescription;

    const prodPriceEl = document.createElement('p');
    prodPriceEl.classList.add('product__price');
    prodPriceEl.textContent = FeaturedItem.ProductPrice;

    featuredItemsEl.appendChild(productEl);

    productEl.appendChild(imgEl);
    productEl.appendChild(prodNameEl);
    productEl.appendChild(prodTextEl);
    productEl.appendChild(prodPriceEl);

});

