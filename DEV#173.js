// https://dev.to/thepracticaldev/daily-challenge-173-pandemia-5ae7

function doomPercentage (s) {
  let infected = 0
  let total = 0

  if (!s.includes('1') || !s.includes('0')) {
    return 0
  }

  s.split('X').forEach(continent => {
    if (continent.includes('1')) {
      continent = continent.replace(/0/gi, '1')
      infected += continent.length
    }
    total += continent.length
  })

  return 100 * infected / total
};

// Tests
const cases = [
  {
    label: '01000000X000X011X0X',
    input: doomPercentage('01000000X000X011X0X'),
    shouldBe: 73.33333333333333
  },
  {
    label: '01X000X010X011XX',
    input: doomPercentage('01X000X010X011XX'),
    shouldBe: 72.72727272727273
  },
  {
    label: 'XXXXX',
    input: doomPercentage('XXXXX'),
    shouldBe: 0
  },
  {
    label: '00000000X00X0000',
    input: doomPercentage('00000000X00X0000'),
    shouldBe: 0
  },
  {
    label: '0000000010',
    input: doomPercentage('0000000010'),
    shouldBe: 100
  },
  {
    label: '000001XXXX0010X1X00010',
    input: doomPercentage('000001XXXX0010X1X00010'),
    shouldBe: 100
  },
  {
    label: 'X00X000000X10X0100',
    input: doomPercentage('X00X000000X10X0100'),
    shouldBe: 42.857142857142854
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
