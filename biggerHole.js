function biggerHole (n, m, h, v) {
  const verBars = []
  const horBars = []
  let maxArea = 0

  for (i = 0; i <= m + 1; i++) {
    if (!v.includes(i)) {
      verBars.push(i)
    }
  }
  for (i = 0; i <= n + 1; i++) {
    if (!h.includes(i)) {
      horBars.push(i)
    }
  }

  console.log(verBars, horBars)

  for (Hi = 1; Hi <= n; Hi++) {
    for (Vi = 1; Vi <= m; Vi++) {
      let area = 0
      area = (verBars[Vi] - verBars[Vi - 1]) * (horBars[Hi] - horBars[Hi - 1])
      if (area > maxArea) {
        maxArea = area
      }
    }
  }

  return maxArea
}

const cases = [
  {
    label: 'Example 1',
    input: biggerHole(6, 6, [4], [2]),
    shouldBe: 4
  },
  {
    label: 'Example 2',
    input: biggerHole(3, 3, [2], [2]),
    shouldBe: 4
  },
  {
    label: 'Example 3',
    input: biggerHole(3, 2, [1, 2, 3], [1, 2]),
    shouldBe: 12
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
