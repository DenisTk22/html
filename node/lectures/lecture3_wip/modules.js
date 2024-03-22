/// модуль fs - позволяет работать с файловой системой: читать и записывать файлы
// метод readFile для чтения фала
const fs = require('fs');

// fs.readFile('path/to/file', 'utf-8', (err, data) => { // принимет путь к файлу, кодировку и callback, который выполнится, когда файл будет прочитан
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

fs.readFile(__filename, 'utf-8', (err, data) => { // принимет путь к файлу, кодировку и callback, который выполнится, когда файл будет прочитан
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

//метод writeFile для записи фала. Файл перезапишится!

fs.writeFile('./text.txt', 'console.log("Hello!")', (err) => { // принимет путь к файлу, Дданные для записи в файл и callback, который выполнится, когда файл будет записан
    if (err) {
        console.log(err);
    }
    console.log('The file was saved');
});

//метод appendFile для дозаписи фала.

fs.appendFile('./text.txt', '\nconsole.log("Hello All1!")', (err) => { // принимет путь к файлу, Дданные для записи в файл и callback, который выполнится, когда файл будет записан
    if (err) {
        console.log(err);
    }
    console.log('The file was updated');
});