//given a sorted array, return other array with the sorted values
//[-3, 1, 2, 3] => [1, 4, 9, 9]
function squareSort(arr, result = []) {

    if (arr.length == 0){
        return result;
    }

    const first = Math.pow(arr[0], 2);
    const last = Math.pow(arr[arr.length-1], 2);

    if(first >= last){
        result.unshift(first);
        arr.shift();
    } else {
        result.unshift(last);
        arr.pop();
    };

    return squareSort(arr, result);
};

const cases = [
    {
        label: '[-3, 1, 2, 3]',
        input: squareSort([-3, 1, 2, 3]),
        shouldBe: [1, 4, 9, 9]
    },
    {
        label: '[-4, -2, 1, 2, 3]',
        input: squareSort([-4, -2, 1, 2, 3]),
        shouldBe: [1, 4, 4, 9, 16]
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))