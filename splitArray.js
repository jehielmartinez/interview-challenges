function splitArray(arr) {
    let result = 0;
    
    const reducer = (acc, value) => acc + value;
    const totalSum = arr.reduce(reducer);
    
    for(i=1; i<arr.length; i++){
        const splitedSum = arr.slice(i).reduce(reducer);
        if((totalSum - splitedSum) > splitedSum){
            result++
        }
    }

    return result;
}

const cases = [
    {
        label: '[10, 4, -8, 7]',
        input: splitArray([10, 4, -8, 7]),
        shouldBe: 2
    },
    {
        label: '[-3, -2, 10, 20, -30]',
        input: splitArray([-3, -2, 10, 20, -30]),
        shouldBe: 2
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))