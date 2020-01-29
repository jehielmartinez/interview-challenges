//https://dev.to/thepracticaldev/daily-challenge-174-soccer-league-table-2393

function DNA_strand (str) {
    let result = '';
    for(i=0; i<str.length; i++){    
        switch (str[i]) {
            case 'A':
                result = result + 'T';
                break;
            case 'T':
                result = result + 'A';
                break;
            case 'C':
                result = result + 'G';
                break;
            case 'G':
                result = result + 'C';
                break;
            default:
                return result = 'Your DNA is not from this planet';
        }
    }
    return result
};

//Tests
const cases = [
    {
        label: 'ATTGC',
        input: DNA_strand('ATTGC'),
        shouldBe: 'TAACG'
    },
    {
        label: 'GTTAAC',
        input: DNA_strand('GTTAAC'),
        shouldBe: 'CAATTG'
    },
    {
        label: 'AAAA',
        input: DNA_strand('AAAA'),
        shouldBe: 'TTTT'
    },
    {
        label: 'Invalid DNA',
        input: DNA_strand('CTHCC'),
        shouldBe: 'Your DNA is not from this planet'
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))