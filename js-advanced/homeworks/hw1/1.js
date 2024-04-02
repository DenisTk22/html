"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
    {title: "Lake", artist: "KISS", year: "1999"},
  { title: "Forest", artist: "Rammstein", year: "1982"},
    {title: "Knyaz", artist: "Aria", year: "1995"},
    {title: "Rain", artist: "KISS", year: "2000"},
    {title: "Wind", artist: "KISS", year: "2001"},
];
   

const musicCollection = {
    albums,
    *[Symbol.iterator]() {
        for (const album of this.albums) {
            yield `${album.title} - ${album.artist} (${album.year})`;
        }
    }
};

for (const album of musicCollection) {
    console.log(album);
};