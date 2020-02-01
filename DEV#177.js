//https://dev.to/thepracticaldev/daily-challenge-177-supersize-me-3fhl

//Bubble Sort!
function superSize(num) {
    let str = [...num.toString()];
    let swap;
    do {
        swap = false
        for (i = 0; i <= str.length; i++) {
            if (str[i] < str[i + 1]) {
                const bigger = str[i + 1];
                str[i + 1] = str[i];
                str[i] = bigger;
                swap = true
            }
        }
    } while (swap);
    
    return(+str.join(''));
};

//Tests
const cases = [
    {
        label: '123456',
        input: superSize(123456),
        shouldBe: 654321
    },
    {
        label: '2020',
        input: superSize(2020),
        shouldBe: 2200
    },
    {
        label: '608719',
        input: superSize(608719),
        shouldBe: 987610
    },
    {
        label: '700000000001',
        input: superSize(700000000001),
        shouldBe: 710000000000
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))
