function chunk (arr, k) {
  const result = []
  const len = arr.length

  for (let i = 0; i < len; i = i + k) {
    result.push((arr.slice(i, i + k)))
  }

  // return result;
  return JSON.stringify(result) // stringify to complain tests below
}

const cases = [
  {
    label: '[1,2,3,4,5,6,7], 3',
    input: chunk([1, 2, 3, 4, 5, 6, 7], 3),
    shouldBe: '[[1,2,3],[4,5,6],[7]]'
  },
  {
    label: 'numbers',
    input: chunk(['one', 'two', 'three', 'four', 'five', 'six'], 2),
    shouldBe: '[["one","two"],["three","four"],["five","six"]]'
  }

]

cases.map(test => console.log((test.input === test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
