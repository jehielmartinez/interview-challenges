/*
https://dev.to/thepracticaldev/daily-challenge-305-remove-anchors-from-urls-ihp

Complete the function/method so that it returns the url with anything after the anchor (#) removed. 
*/

removeUrlAnchor = (str) => str.split('#', 1)[0];


const cases = [
  {
    label: 'Test 1',
    input: removeUrlAnchor('dev.to#about'),
    shouldBe: 'dev.to'
  },
  {
    label: 'Test 2',
    input: removeUrlAnchor('www.telegraph.co.uk/branding'),
    shouldBe: 'www.telegraph.co.uk/branding'
  },
  {
    label: 'Test 3',
    input: removeUrlAnchor('www.twitter.com?page=1'),
    shouldBe: 'www.twitter.com?page=1'
  },
  {
    label: 'Test 4',
    input: removeUrlAnchor('www.twitter.com#about'),
    shouldBe: 'www.twitter.com'
  }
]

cases.map((test) =>
  console.log(
    (test.input === test.shouldBe ? '✅' : '❗') +
      '  ' +
      test.label +
      ' => ' +
      'Should be: ' +
      test.shouldBe +
      ' received: ' +
      test.input
  )
)
