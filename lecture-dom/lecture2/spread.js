/// Оператор spread
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

// Напишем не очень удобную, но показательную функцию, которая умеет принимать неограниченное число аргументов, и находить максимум среди них. Функция должна вызываться подобным образом: const maximum = findMax(4, 7, 10);
function findMax() {
    const values = arguments; //arguments - переменная доступная внутри каждой функции, которая содержит в себе все аргументы, переданные в функцию. Является псевдомассивом.
    let maxValue = -Infinity;
    //т.к. arguments является псевдомассивом, к нему неприменимы новые методы forEach или reduce.
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};

// Необходимо передать в нашу функцию только числа, а в наших массивах содержаться объекты, поэтому создадим массив со значениями practiceTime
const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);

const maxTimeFromGroup1 = findMax(...group1PracticeTime); // ...group1PracticeTime - вытянет из массива все элементы и передаст их в функцию как отдельные переменные, тогда не придется передавать в функцию все элементы: findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3], group1PracticeTime[4]);
const maxTimeFromGroup2 = findMax(...group2PracticeTime);

console.log(`Максимальное время в первой группе ${maxTimeFromGroup1}`);
console.log(`Максимальное время во второй группе ${maxTimeFromGroup2}`);

//Максимальное из обоих групп:
// findMax(...group1PracticeTime, ...group2PracticeTime); или
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];

const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(`Максимальное время из двух групп ${maxTimeBothGroups}`);