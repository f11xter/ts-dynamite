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

        for (let length = 3; length < gamestate.rounds.length - 1; length++) {
            const matches: number[] = [];

            for (let start = 0; start < gamestate.rounds.length - length - 1; start++) {
                let match = true;

                for (let offset = 0; offset < length; offset++) {
                    if (gamestate.rounds[start + offset].p2 !== gamestate.rounds[gamestate.rounds.length - length + offset].p2) {
                        match = false;
                        break;
                    }
                }

                if (match) matches.push(start);
            }

            if (matches.length > 0) sel = wins[gamestate.rounds[matches[matches.length - 1] + length].p2];
        }

        return sel ?? options[Math.floor(Math.random() * 4)];
    }
}

export = new Bot();