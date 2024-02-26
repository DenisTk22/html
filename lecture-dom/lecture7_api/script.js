/// навигация
// получение текущего местопложения есть метод getCurrentPosition()


navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position);
    const {latitude, longitude} = position.coords;
    console.log('Географические координаты устройства', latitude, longitude)
});

// наблюдение за текущим местоположением, метод watchPosition()

let watchId = navigator.geolocation.watchPosition(({coords}) => {
    console.log('Устройство обновило местоположение', coords.latitude, coords.longitude)
});

// отписаться от получения новых данных о местоположении, метод clearWatch()

