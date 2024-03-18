const np = require('number-precision');

function calculateResultSum(puschases, discount) {
    let total = puschases.reduce((acc, puschase) => np.plus(acc, puschase), 0);

    total = np.times(total, discount);
    return total;
};

module.exports = { calculateResultSum };