/// Синхронные функции - это аналоги фсинхронных, они выполняют те же самые действия, но при этом блокируют поток выполнения срипта.
// Синхронные функции могут создавать ошибки (например, когда файл отсутствует), их нужно обрабатывать

const fs = require('fs');

try {
    const result = fs.readFileSync(__filename, 'utf-8');
    console.log(result);
} catch(err) {
    console.log(err);
}

try {
    fs.appendFileSync(__filename, '\nconsole.log("Hello, Denis")');
    console.log('The file was saved');
} catch(err) {
    console.log(err);
}
console.log("Hello, Denis")