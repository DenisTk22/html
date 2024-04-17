'use strict'
fetch('https://catfact.ninja/fact', {
    method: 'POST',
    body: JSON.stringify(
        {
        title: 'test product',
        price: 13.5,
        description: 'test description',
        image: 'https://i.pravatar.cc',
        categiry: 'test category'
        }
    )
})
    .then(response => response.json())
    .then(json => console.log(json))