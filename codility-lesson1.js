function binaryGap (N) {
  const bin = N.toString(2)
  const len = bin.length
  let longestGap = 0
  let currentGap = 0

  for (let i = 0; i < len; i++) {
    if (bin.charAt(i) === '1') {
      if (currentGap > longestGap) {
        longestGap = currentGap
      }
      currentGap = 0
    } else {
      currentGap++
    }
  }
  return (longestGap)
}

// Testing

const cases = [
  {
    label: 'Number 15',
    input: binaryGap(15),
    shouldBe: 0
  },
  {
    label: 'Number 32',
    input: binaryGap(32),
    shouldBe: 0
  },
  {
    label: 'Number 1041',
    input: binaryGap(1041),
    shouldBe: 5
  },
  {
    label: 'Number 456',
    input: binaryGap(456),
    shouldBe: 2
  }
]

cases.map(test => console.log((test.input === test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
