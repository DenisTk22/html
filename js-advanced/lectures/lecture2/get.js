class AutoMobile {
    _horsePowers = 0; // объявление свойства как private

    set horsePowers(value) {
        if (value < 0) {
            throw new Error('Horse powers must be positive');
        }
        this._horsePowers = value;
    }

    get horsePowers() {
        return this._horsePowers;
    }

    constructor(powers) {
        this._horsePowers = powers;
    }
}

//создаем новую машину
const auto = new AutoMobile(300);

auto.horsePowers = -300; // ошибка

auto.horsePowers = 300; // значение свойства меняется


//Приватные свойства. Эти свойства начинаются со знака # и имеют защиту на уровне языка.

class AutoMobile {
    #horsePowers = 0; // объявление свойства как private и имеют защиту на уровне языка

    set horsePowers(value) {
        if (value < 0) {
            throw new Error('Horse powers must be positive');
        }
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(powers) {
        this.#horsePowers = powers;
    }
}

//создаем новую машину

const auto = new AutoMobile(300);   
//устанавливаем количество сил через метод set
auto.horsePowers = 300; // значение свойства меняется
console.log(auto.horsePowers); // 300

//устанавливаем количество сил напрямую
auto.#horsePowers = 300; // Uncaught SyntaxError: Private field '#horsePowers' must be declared in an enclosing class

