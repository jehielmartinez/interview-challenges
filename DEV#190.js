//https://dev.to/thepracticaldev/daily-challenge-190-capitalizefirstlast-58jf

function capitalizeFirstLast(str) {
    return str.replace(/[^\s]+/g, (match) => {
        replaceStr = '';
        const len = match.length;
        
        for(i=0; i<len; i++){
            if(i === 0 || i === len-1){
                replaceStr = replaceStr + match[i].toUpperCase();
            } else {
                replaceStr = replaceStr + match[i].toLowerCase();
            }
        }

        return replaceStr
    });
};

//Tests
const cases = [
    {
        label: 'and still i rise',
        input: capitalizeFirstLast('and still i rise'),
        shouldBe: 'AnD StilL I RisE'
    },
    {
        label: 'when words fail music speaks',
        input: capitalizeFirstLast('when words fail music speaks'),
        shouldBe: 'WheN WordS FaiL MusiC SpeakS'
    },
    {
        label: 'WHAT WE THINK WE BECOME',
        input: capitalizeFirstLast('WHAT WE THINK WE BECOME'),
        shouldBe: 'WhaT WE ThinK WE BecomE'
    },
    {
        label: 'dIe wITh mEMORIEs nOt dREAMs',
        input: capitalizeFirstLast('dIe wITh mEMORIEs nOt dREAMs'),
        shouldBe: 'DiE WitH MemorieS NoT DreamS'
    },
    {
        label: 'hello',
        input: capitalizeFirstLast('hello'),
        shouldBe: 'HellO'
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))
