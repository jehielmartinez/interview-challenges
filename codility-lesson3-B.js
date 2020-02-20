// An array A consisting of N different integers is given.
// The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.

// for(i=0; i<N; i++){
//     if(A[i] != i+1) return i+1
// }

function permMissingElem (A) {
  const N = A.length
  let Asum = 0
  let Nsum = 0

  for (i = 1; i <= N + 1; i++) {
    Nsum = Nsum + i
  }

  for (i = 0; i < N; i++) {
    Asum = Asum + A[i]
  }

  return Nsum - Asum
}

// Tests
const cases = [
  {
    label: 'Example array',
    input: permMissingElem([2, 3, 1, 5]),
    shouldBe: 4
  },
  {
    label: 'Extended array',
    input: permMissingElem([2, 3, 1, 4, 9, 7, 5, 6]),
    shouldBe: 8
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
