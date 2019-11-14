// Write a program that implements logic gates AND, OR, NOT, NAND, NOR, XOR, and XNOR.
// @Cassidoo newsletter from 11-11-2019

function LogicGate(gate, A, B) {
    if (A == 1) 
        A = true
    else if (A == 0) 
        A == false
    else 
        return 'Insert 1 or 0 in variables'

    if (B == 1) 
        B = true
    else if (B == 0) 
        B == false
    else 
        return 'Insert 1 or 0 in variables'
    
    switch (gate){
        case 'AND':
            if (!A || !B) 
                return 0;
            else 
                return 1;
        case 'OR':
            if (A || B) 
                return 1;
            else 
                return 0;
        case 'XOR':
            if (A == B) 
                return 0;
            else 
                return 1;
        case 'NAND':
            if (A && B) 
                return 0;
            else 
                return 1;
        case 'NOR':
            if (!A && !B) 
                return 1;
            else 
                return 0;
        case 'XNOR':
            if (A == B) 
                return 1;
            else 
                return 0;
        default: 
            return 'Unknown gate';
    }
}

//Testing
const cases = [
    {
        label: 'Incorrect Values A',
        input: LogicGate('AND', 2, 1),
        shouldBe: 'Insert 1 or 0 in variables'
    },
    {
        label: 'Incorrect Values B',
        input: LogicGate('AND', 0, 3),
        shouldBe: 'Insert 1 or 0 in variables'
    },
    {
        label: 'Unknown gate',
        input: LogicGate('AD', 0, 1),
        shouldBe: 'Unknown gate'
    },
    {
        label: 'AND 0,1',
        input: LogicGate('AND', 0, 1),
        shouldBe: 0
    },
    {
        label: 'AND 1,1',
        input: LogicGate('AND', 1, 1),
        shouldBe: 1
    },
    {
        label: 'OR 0,1',
        input: LogicGate('OR', 0, 1),
        shouldBe: 1
    },
    {
        label: 'OR 1,1',
        input: LogicGate('OR', 1, 1),
        shouldBe: 1
    },
    {
        label: 'OR 0,0',
        input: LogicGate('OR', 0, 0),
        shouldBe: 0
    },
    {
        label: 'XOR 1,1',
        input: LogicGate('XOR', 1, 1),
        shouldBe: 0
    },
    {
        label: 'XOR 0,0',
        input: LogicGate('XOR', 0, 0),
        shouldBe: 0
    },
    {
        label: 'XOR 1,0',
        input: LogicGate('XOR', 1, 0),
        shouldBe: 1
    },
    {
        label: 'NAND 1,1',
        input: LogicGate('NAND', 1, 1),
        shouldBe: 0
    },
    {
        label: 'NAND 0,0',
        input: LogicGate('NAND', 0, 0),
        shouldBe: 1
    },
    {
        label: 'NAND 1,0',
        input: LogicGate('NAND', 1, 0),
        shouldBe: 1
    },
    {
        label: 'NOR 1,1',
        input: LogicGate('NOR', 1, 1),
        shouldBe: 0
    },
    {
        label: 'NOR 0,0',
        input: LogicGate('NOR', 0, 0),
        shouldBe: 1
    },
    {
        label: 'NOR 1,0',
        input: LogicGate('NOR', 1, 0),
        shouldBe: 0
    },
    {
        label: 'XNOR 1,1',
        input: LogicGate('XNOR', 1, 1),
        shouldBe: 1
    },
    {
        label: 'XNOR 0,0',
        input: LogicGate('XNOR', 0, 0),
        shouldBe: 1
    },
    {
        label: 'XNOR 1,0',
        input: LogicGate('XNOR', 1, 0),
        shouldBe: 0
    },
]


cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))