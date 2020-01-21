//Given a number, return true if the input is a factorial of any natural number.

function isFactorial(n) {
    let num = n;
    
    for(i=2; i<=n; i++){
        num = num/i;
        if (num === 1) {
            return true
        } else if (Math.trunc(num) !== num) {
            return false
        };
    };
};

//Testing
const cases = [
    {
        label: '8',
        input: isFactorial(8),
        shouldBe: false 
    },
    {
        label: '6',
        input: isFactorial(6),
        shouldBe: true
    },
    {
        label: '45',
        input: isFactorial(45),
        shouldBe: false
    },
    {
        label: '120',
        input: isFactorial(120),
        shouldBe: true
    },
    {
        label: '1307674368000',
        input: isFactorial(1307674368000),
        shouldBe: true
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))