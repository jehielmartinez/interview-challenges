/* Given an array of integers, find the largest possible product obtained by multiplying two adjacent numbers in an array.  */

largestProduct = (arr) => {
  const results = []
  for (i=0; i<arr.length-1; i++){
    results.push(arr[i] * arr[i+1])
  }
  return Math.max(...results)
}


const cases = [
  {
    label: 'Test 1',
    input: largestProduct([3, 4, 5]),
    shouldBe: 20
  },
  {
    label: 'Test 2',
    input: largestProduct([1, 2, 3]),
    shouldBe: 6
  },
  {
    label: 'Test 3',
    input: largestProduct([3, 7, 9]),
    shouldBe: 63
  },
  {
    label: 'Test 4',
    input: largestProduct([-3, -4, 15]),
    shouldBe: 12
  },
  {
    label: 'Test 5',
    input: largestProduct([-4, -1, -10]),
    shouldBe: 10
  }
]

cases.map((test) =>
  console.log(
    (test.input === test.shouldBe ? '✅' : '❗') +
      '  ' +
      test.label +
      ' => ' +
      'Should be: ' +
      test.shouldBe +
      ' received: ' +
      test.input
  )
)
