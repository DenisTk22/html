const group1 = {
    'Ivanov': {
        practicePlace: 'ldu-1',
        practiceTime: 56
    },
    'Petrov': {
        practicePlace: 'kamaz',
        practiceTime: 120
    },
    'Sidorov': {
        practicePlace: 'ldu-1',
        practiceTime: 148
    },
    'Abdula': {
        practicePlace: 'audi',
        practiceTime: 99
    },
};

const group1Students = Object.keys(group1);
console.log(group1Students);

// использование метода map
const studentsPracticeTime = [
    {
        firstName: 'Ivanov',
        practiceTime: 56
    },
    {
        firstName: 'Gadov',
        practiceTime: 120
    },
    {
        firstName: 'Sosyuk',
        practiceTime: 148
    },
    {
        firstName: 'Tvarev',
        practiceTime: 99
    }
];

const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return {
            Student: student.firstName,
            Practice: 'Not passed'
        };
    } else {
        return {
            Student: student.firstName,
            Practice: 'Passed'
        };
    }
});

console.log(dataForTable);

// использование метода filter

const studentsPassedPractice = studentsPracticeTime.filter((student) => {
        if (student.practiceTime < 120) return false
        return true
    });

console.log(studentsPassedPractice);

// использование метода reduce

const totalTime = studentsPracticeTime.reduce((acc, student) => {
    return acc + student.practiceTime;
}, 0); // 0 - первоначальное значение 

console.log(totalTime);