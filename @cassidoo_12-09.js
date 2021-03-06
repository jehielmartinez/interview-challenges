// Write a function where given an array of integers
// (where each element represents the max number of steps that can be made forward from that element),
// return the minimum number of jumps to reach the end of the array (starting from the first element).

// ---------------------------------------------------------------------------------------------------

const stones = [1, 3, 5, 3, 9, 2, 6, 7, 6, 8, 9]

minJumps(stones)

function minJumps (stones) {
  const targetIndex = stones.length - 1
  let currentIndex = 0
  const touched = []

  const jump = (index) => {
    let maxIndex = index
    touched.push(stones[index])

    for (let i = index + 1; i <= stones[index]; i++) {
      if (stones[i] >= targetIndex - i) {
        touched.push(stones[i])
        return targetIndex
      }

      if (stones[i] === 0) {
        return -1
      }

      if (stones[i] >= stones[maxIndex]) {
        maxIndex = i
      }
    }
    return maxIndex
  }

  while (currentIndex < targetIndex) {
    if (currentIndex === -1) {
      return -1
    }

    currentIndex = jump(currentIndex)
  }

  if (currentIndex === targetIndex) {
    touched.push(stones[targetIndex])
  }

  return (touched.length - 1)
}
