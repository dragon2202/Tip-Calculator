//calculateTipAndTotal from DisplayCard
//npm test -g calculateTipAndTotal.test.js

function calculateTipAndTotal(total, numofPeople, tip) {
    let tipPerPerson = 0
    let totalPerPerson = 0
    if ((total === 0 || numofPeople === 0 || tip === 0) || (total === null || numofPeople === null || tip === null)) {//base case
        return {tipPerPerson, totalPerPerson}
    } else {
        // Since the number in the design doc is 4.27. I assume that it's NOT supposed to be rounded. I just cut it off at the second decimal space
        // ((142.55/5) * .15) = 4.2765
        tipPerPerson = Math.trunc(((total/numofPeople) * tip) * 100) / 100
        //I decided to round this just in case total/numofPeople + tipPerson is a decimal. In American culture we round up anyways.
        //I do know that (142.55/5) + 4.2765 rounded up will be 32.79 which my current math makes it 32.78 based of the non rounded tip
        totalPerPerson = Math.round(((total/numofPeople) + tipPerPerson) * 100) / 100
        return {tipPerPerson, totalPerPerson}
    }
}

test("0 from total, numofPeople, or tip expects 0 from both tipPerPerson and totalPerson", () => {
    expect(calculateTipAndTotal(0, 100, 100)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(100, 0, 100)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(100, 100, 0)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(0, 0, 100)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(0, 100, 0)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(100, 0, 0)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(0, 0, 0)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
})
test("null from total, numofPeople, or tip expects 0 from both tipPerPerson and totalPerson", () => {
    expect(calculateTipAndTotal(null, 100, 100)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(100, null, 100)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(100, 100, null)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(null, null, 100)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(null, 100, null)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(100, null, null)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
    expect(calculateTipAndTotal(null, null, null)).toMatchObject({tipPerPerson: 0, totalPerPerson: 0})
})

test("Valid inputs expects valid answers", () => {
    expect(calculateTipAndTotal(142.55, 5, .15)).toMatchObject({tipPerPerson: 4.27, totalPerPerson: 32.78})
    expect(calculateTipAndTotal(637.34, 23, .20)).toMatchObject({tipPerPerson: 5.54, totalPerPerson: 33.25})
    expect(calculateTipAndTotal(401.36, 19, .15)).toMatchObject({tipPerPerson: 3.16, totalPerPerson: 24.28})
    expect(calculateTipAndTotal(108.93, 16, .13)).toMatchObject({tipPerPerson: 0.88, totalPerPerson: 7.69})
    expect(calculateTipAndTotal(234.43, 7, .05)).toMatchObject({tipPerPerson: 1.67, totalPerPerson: 35.16})
})

/*

test("Valid inputs expects valid answers", () => {
    expect(calculateTipAndTotal(100, 4)).toBe(25)
    expect(calculateTipAndTotal(100.40, 4)).toBe(25.10)
    expect(calculateTipAndTotal(142.55, 5)).toBe(32.79 || 32.78)
})

*/