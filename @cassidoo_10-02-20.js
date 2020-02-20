// Given an array of points that represent the 3 vertices of a triangle, and a point K, return true if K is inside the triangle.

function isInTriangle (arr, k) {
  const triangleArea = (coord) => {
    return Math.abs(coord[0][0] * (coord[1][1] - coord[2][1]) + coord[1][0] * (coord[2][1] - coord[0][1]) + coord[2][0] * (coord[0][1] - coord[1][1])) / 2
  }

  const area = triangleArea(arr)
  let sum = 0

  for (let i = 0; i < 3; i++) {
    const newCoords = [...arr]
    newCoords[i] = k
    sum = sum + triangleArea(newCoords)
  };

  if (sum === area) {
    return true
  } else {
    return false
  }
};

// Tests
const cases = [
  {
    label: 'example#1',
    input: isInTriangle([[0, 0], [0, 3], [4, 0]], [2, 1]),
    shouldBe: true
  },
  {
    label: 'example#2',
    input: isInTriangle([[0, 0], [0, 3], [4, 0]], [3, 2]),
    shouldBe: false
  }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + '  ' + test.label + ' => ' + 'Should be: ' + test.shouldBe + ' received: ' + test.input))
