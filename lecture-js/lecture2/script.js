
let userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer === '') {
//     console.log('Вы ничего не ввели!');
// } else {
//     if (userAnswer === 'ель' || userAnswer === 'елка') {
//         console.log('Молодец!');
//     } else {
//         console.log('Ты че бля?!');
//     }
// }

// if (userAnswer === '') {
//     alert('Вы ничего не ввели!');
// } else if (userAnswer === 'ель' || userAnswer === 'елка') {
//     console.log('Молодец!');
// } else {
//     console.log('Ты че бля?!');
// }

// if (userAnswer.toLowerCase === 'ель' || userAnswer.toLowerCase === 'елка') {
//     alert('Молодец!');
// } else {
//     alert('Ты че бля?!');
// }

    // тернарный оператор
    // (условие) ? что делать, если да : что делать, если нет

// (userAnswer === 'ель' || userAnswer === 'елка') ? alert('Молодец!') : alert('Ты че бля?!');

//или

alert((userAnswer.toLowerCase === 'ель' || userAnswer.toLowerCase === 'елка') ? 'Молодец!' : 'Ты че бля?!');