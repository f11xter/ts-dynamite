import {BotSelection, Gamestate} from '../models/gamestate';

class Bot {
    p1dynamite = 100;
    p2dynamite = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        const options: BotSelection[] = ['R', 'P', 'S', 'D', 'W'];
        const wins: {} = {'R': 'P', 'P': 'S', 'S': 'R', 'D': 'W', 'W': 'R'};
        let sel: BotSelection;

        // start with random RPS
        if (gamestate.rounds.length === 0) return options[Math.floor(Math.random() * 3)];

        // track dynamite use
        if (gamestate.rounds[gamestate.rounds.length - 1].p1 === 'D') this.p1dynamite--;
        if (gamestate.rounds[gamestate.rounds.length - 1].p2 === 'D') this.p2dynamite--;

        if (gamestate.rounds.length >= 3) {
            const matches: number[] = [];

            for (let i = 0; i < gamestate.rounds.length - 3; i++) {
                if (gamestate.rounds[i].p2 === gamestate.rounds[gamestate.rounds.length - 3].p2 &&
                    gamestate.rounds[i + 1].p2 === gamestate.rounds[gamestate.rounds.length - 2].p2 &&
                    gamestate.rounds[i + 2].p2 === gamestate.rounds[gamestate.rounds.length - 1].p2
                ) {
                    matches.push(i);
                }
            }

            if (matches.length > 0) sel = wins[gamestate.rounds[matches[0] + 3].p2];
        }

        return sel ?? options[Math.floor(Math.random() * 4)];
    }
}

export = new Bot();
