function OddOcurrences(A){
    let len = A.length;
    A.sort()

    for(i=0; i<len; i++){
        if(A[i] != A[i+1] && A[i] != A[i-1]){
            return A[i]
        }
    }
}

//Testing

const cases = [
    {
        label: 'Given',
        input: OddOcurrences([9,3,9,3,9,7,9]),
        shouldBe: 7
    },
    {
        label: 'Last position answer',
        input: OddOcurrences([5,3,5,3,5,9,5]),
        shouldBe: 9
    },
    {
        label: 'First position answer',
        input: OddOcurrences([5,3,5,9,5,9,5]),
        shouldBe: 3
    },
]

cases.map(test => console.log((test.input === test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))