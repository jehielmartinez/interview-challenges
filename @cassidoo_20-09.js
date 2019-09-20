//Implement a square root function (without using an exponential function).

function squareRoot(num) {
 return Math.sqrt(num)
}

//Testing
const cases = [
    {
        label: 'Number 25',
        input: squareRoot(25),
        shouldBe: 5
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))