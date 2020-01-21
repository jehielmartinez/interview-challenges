//Given a number n, find the sum of all n-digit palindromes.
//495 => 11 + 22 + 33 + 44 + 55 + 66 + 77 + 88 + 99

function palindromes(n) {
    let result = 0
    for(i=1; i<10; i++){
        let strMultiplier = '1'.repeat(n);

        result = result + i * parseInt(strMultiplier)
    }
    return result
}

//Testing
const cases = [
    {
        label: '2',
        input: palindromes(2),
        shouldBe: 495
    },
    {
        label: '3',
        input: palindromes(3),
        shouldBe: 4995
    },
    {
        label: '4',
        input: palindromes(4),
        shouldBe: 49995
    },
    {
        label: '15',
        input: palindromes(15),
        shouldBe: 4999999999999995
    },
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))