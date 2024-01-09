
const car = {
    make: "Henday",
    mode: "Creta",
    year: 2019,
    color: "grey",
    odometer: 0,
    engineIsStarted: false,
    startEngine: function () {
        this.engineIsStarted = true;
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineIsStarted) { // this.engineIsStarted = true
            this.odometer += distance;
        } else {
            alert("Запустите двигатель!")
        }
    }
};
// console.log(car);
// console.log(car.color);
// car.color = "green";
// console.log(car);

// let text = car.color;

// car.power = 123;
// console.log(car);

// delete car.color;
// console.log(car);

// function haveRoadTrip(myCar, distance) {
//     myCar.odometer += distance;
// }

// haveRoadTrip(car, 150);
// console.log(car.odometer);
// console.log(car);

// car.startEngine = function() {
//     console.log("Engine is started");
// }

// console.log(car);
// car.startEngine();
