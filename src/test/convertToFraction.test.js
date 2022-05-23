//convertToFraction from custom_percentage
//npm test -g convertToFraction.test.js

function convertToFraction(number) {
    if (number === null) {
        //If input is deleted/missing/null
        return 0
    } else if (number % 1 !== 0) {
        //Converts Fraction Input to a decimal with 2 places. ToFixed returns a string so I converted it to a float with ParseFloat
        return parseFloat(number.toFixed(2))
    } else {
        //if input is not null, convert to fraction since the whole number is supposed to be a decimal
        return (number / 100)
    }
}

test("Null expects 0", () => {
    expect(convertToFraction(null)).toBe(0)
})

test("Fraction expects fraction at 2 spaces", () => {
    expect(convertToFraction(0.1)).toBe(0.1)
    expect(convertToFraction(0.12)).toBe(0.12)
    expect(convertToFraction(0.122)).toBe(0.12)
    expect(convertToFraction(0.123)).toBe(0.12)
})

test("Whole Number expects number converted to decimal", () => {
    expect(convertToFraction(0)).toBe(0)
    expect(convertToFraction(1)).toBe(0.01)
    expect(convertToFraction(10)).toBe(0.1)
    expect(convertToFraction(100)).toBe(1)
    expect(convertToFraction(1000)).toBe(10)
})