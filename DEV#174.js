//https://dev.to/thepracticaldev/daily-challenge-174-soccer-league-table-2393

function LeagueTable() {
    this.matches = []
};

LeagueTable.prototype.push = function (matchStr){
    const teams = matchStr.split(' - ');
    
    const homeTeam = teams[0].slice(0,-2);
    const awayTeam = teams[1].slice(2);
    const homeGoals = parseInt(teams[0].slice(-2));
    const awayGoals = parseInt(teams[1].slice(0, 2));
    
    let homeScore = 0;
    let awayScore = 0;

    if(homeGoals == awayGoals) {
        homeScore = 1;
        awayScore = 1;
    } else if(homeGoals > awayGoals){
        homeScore = 3;
    } else {
        awayScore = 0;
    }

    const match = {
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        homeScore,
        awayScore,
    }

    this.matches.push(match)

    console.log(this.matches)

    return 0
}

worldCup2020 = new LeagueTable()

//Tests
const cases = [
    {
        label: 'Man Utd 2 - 1 Liverpool',
        input: worldCup2020.push('Man Utd 2 - 1 Liverpool'),
        shouldBe: 'Man Utd 2 - 1 Liverpool'
    },
    {
        label: 'Liverpool 3 - 0 Man Utd',
        input: worldCup2020.push('Liverpool 3 - 0 Man Utd'),
        shouldBe: 'Man Utd 2 - 1 Liverpool'
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))