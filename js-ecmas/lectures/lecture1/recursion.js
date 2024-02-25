//
const exponentiation = (base, exponent) => {
    // Всегда проверяйте данные, которые к вам пришли.
    if (typeof base !== 'number' || typeof exponent !== 'number')
        return NaN;
// Если наша степень больше нуля, вызываем рекурсию, то есть берём основание и умножаем на нашу же функцию, только с аргументом степени, уменьшенным на единицу.
        if(exponent > 0) return base * exponentiation(base, exponent
            - 1);
// В противном случае делаем выход из рекурсии, просто возвращая основания, так как любое число в нулевой степени равно одному.
        return 1;
}
const result = exponentiation(4, 4); // 1024


//факториал

function factorial(number) {
    if (number === 1) {
        return 1
    }
    return factorial(number - 1) * number;
}

console.log(factorial(3));