// https://dev.to/thepracticaldev/daily-challenge-304-consecutive-letters-1neo

function solve (str) {
  let state = false
  const sorted = str
   .split('')
   .map(char => char.charCodeAt())
   .sort()
   
   sorted.every((char, index) => {
    if(char + 1 === exp[index+1]){
      state = true
    }
  })

  return state
}

// Tests
const cases = [
  {
    label: 'abc',
    input: solve('abc'),
    shouldBe: true
  },
  {
    label: 'zyx',
    input: solve('zyx'),
    shouldBe: true
  },
  {
    label: 'azj',
    input: solve('azj'),
    shouldBe: false
  },
  {
    label: 'defg',
    input: solve('defg'),
    shouldBe: true
  },
  {
    label: 'lmno',
    input: solve('lmno'),
    shouldBe: true
  },
  {
    label: 'rths',
    input: solve('rths'),
    shouldBe: false
  },
  {
    label: 'kpmqoln',
    input: solve('kpmqoln'),
    shouldBe: true
  },

]

cases.map(test => console.log((test.input === test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
