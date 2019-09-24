//Frog Jump
//A small frog wants to get to the other side of the road. 
//The frog is currently located at position X and wants to get to a position greater than or equal to Y. 
//The small frog always jumps a fixed distance, D.
//Count the minimal number of jumps that the small frog must perform to reach its target.

function frogJmp(X, Y, D) {
    
    if (X >= Y) return -1

    const jumps = (Y-X)/D

    return Math.ceil(jumps)
}

//Tests
const cases = [
    {
        label: 'Example jump',
        input: frogJmp(10, 85, 30),
        shouldBe: 3
    },
    {
        label: 'Really big jump',
        input: frogJmp(20, 30, 30),
        shouldBe: 1
    },
    {
        label: 'X > Y',
        input: frogJmp(85, 20, 30),
        shouldBe: -1
    },
    {
        label: 'X = Y',
        input: frogJmp(20, 20, 30),
        shouldBe: -1
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))