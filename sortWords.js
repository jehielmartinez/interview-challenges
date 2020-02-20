function sortWords (first, second, third) {
  const result = []

  result.push(first, second, third)
  result.sort()

  return result.join('')
}

const cases = [
  {
    label: 'Example 1',
    input: sortWords('one', 'two', 'three'),
    shouldBe: 'onethreetwo'
  },
  {
    label: 'Example 2',
    input: sortWords('kmlno', 'abcde', 'fghij'),
    shouldBe: 'abcdefghijkmlno'
  },
  {
    label: 'Example 3',
    input: sortWords('ab', 'ac', 'aa'),
    shouldBe: 'aaabac'
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
