// https://dev.to/thepracticaldev/daily-challenge-183-automorphic-numbers-3mmj

function autoMorphic (num) {
  const numStr = num.toString()
  const square = Math.pow(num, 2).toString()

  return square.slice(-numStr.length) == numStr
};

// Tests
const cases = [
  {
    label: '25',
    input: autoMorphic(25),
    shouldBe: true
  },
  {
    label: '625',
    input: autoMorphic(625),
    shouldBe: true
  },
  {
    label: '13',
    input: autoMorphic(13),
    shouldBe: false
  },
  {
    label: '225',
    input: autoMorphic(225),
    shouldBe: false
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
