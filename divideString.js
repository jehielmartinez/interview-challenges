function divideString (str) {
  const result = []

  for (i = 0; i <= str.length; i++) {
    for (x = i + 1; x <= str.length; x++) {
      result.push((str.substring(i, x)))
    }
  }

  result.sort()

  return result[result.length - 1]
}

const cases = [
  {
    label: 'baca',
    input: divideString('baca'),
    shouldBe: 'ca'
  },
  {
    label: 'ba',
    input: divideString('ba'),
    shouldBe: 'ba'
  },
  {
    label: 'banana',
    input: divideString('banana'),
    shouldBe: 'nana'
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
