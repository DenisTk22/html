console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.doNotTrack);
console.log(navigator.geolocation);

//userAgent - информация о браузере
//cookieEnabled - разрешены ли cookies
//doNotTrack - разрешены ли отслеживание
//geolocation - разрешены ли использование геолокации

// Напишите функуцию findClosestCity(userLocation, cities), которая принимает текущее местоположение пользователя в формате [lattitude, longitude] и массив городов с их координатами в формате {name: 'City', location: [lattitude, longitude]}. Функция должна вернуть название ближайшего города к пользователю

function calculateDistance(location1, location2) {
    const [lat1, lon1] = location1; //разбивает координаты первого местоположения на широту и долготу
    const [lat2, lon2] = location2; //разбивает координаты второго местоположения на широту и долго
    const toRad = (value) => value * Math.PI / 180; //переводит радианы в градусы
    const R = 6371; //радиус земли в километрах
    const dLat = toRad(lat2 - lat1); //расстояние по широте
    const dLon = toRad(lon2 - lon1); //расстояние по долготе

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) + //Вычисляем квадрат синуса половины разницы широты
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);//Вычисляем квадрат синуса половины разницы долготы и косинуса широты
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));//Вычисляем центральный угол между двумя точками
    const distance = R * c; //Вычисляем расстояние между двумя точками на сфере Земли
    return distance;
}
function findFastestCity(cities) {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLocation = [position.coords.latitude, position.coords.longitude];
                let fastestCity = null;
                let fastestDistance = Infinity;

                cities.forEach(city => {
                    const distance = calculateDistance(userLocation, city.location);
                    if (distance < fastestDistance) {
                        fastestDistance = distance;
                        fastestCity = city.name;
                    }
                });
                resolve(fastestCity);
            }, error => {
                if (error.code === error.PERMISSION_DENIED) {
                    reject(new Error('Отклонено пользователем'));
                } else {
                    reject(new Error('Ошибка при получении местоположения'));
                }
            });
        } else {
            reject(new Error('Геолокация не поддерживается вашим браузером'));
        }
    });
}

const cities = [
    { name: 'Москва', location: [55.7522, 37.6155] },
    { name: 'Санкт-Петербург', location: [59.9386, 30.3141] },
    { name: 'Новосибирск', location: [55.0, 82.9] },
    { name: 'Екатеринбург', location: [56.8, 60.6] },
    { name: 'Казань', location: [55.7, 49.1] },
];


findFastestCity(cities)
    .then(fastestCity => console.log(`Ближайший город: ${fastestCity}`))
    .catch(error => console.error(error));
