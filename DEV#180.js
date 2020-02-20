// https://dev.to/thepracticaldev/daily-challenge-180-sms-shortener-43lk

function shortener (str) {
  const regex = /\s+(\S*)$/g

  if (str.length <= 160) {
    return str
  };

  const match = str.match(regex)
  if (!match) {
    return 'No place to trim'
  }

  const trimmed = match[0].trim()
  const capital = trimmed.replace(/^./, trimmed[0].toUpperCase())

  return shortener(str.replace(regex, capital))
};

// Tests
const cases = [
  {
    label: 'example#1',
    input: shortener('No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.'),
    shouldBe: 'No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.'
  },
  {
    label: 'example#2',
    input: shortener('This message is already short enough'),
    shouldBe: 'This message is already short enough'
  },
  {
    label: 'example#3',
    input: shortener('ThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoon'),
    shouldBe: 'No place to trim'
  }
]

cases.map(test => console.log((test.input === test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
