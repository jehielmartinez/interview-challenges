//https://dev.to/thepracticaldev/daily-challenge-174-soccer-league-table-2393

class LeagueTable {
    constructor(){
        this.matches = []
    }

    push = (matchStr) => {
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
        };

        this.matches.push(match);

        return JSON.stringify(match);
    };

    get_points = (teamName) => {
        let points = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName){
                points += match.homeScore;
            } else if(match.awayTeam === teamName){
                points += match.awayScore;
            }
        })
    
        return points;
    };

    get_goals_for = (teamName) => {
        let goals = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName){
                goals += match.homeGoals;
            } else if(match.awayTeam === teamName){
                goals += match.awayGoals;
            }
        });
    
        return goals;
    };

    get_goals_against = (teamName) => {
        let goals = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName){
                goals += match.awayGoals;
            } else if(match.awayTeam === teamName){
                goals += match.homeGoals;
            }
        });
    
        return goals;
    };

    get_goals_difference = (teamName) => {
        let diff = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName){
                diff += (match.homeGoals - match.awayGoals);
            } else if(match.awayTeam === teamName){
                diff += (match.awayGoals - match.homeGoals);;
            }
        });
    
        return diff;
    };

    get_wins = (teamName) => {
        let wins = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName && match.homeScore === 3){
                wins++
            } else if(match.awayTeam === teamName && match.awayScore === 3){
                wins++
            }
        });
    
        return wins;
    };
    
    get_draws = (teamName) => {
        let draws = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName && match.homeScore === 1){
                draws++
            } else if(match.awayTeam === teamName && match.awayScore === 1){
                draws++
            }
        });
    
        return draws;
    };

    get_losses = (teamName) => {
        let losses = 0;
    
        this.matches.forEach(match => {
            if(match.homeTeam === teamName && match.homeScore === 0){
                losses++
            } else if(match.awayTeam === teamName && match.awayScore === 0){
                losses++
            }
        });
    
        return losses;
    };
};

worldCup2020 = new LeagueTable();

//Tests
const cases = [
    {
        label: 'Man Utd 2 - 1 Liverpool',
        input: worldCup2020.push('Man Utd 2 - 1 Liverpool'),
        shouldBe: JSON.stringify({
            homeTeam: 'Man Utd',
            awayTeam: 'Liverpool',
            homeGoals: 2,
            awayGoals: 1,
            homeScore: 3,
            awayScore: 0
        })
    },
    {
        label: 'Liverpool 3 - 0 Man Utd',
        input: worldCup2020.push('Liverpool 3 - 0 Man Utd'),
        shouldBe: JSON.stringify({
            homeTeam: 'Liverpool',
            awayTeam: 'Man Utd',
            homeGoals: 3,
            awayGoals: 0,
            homeScore: 3,
            awayScore: 0
        })
    },
    {
        label: 'Get Liverpool points',
        input: worldCup2020.get_points('Liverpool'),
        shouldBe: 3
    },
    {
        label: 'Get Man Utd points',
        input: worldCup2020.get_points('Man Utd'),
        shouldBe: 3
    },
    {
        label: 'Get Liverpool goals',
        input: worldCup2020.get_goals_for('Liverpool'),
        shouldBe: 4
    },
    {
        label: 'Get Man Utd goals',
        input: worldCup2020.get_goals_for('Man Utd'),
        shouldBe: 2
    },
    {
        label: 'Get goals against Liverpool',
        input: worldCup2020.get_goals_against('Liverpool'),
        shouldBe: 2
    },
    {
        label: 'Get goals against Man Utd',
        input: worldCup2020.get_goals_against('Man Utd'),
        shouldBe: 4
    },
    {
        label: 'Get goals difference Liverpool',
        input: worldCup2020.get_goals_difference('Liverpool'),
        shouldBe: 2
    },
    {
        label: 'Get goals difference Man Utd',
        input: worldCup2020.get_goals_difference('Man Utd'),
        shouldBe: -2
    },
    {
        label: 'Get wins Liverpool',
        input: worldCup2020.get_wins('Liverpool'),
        shouldBe: 1
    },
    {
        label: 'Get wins Man Utd',
        input: worldCup2020.get_wins('Man Utd'),
        shouldBe: 1
    },
    {
        label: 'Get losses Liverpool',
        input: worldCup2020.get_losses('Liverpool'),
        shouldBe: 1
    },
    {
        label: 'Get losses Man Utd',
        input: worldCup2020.get_losses('Man Utd'),
        shouldBe: 1
    },
    {
        label: 'Get draws Liverpool',
        input: worldCup2020.get_draws('Liverpool'),
        shouldBe: 0
    },
    {
        label: 'Get draws Man Utd',
        input: worldCup2020.get_draws('Man Utd'),
        shouldBe: 0
    }
]

cases.map(test => console.log((test.input == test.shouldBe ? '✅' : '❗') + "  " + test.label + " => " + "Should be: " + test.shouldBe + " received: " + test.input))