function cyclicRotation(A, K){
    const len = A.length
    let B = []

        for(i=0; i<len; i++){
            let position = (i+K) % len 
            B[position] = A[i]  
        }

    return B;
}

//Testing
const cases = [
    {
        label: 'Given [1,2,3] single rotation',
        input: cyclicRotation([1,2,3], 1),
        shouldBe: '3,1,2'
    },
    {
        label: 'Given [3,8,9,7,6] three rotations',
        input: cyclicRotation([3, 8, 9, 7, 6], 3),
        shouldBe: '9,7,6,3,8'
    },
    {
        label: 'Given [1,2,3,4] full length rotation',
        input: cyclicRotation([1,2,3,4], 4),
        shouldBe: '1,2,3,4'
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))