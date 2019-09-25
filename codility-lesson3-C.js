// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
// Write a function:
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

function tapeEquilibrium(A) {
    const N = A.length
    let minDiff = Infinity
    let P = 1

    while (P < N) {

        let sumSideA = 0
        let sumSideB = 0

        let sideA = A.slice(0, P)
        let sideB = A.slice(P)

        for (i = 0; i < sideA.length; i++) {
            sumSideA = sumSideA + sideA[i]
        }
        for (i = 0; i < sideB.length; i++) {
            sumSideB = sumSideB + sideB[i]
        }
            
        let diference = Math.abs(sumSideB - sumSideA)

        if (diference < minDiff) {
            minDiff = diference
        }
        
        P++
    }

   return minDiff
}

//Tests
const cases = [
    {
        label: 'Example array',
        input: tapeEquilibrium([3, 1, 2, 4, 3]),
        shouldBe: 1
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))