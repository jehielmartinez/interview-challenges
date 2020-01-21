function drop(arr, k = 1){
    let result = [];
    let len = arr.length;
    
    if (k>len){
        return result
    }

    for(i=k; i<len; i++){
        result.push(arr[i])
    }  
    
    // result = arr.slice(k);
    // return result;
   return JSON.stringify(result);
}

const cases = [
    {
        label: '[1, 2, 3]',
        input: drop([1, 2, 3]),
        shouldBe: '[2,3]'
    },
    {
        label: '[1, 2, 3], 2',
        input: drop([1, 2, 3], 2),
        shouldBe: '[3]'
    },
    {
        label: '[1, 2, 3], 5',
        input: drop([1, 2, 3], 5),
        shouldBe: []
    },
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))