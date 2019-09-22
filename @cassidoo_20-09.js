//Implement a square root function (without using an exponential function).

function squareRoot(S, K) {
    //using Babylonian aproximation
    let Xm = K * 10 * 10;

    for(i=0; i<K; i++){
        Xm = (Xm + S/Xm)/2
    }

    return Xm.toFixed(3)
}

//Testing
const cases = [
    {
        label: 'S=25, K=10 ',
        input: squareRoot(25, 10),
        shouldBe: 5
    },
    {
        label: 'S=125348, K=10',
        input: squareRoot(125348, 10),
        shouldBe: 354.045
    },
    {
        label: 'S=64589, K=10',
        input: squareRoot(64589, 10),
        shouldBe: 254.144
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))