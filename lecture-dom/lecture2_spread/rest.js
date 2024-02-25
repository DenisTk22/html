/// Оператор rest
const studentsGroup1PracticeTime = [
    {
        firstName: 'Ivanov',
        practiceTime: 56
    },
    {
        firstName: 'Petrov',
        practiceTime: 120
    },
    {
        firstName: 'Sidorov',
        practiceTime: 148
    },
    {
        firstName: 'Belkin',
        practiceTime: 20
    },
    {
        firstName: 'Avdeev',
        practiceTime: 160
    }
];

const studentsGroup2PracticeTime = [
    {
        firstName: 'Mankov',
        practiceTime: 87
    },
    {
        firstName: 'Kistin',
        practiceTime: 133
    },
    {
        firstName: 'Kotov',
        practiceTime: 140
    },
    {
        firstName: 'Peskov',
        practiceTime: 10
    }
];
 
function findMax(...values) { // тут мы принимаем все переданные аргументы и с помощью rest оператора упаковываем их в массив values
    // values это массив и мы можем ипользовать reduce для итерации по нему и нахождения максимального числа.
    return values.reduce((acc, value) => {
        if (value > acc) return value;
        return acc;
    }, -Infinity);
};

// Создадим массив только со значениями времени practiceTime
const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);

// вызовем функцию поиска максимума, используя оператор spread.
const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1);

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2);


//Максимальное из обоих групп:
// findMax(...group1PracticeTime, ...group2PracticeTime); или
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(`Максимальное время из двух групп ${maxTimeBothGroups}`);

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
    saveFirstName(firstName);
    saveLastName(lastName);
    saveAdditionals(additionals); // благодаря rest оператору мы смогли собрать все доплнительные данные, которые были переданы для сохранения в базе данных, и можем передать их одним массивом в функцию сохранения дополнительных данных.
}