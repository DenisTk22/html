'use strict';
(async () => {
    const url = 'https://catfact.ninja/fact';
    const response = await fetch(url);
    console.log(response.status);
    console.log(response.ok);
    const fact = await response.json();
    console.log(fact);
})();
// response.json() - JSON,
// response.text() - text,
// response.blob() - Blob() (Бинарные данные с типом),
// response.arrayBuffer() - arrayBuffer (низкоуровневое представление бинарных данных),
// response.formData() - объект formData,
// response.body - объект ReadablesStream, с помощью которого можно считывать тело запроса по частям.
'use strict';
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(console.log);

//Или для вывода тлько факта:
'use strict';
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(obj => console.log(obj.fact));