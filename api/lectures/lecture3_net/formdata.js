/***
 * Методы класса FormData:
● formData.delete(name) — удаляет поле с именем name
● formData.get(name) — возвращает значение поля с именем name
● formData.has(name) — если существует поле с именем name, то возвращает
true, иначе false
Для вставки содержимого существуют методы set и append, они полностью
одинаковы в использовании, за исключением одного нюанса: append может
добавить несколько полей с одним и тем же именем, а set сначала удалит
предыдущие вхождения послей с этим именем, а потом добавит новое.
Использовать их можно двумя способами — с двумя аргументами при обычном поле,
с тремя аргументами, если тип данных — файл.
● formData.append(name, value) — добавляет к объекту поле с именем name и
значением value
● formData.append(name, blob, fileName) — добавляет поле с файлом, который
записывается во второй аргумент, третий аргумент задаёт имя файла
 */
/**
 * <form name="superFrom">
        title: <input name="title" value="test product">
        <br />
        price: <input name="price" type="number" value="13.5">
        <br />
        description: <input name="description" value="description text">
        <br />
        image: <input name="image" value="https://i.pravatar.cc">
        <br />
        category: <input name="category" value="elecronic">
        <input type="submit">
    </form>
 */
const form = document.forms.superForm;
form.onsubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let response = await fetch("https://i.pravatar.cc", {
        method: "POST",
        body: data,
    });
    const result = await response.json();
    console.log(result);
};

(async () => {
    //Шаг1: начинаем загрузку fetch, получаем поток для чтения
    let response = await fetch("https://i.pravatar.cc");
    
    const reader = response.body.getReader();

    //Шаг2: считываем данные
    let receiveLength = 0; // количество байт, полученных на данный момент
    let chunks = []; // массив для хранения данных
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
        receiveLength += value.length;
        console.log(`Получено ${receiveLength} байт`);
    }

    //Шаг3: собираем данные в один массив Uint8Array
    let chunksAll = new Uint8Array(receiveLength);
    let position = 0;
    for (let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }

    //Шаг4: декодируем Uint8Array обратно в строку
    let result = new TextDecoder("utf-8").decode(chunksAll);

    //Готово
    let commits = JSON.parse(result);
    console.log(commits);
})();

/**
 * Прерывание запроса
Для отмены fetch и других асинхронных запросов существует специальный класс
AbortController c одним свойством signal и тоже одним методом abort(). Для fetch в
параметрах указывается свойство signal, в который мы записываем контроллер,
созданный с помощью конструктора класса AbortController. Далее мы вызываем в
нужном месте метод abort(). И всё, работа fetch прервана.
В свойство controller.signal.aborted записывается булево значение, прерван ли
запрос
 */