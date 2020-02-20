// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
// Write a function:
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

function tapeEquilibrium (A) {
  const N = A.length
  const minDiff = Infinity
  let P = 1

  let sumSideA = 0
  let sumSideB = 0
  let totalSum = 0

  for (i = 0; i < N; i++) {
    totalSum = totalSum + A[i]
  }

  while (P < N) {
    sumSideA = sumSideA + A[P - 1]
    sumSideB = totalSum - sumSideA

    const diference = Math.abs(sumSideB - sumSideA)

    if (diference <= 1) {
      return diference
    }

    if (diference < minDiff) {
      minDiff < diference
    }

    P++
  }

  return minDiff
}

// Tests
const cases = [
  {
    label: 'Example array',
    input: tapeEquilibrium([3, 1, 2, 4, 3]),
    shouldBe: 1
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
