// https://dev.to/thepracticaldev/daily-challenge-178-create-phone-numbers-3d64

function createPhoneNumber (arr) {
  if (arr.length < 10) {
    return 'Your phone number is not from this country'
  }

  arr.splice(0, 0, '(')
  arr.splice(4, 0, ')')
  arr.splice(5, 0, ' ')
  arr.splice(9, 0, '-')

  return arr.join('')
};

// Tests
const cases = [
  {
    label: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]',
    input: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
    shouldBe: '(123) 456-7890'
  },
  {
    label: '[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]',
    input: createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
    shouldBe: '(111) 111-1111'
  },
  {
    label: 'incomplete array',
    input: createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1]),
    shouldBe: 'Your phone number is not from this country'
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
